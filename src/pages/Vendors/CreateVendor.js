import Layout from 'components/layout/Layout'
import Form from 'components/Form'
import Input from 'components/Input'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import List from 'components/List'
import Button from 'components/Button'
const CreateVendor = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [vendor, setVendor] = useState('')
	const [vendorList, setVendorList] = useState([])
	const isReady = useRef(true)
	useEffect(() => {
		axios
			.get('vendors')
			.then(res => {
				setVendorList(res.data.vendors)
			})
			.catch(err => {
				console.log(err)
			})
		isReady.current = false
	}, [isReady])
	const getVendorHandler = e => {
		setVendor(e.target.value)
	}
	const createVendorHandler = e => {
		e.preventDefault()
		axios
			.post('vendors', {
				name: vendor,
			})
			.then(res => {
				setVendorList([...vendorList, res.data.vendor])
			})
			.catch(err => {
				console.log(err)
			})
		setVendor('')
		isReady.current = true
	}
	const deleteVendor = id => {
		isReady.current = false
		axios
			.delete(`vendors/${id}`)
			.then(res => {
				setVendorList(vendorList.filter(vendor => vendor.id !== id))
			})
			.catch(err => {
				console.log(err)
			})
	}
	isReady.current = true

	return (
		<Layout>
			<h1>Create A Vendor</h1>
			<Form submitHandler={createVendorHandler}>
				<Input
					type="text"
					placeholder="A Vendor Name"
					value={vendor}
					changeHandler={getVendorHandler}
					name="vendorName"
				/>
				<Button type="submit" label="Create Vendor" />
			</Form>
			<List
				list={vendorList}
				title="Vendors"
				deleteHandler={deleteVendor}
			/>
		</Layout>
	)
}
export default CreateVendor
