import Layout from 'components/layout/Layout'
import Select from 'react-select'
import axios from 'axios'
import Form from 'components/Form'
import Input from 'components/Input'
import { useState, useEffect, useLayoutEffect } from 'react'
import FileUpload from 'components/FileUpload'

const Home = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [vendorsOptions, setVendorsOptions] = useState([])
	const [customersOptions, setCustomersOptions] = useState([])
	const [selectedVendorOption, setSelectedVendorOption] = useState('')
	const [selectedCustomerOption, setSelectedCustomerOption] = useState('')

	const [jacketDesc, setJacketDesc] = useState('')
	const [jacketImage, setJacketImage] = useState(null)
	const [pantsDesc, setPantsDesc] = useState('')
	const [pantsImage, setPantsImage] = useState(null)
	const [waistcoatDesc, setWaistcoatDesc] = useState('')
	const [waistcoatImage, setWaistcoatImage] = useState(null)
	const changeVendorHandler = selectedOption => {
		setSelectedVendorOption(selectedOption)
	}
	const changeCustomerHandler = selectedOption => {
		setSelectedCustomerOption(selectedOption)
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
	const jacketImageHandler = e => {
		let fileObj = {}
		const files = Array.from(e.target.files)
		files.forEach(file => {
			fileObj = {
				name: file.name,
				file,
			}
		})
		setJacketImage(fileObj)
	}
	const pantsImageHandler = e => {
		let fileObj = {}
		const files = Array.from(e.target.files)
		files.forEach(file => {
			fileObj = {
				name: file.name,
				file,
			}
		})
		setPantsImage(fileObj)
	}
	const waistcoatImageHandler = e => {
		let fileObj = {}
		const files = Array.from(e.target.files)
		files.forEach(file => {
			fileObj = {
				name: file.name,
				file,
			}
		})
		setWaistcoatImage(fileObj)
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
				<Input
					title="Jacket"
					input={false}
					placeholder="Jacket Desc"
					value={jacketDesc}
					name="jacketDesc"
					changeHandler={changeJacketDescHandler}
				/>
				<FileUpload
					fileHandler={pantsImageHandler}
					file={jacketImage}
					name="jacketPhoto"
				/>

				<Input
					title="Pants"
					input={false}
					placeholder="Pants Desc"
					value={pantsDesc}
					name="pantsDesc"
					changeHandler={changePantsDescHandler}
				/>
				<FileUpload
					fileHandler={jacketImageHandler}
					file={pantsImage}
					name="pantsPhoto"
				/>

				<Input
					title="Waistcoat"
					input={false}
					placeholder="Waistcoat Desc"
					value={waistcoatDesc}
					name="waistcoatDesc"
					changeHandler={changeWaistcoatDescHandler}
				/>
				<FileUpload
					fileHandler={waistcoatImageHandler}
					file={waistcoatImage}
					name="waistcoatPhoto"
				/>
			</Form>
		</Layout>
	)
}
export default Home
