import Layout from '../components/layout/Layout'
import Select from 'react-select'
import Input from '../components/Input'
import Form from '../components/Form'
import Button from '../components/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [options, setOptions] = useState([])
	const [selectedOption, setSelectedOption] = useState(null)
	const changeHandler = selectedOption => {
		setSelectedOption(selectedOption)
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
					setOptions([{ value: element.id, label: element.name }])
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
				options={options}
				styles={customStyles}
				value={selectedOption}
				onChange={changeHandler}
			/>
			<Form>
				<Input placeholder={'Customer Name'} />
				<Button />
			</Form>
		</Layout>
	)
}
export default Home
