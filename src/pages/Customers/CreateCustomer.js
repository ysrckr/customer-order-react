import Layout from 'components/layout/Layout'
import Form from 'components/Form'
import Input from 'components/Input'
import List from 'components/List'
import styles from 'styles/modules/CreateCustomer.module.scss'
import Select from 'react-select'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from 'components/Button'
const CreateCustomer = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [customer, setCustomer] = useState('')
	const [customerList, setCustomerList] = useState([])
	const [vendorList, setVendorList] = useState([])
	const [selectedVendor, setSelectedVendor] = useState('')
	const [customerSize, setCustomerSize] = useState('')
	const [jacketLength, setJacketLength] = useState('')
	const [chest, setChest] = useState('')
	const [jacketWaist, setJacketWaist] = useState('')
	const [shoulder, setShoulder] = useState('')
	const [sleeve, setSleeve] = useState('')
	const [bicep, setBicep] = useState('')
	const [crotch, setCrotch] = useState('')
	const [pantsLength, setPantsLength] = useState('')
	const [pantsWaist, setPantsWaist] = useState('')
	const [hip, setHip] = useState('')
	const [knee, setKnee] = useState('')

	useEffect(() => {
		axios
			.get('vendors')
			.then(res => {
				const vendors = res.data.vendors
				const vendor = vendors?.map(vendor => {
					return {
						value: vendor.id,
						label: vendor.name,
					}
				})
				setVendorList([...vendor])
			})
			.catch(err => {
				console.log(err)
			})

		if (!vendorList) return

		axios
			.get('customers')
			.then(res => {
				setCustomerList(res.data.customers)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	const changeCustomerSizeHandler = e => {
		setCustomerSize(e.target.value)
	}
	const changeVendorHandler = selectedOption => {
		setSelectedVendor(selectedOption)
	}
	const getCustomerHandler = e => {
		setCustomer(e.target.value)
	}
	const createCustomerHandler = e => {
		e.preventDefault()
		axios
			.post('customers', {
				name: customer,
				vendorId: selectedVendor.value,
				size: customerSize,
				jacket_length: jacketLength,
				chest,
				jacket_waist: jacketWaist,
				shoulder,
				sleeve,
				bicep,
				crotch,
				pants_length: pantsLength,
				pants_waist: pantsWaist,
				hip,
				knee,
			})
			.then(res => {
				setCustomerList([...customerList, res.data.customer])
			})
			.catch(err => {
				console.log(err)
			})
		setSelectedVendor('')
		setCustomer('')
		setCustomerSize('')
		setJacketLength('')
		setChest('')
		setJacketWaist('')
		setShoulder('')
		setSleeve('')
		setBicep('')
		setCrotch('')
		setPantsLength('')
		setPantsWaist('')
		setHip('')
		setKnee('')
	}
	const deleteCustomer = id => {
		axios
			.delete(`customers/${id}`)
			.then(res => {})
			.catch(err => {
				console.log(err)
			})
		setCustomerList(customerList.filter(customer => customer.id !== id))
	}
	useEffect(() => {})
	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderRadius: '5px',
			textAlign: 'center',
			backgroundColor: state.isSelected ? '#000' : '#fff',
			color: state.isSelected ? '#fff' : '#000',
			fontSize: '1.2rem',
			width: '360px',
			'&:hover': {
				backgroundColor: '#000',
				color: '#fff',
			},
		}),
		control: (provided, state) => ({
			...provided,
			width: '360px',
		}),
	}
	return (
		<Layout>
			<h1>Create A Customer</h1>
			<Select
				options={vendorList}
				styles={customStyles}
				value={selectedVendor}
				onChange={changeVendorHandler}
				placeholder="Select a Vendor..."
			/>
			<Form submitHandler={createCustomerHandler}>
				<Input
					type="text"
					placeholder="A Customer Name"
					value={customer}
					changeHandler={getCustomerHandler}
					name="customerName"
				/>
				{selectedVendor && (
					<>
						<Input
							input={true}
							type="number"
							placeholder="Customer Size"
							value={customerSize}
							name="customerSize"
							changeHandler={changeCustomerSizeHandler}
						/>
						<div className={styles.grid}>
							<Input
								input={true}
								type="number"
								placeholder="Jacket Length"
								value={jacketLength}
								name="jacketLength"
								changeHandler={e =>
									setJacketLength(e.target.value)
								}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Chest"
								value={chest}
								name="chest"
								changeHandler={e => setChest(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Jacket Waist"
								value={jacketWaist}
								name="jacketWaist"
								changeHandler={e =>
									setJacketWaist(e.target.value)
								}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Shoulder"
								value={shoulder}
								name="shoulder"
								changeHandler={e => setShoulder(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Sleeve"
								value={sleeve}
								name="sleeve"
								changeHandler={e => setSleeve(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Bicep"
								value={bicep}
								name="bicep"
								changeHandler={e => setBicep(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Crotch"
								value={crotch}
								name="crotch"
								changeHandler={e => setCrotch(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Pants Waist"
								value={pantsWaist}
								name="pantsWaist"
								changeHandler={e =>
									setPantsWaist(e.target.value)
								}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Pants Length"
								value={pantsLength}
								name="pantsLength"
								changeHandler={e =>
									setPantsLength(e.target.value)
								}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Hip"
								value={hip}
								name="hip"
								changeHandler={e => setHip(e.target.value)}
								step="0.01"
							/>
							<Input
								input={true}
								type="number"
								placeholder="Knee"
								value={knee}
								name="knee"
								changeHandler={e => setKnee(e.target.value)}
								step="0.01"
							/>
						</div>
					</>
				)}
				<Button type="submit" label="Create Customer" />
			</Form>
			<List
				list={customerList}
				title="Customers"
				deleteHandler={deleteCustomer}
			/>
		</Layout>
	)
}
export default CreateCustomer
