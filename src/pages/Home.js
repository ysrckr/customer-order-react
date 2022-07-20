import Layout from '../components/layout/Layout'
import Selector from '../components/Selector'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Home = () => {
	axios.defaults.baseURL = 'http://localhost:5001/api/v1/'
	const [selectionValue, setSelectionValue] = useState('default')
	const [options, setOptions] = useState([])
	const getSelectionValue = e => {
		setSelectionValue(e.target.value)
	}
	useEffect(() => {
		axios
			.get('vendors')
			.then(res => {
				const vendors = [...res.data.vendors]
				setOptions(vendors)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		<Layout>
			<h1>Home</h1>
			<Selector
				type="Vendors"
				selectionValue={selectionValue}
				options={options}
				getSelectionValue={getSelectionValue}
			/>
		</Layout>
	)
}
export default Home
