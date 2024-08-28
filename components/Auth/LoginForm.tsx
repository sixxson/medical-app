"use client"
import React from 'react'
import Link from "next/link"
import { LoginInputProps } from '@/types/types'
import { useForm } from 'react-hook-form'
import TextInput from '../FormInput/TextInput'
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { HiInformationCircle } from 'react-icons/hi'
import { Alert } from 'flowbite-react'
import SubmitButton from '../FormInput/SubmitButton'

export default function LoginForm() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [showNotification, setShowNotification] = React.useState(false)
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<LoginInputProps>()

    async function onSubmit(data: LoginInputProps) {
        try {
            setIsLoading(true);
            console.log("Attempting to sign in with credentials:", data);
            const loginData = await signIn("credentials", {
                ...data,
                redirect: false,
            });
            console.log("SignIn response:", loginData);
            if (loginData?.error) {
                setIsLoading(false);
                toast.error("Sign-in error: Check your credentials");
                setShowNotification(true);
            } else {
                // Sign-in was successful
                setShowNotification(false);
                reset();
                setIsLoading(false);
                toast.success("Login Successful");
                router.push("/");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Network Error:", error);
            toast.error("Its seems something is wrong with your Network");
        }
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
                        {showNotification && (
                            <Alert color="failure" icon={HiInformationCircle}>
                                <span className="font-medium">Sign-in error!</span> Please Check
                                your credentials
                            </Alert>
                        )}
                        <TextInput
                            label='Email'
                            register={register}
                            name='email'
                            type='email'
                            errors={errors}
                            placeholder='abc@xyz.com'
                        />

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password", { required: true })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="********"
                                />
                                {errors.password && (
                                    <span className='text-red-600 text-sm'>Password is required</span>
                                )}
                            </div>
                        </div>

                        <SubmitButton
                            title='Create Account'
                            isLoading={isLoading}
                            loadingTitle='Logging you in please wait ...'
                        />
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have Account?{" "}
                        <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}