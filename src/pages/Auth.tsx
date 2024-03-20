'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthForm } from "../types/auth.types";
import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.service.ts';

export default function Auth() {
		 const { register, handleSubmit, reset } = useForm<IAuthForm>({
			mode: 'onChange'
		 })

		 const [ isLoginForm, setIsLoginForm ] = useState(false)

		 const { mutate } = useMutation({
			mutationKey: ['auth'],
			mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
			onSuccess() {
				reset()
				console.log('SUCCESS')
			}
		 })

		 const onSubmit: SubmitHandler<IAuthForm> = data => {
			mutate(data)
		 }

		 return (
			<div className='flex min-h-screen'>
				<form className='w-1/4 m-auto shadow bg-slate-500 rounded-xl p-layout' 
				onSubmit={handleSubmit(onSubmit)}>
					<div className='flex items-center gap-5 justify-center'>
adaddas
					</div>
				</form>
				Hello Auth page
			</div>
		)
}