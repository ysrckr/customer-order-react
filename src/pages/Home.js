import Layout from 'components/layout/Layout'
import Select from 'react-select'
import axios from 'axios'
import Form from 'components/Form'
import Input from 'components/Input'
import { useState, useEffect, useLayoutEffect } from 'react'

const Home = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [vendorsOptions, setVendorsOptions] = useState([])
	const [customersOptions, setCustomersOptions] = useState([])
	const [selectedVendorOption, setSelectedVendorOption] = useState('')
	const [selectedCustomerOption, setSelectedCustomerOption] = useState('')
	const [customerSize, setCustomerSize] = useState('')
	const [jacketDesc, setJacketDesc] = useState('')
	const [pantsDesc, setPantsDesc] = useState('')
	const [waistcoatDesc, setWaistcoatDesc] = useState('')
	const changeVendorHandler = selectedOption => {
		setSelectedVendorOption(selectedOption)
	}
	const changeCustomerHandler = selectedOption => {
		setSelectedCustomerOption(selectedOption)
	}
	const changeCustomerSizeHandler = e => {
		setCustomerSize(e.target.value)
	}
	const changeJacketDescHandler = e => {
		setJacketDesc(e.target.value)
	}
	const changePantsDescHandler = e => {
		setPantsDesc(e.target.value)
	}
	const changeWaistcoatDescHandler = e => {
		setWaistcoatDesc(e.target.value)
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
				const vendors = res.data.vendors
				const vendor = vendors?.map(vendor => {
					return {
						value: vendor.id,
						label: vendor.name,
					}
				})
				setVendorsOptions([...vendor])
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	useLayoutEffect(() => {
		if (!selectedVendorOption) {
			return
		}
		axios
			.get(`vendors/${selectedVendorOption.value}/customers`)
			.then(res => {
				const customers = res.data.customers
				const customer = customers?.map(element => {
					return { value: element.id, label: element.name }
				})
				setCustomersOptions([...customer])
			})
			.catch(err => {
				console.log(err)
			})
	}, [selectedVendorOption])
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
			{selectedVendorOption && (
				<Select
					options={customersOptions}
					styles={customStyles}
					value={selectedCustomerOption}
					onChange={changeCustomerHandler}
					placeholder="Select a Customer..."
				/>
			)}
			<Form>
				{selectedVendorOption && selectedCustomerOption && (
					<Input
						input={true}
						type="number"
						placeholder="Customer Size"
						value={customerSize}
						name="customerSize"
						changeHandler={changeCustomerSizeHandler}
					/>
				)}

				<Input
					title="Jacket"
					input={false}
					placeholder="Jacket Desc"
					value={jacketDesc}
					name="jacketDesc"
					changeHandler={changeJacketDescHandler}
				/>

				<Input
					title="Pants"
					input={false}
					placeholder="Pants Desc"
					value={pantsDesc}
					name="pantsDesc"
					changeHandler={changePantsDescHandler}
				/>

				<Input
					title="Waistcoat"
					input={false}
					placeholder="Waistcoat Desc"
					value={waistcoatDesc}
					name="waistcoatDesc"
					changeHandler={changeWaistcoatDescHandler}
				/>
			</Form>
		</Layout>
	)
}
export default Home
