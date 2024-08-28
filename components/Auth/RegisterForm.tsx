"use client";
import React from 'react'
import Link from "next/link"
import { useForm } from "react-hook-form"
import { RegisterInputProps } from '@/types/types'
import TextInput from '../FormInput/TextInput';
import SubmitButton from '../FormInput/SubmitButton';
import { createUser } from '@/actions/users';
import { UserRole } from '@prisma/client';
import { set } from 'date-fns';
import toast from 'react-hot-toast';


export default function RegisterForm({ role = "USER" }: { role: UserRole }) {

    const [isLoading, setIsLoading] = React.useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterInputProps>()

    async function onSubmit(data: RegisterInputProps) {
        setIsLoading(true)
        data.role = role
        try {
            const user = await createUser(data)

            if (user && user.status === 200) {
                console.log("User created successfully");
                reset()
                setIsLoading(false)
                console.log(user.data);
                toast.success("User created successfully")
            } else {
                console.log(
                    "User not created successfully ",
                    user.error
                );
            }

        } catch (error) {
            console.log(error)
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
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-4">

                        <TextInput
                            label='Full Name'
                            register={register}
                            name='fullName'
                            type='text'
                            errors={errors}
                            placeholder='Nguyen Van A'
                        />

                        <TextInput
                            label='Phone Number'
                            register={register}
                            name='phone'
                            type='tel'
                            errors={errors}
                            placeholder='0123456789'
                        />

                        <TextInput
                            label='Email'
                            register={register}
                            name='email'
                            type='email'
                            errors={errors}
                            placeholder='abc@def.xyz'
                        />

                        <TextInput
                            label='Password'
                            register={register}
                            name='password'
                            type='password'
                            errors={errors}
                            placeholder='********'
                        />

                        <SubmitButton
                            title='Create Account'
                            isLoading={isLoading}
                            loadingTitle='Creating please wait ...'
                        />
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Have an account?
                        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}