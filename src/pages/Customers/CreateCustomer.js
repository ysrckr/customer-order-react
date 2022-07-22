import Layout from 'components/layout/Layout'
import Form from 'components/Form'
import Input from 'components/Input'
import List from 'components/List'
import Select from 'react-select'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Button from 'components/Button'
const CreateCustomer = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [customer, setCustomer] = useState('')
	const [customerList, setCustomerList] = useState([])
	const [vendorList, setVendorList] = useState([])
	const [selectedVendor, setSelectedVendor] = useState('')
	const isReady = useRef(true)
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
		isReady.current = false
	}, [isReady])
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
			})
			.then(res => {
				setCustomerList([...customerList, res.data.customer])
			})
			.catch(err => {
				console.log(err)
			})
		setSelectedVendor('')
		setCustomer('')
		isReady.current = true
	}
	const deleteCustomer = id => {
		isReady.current = false
		axios
			.delete(`customers/${id}`)
			.then(res => {
				setCustomerList(
					customerList.filter(customer => customer.id !== id),
				)
			})
			.catch(err => {
				console.log(err)
			})
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
				<Button type="submit" label='Create Customer'/>
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
