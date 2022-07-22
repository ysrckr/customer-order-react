import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home'
import CreateVendor from './pages/Vendors/CreateVendor'
import CreateCustomer from './pages/Customers/CreateCustomer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/vendor/create" element={<CreateVendor />} />
			<Route path="/customer/create" element={<CreateCustomer />} />
		</Routes>
	</BrowserRouter>,
)
