import Layout from 'components/layout/Layout'
import Form from 'components/Form'
import Input from 'components/Input'
import axios from 'axios'
import { useState } from 'react'
const CreateVendor = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [vendor, setVendor] = useState('')
	const [vendorList, setVendorList] = useState([])
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
	}
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
			</Form>
			<div>
				<ul>
					{vendorList.map(vendor => {
						return <li key={vendor.id}>{vendor.name}</li>
					})}
				</ul>
			</div>
		</Layout>
	)
}
export default CreateVendor
