/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { Button, Input, Logo } from '../index'
import { useForm } from 'react-hook-form'


const Signup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const create = async (data) => {
        setError('')

        try {
            const userData = await authService.createAccount(data)

            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex flex-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <span className="inline-block w-full max-w-[100px">
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign up to create new account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?
                <Link
                    to='/login'
                    className='font-medium text-primary transition-all duration-200 hover:underline'>Log in
                </Link>
            </p>
            {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}

            <form
                onSubmit={handleSubmit(create)}
                className='mt-8'>
                <div className="space-y-5">
                    <Input
                        label='Full Name'
                        type='text'
                        placeholder='Enter your full name'
                        {...register('name', { required: true })}
                    />
                    <Input
                        label='Email'
                        type='email'
                        placeholder='Enter your email'
                        {...register('email', {
                            required: true
                        })}
                    />

                    <Input
                        label='Password'
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', {
                            required: true
                        })}
                    />

                    <Button
                        type='submit'
                        className='w-full'
                    >
                        Create Account
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default Signup