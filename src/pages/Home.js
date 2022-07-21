import Layout from 'components/layout/Layout'
import Select from 'react-select'
import Input from 'components/Input'
import Form from 'components/Form'
import Button from 'components/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [vendorsOptions, setVendorsOptions] = useState([])
	const [customersOptions, setCustomersOptions] = useState([])
	const [selectedVendorOption, setSelectedVendorOption] = useState(null)
	const [selectedCustomerOption, setSelectedCustomerOption] = useState(null)
	const changeVendorHandler = selectedOption => {
		setSelectedVendorOption(selectedOption)
	}
	const changeCustomerHandler = selectedOption => {
		setSelectedCustomerOption(selectedOption)
	}
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
	useEffect(() => {
		axios
			.get('vendors')
			.then(res => {
				res.data.vendors.forEach(element => {
					setVendorsOptions([
						{ value: element.id, label: element.name },
					])
				})
			})
			.catch(err => {
				console.log(err)
			})
		axios
			.get('customers')
			.then(res => {
				res.data.customers.forEach(element => {
					setCustomersOptions([
						{
							value: element.id,
							label: element.name,
							size: element.size,
							vendorId: element.vendorId,
							orderId: element.orderId,
							suitId: element.suitId,
						},
					])
				})
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		<Layout>
			<h1>Home</h1>
			<Select
				options={vendorsOptions}
				styles={customStyles}
				value={selectedVendorOption}
				onChange={changeVendorHandler}
				placeholder="Select a Vendor..."
			/>
			<Select
				options={customersOptions}
				styles={customStyles}
				value={selectedCustomerOption}
				onChange={changeCustomerHandler}
				placeholder="Select a Customer..."
			/>
			<Form>
				{selectedCustomerOption ? (
					''
				) : (
					<Input placeholder={'Customer Name'} />
				)}

				<Button label="Order" />
			</Form>
		</Layout>
	)
}
export default Home
