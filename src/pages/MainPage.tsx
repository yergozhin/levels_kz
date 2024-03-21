import React from 'react'
import { axiosWithAuth } from '../api/interceptors.ts'

export default function MainPage() {


	try {
		const response = axiosWithAuth.get("https://onelab-levels-api.vercel.app/api/companies").then(data => {
		console.log(data)
	})
	} catch(error) {
		console.log('There was an error')
	}
	
	return (
		<div>
			Hello from Main Page
		</div>
	)
}