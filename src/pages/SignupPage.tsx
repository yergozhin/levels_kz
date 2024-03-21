import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthForm } from '../types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { authService } from '../services/auth.service.ts'
import { useNavigate } from 'react-router-dom'

export default function SignupPage() {
	
	const navigateTo = useNavigate()

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { mutate } = useMutation({
		mutationKey: ['signup'],
		mutationFn: (data: IAuthForm) => authService.main(
			'signup', data
		),
		onSuccess() {
			console.log('User succesfully stored')
			reset()
			navigateTo("/signin")
		}
	})
	
	const onSubmit: SubmitHandler<IAuthForm> = data => {
		console.log(data)
		mutate(data)
	 }
	
	return (
		<div className='flex min-h-screen'>
			<form className='w-1/4 m-auto shadow bg-slate-500 rounded-xl p-layout' 
			onSubmit={handleSubmit(onSubmit)}>
				<div className='flex items-center gap-5 justify-center'>
					<input {...register('email', {
						required: 'Email is required!'
					})} type="text" placeholder='email' />
					<input {...register('password', {
						required: 'Password is required!'
					})} type="text" placeholder='password' />
					<button>Register</button>
				</div>
			</form>
		</div>
	)
}