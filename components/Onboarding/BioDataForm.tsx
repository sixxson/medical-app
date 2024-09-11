"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import toast from "react-hot-toast"
import { Alert } from "flowbite-react"
import { HiInformationCircle } from "react-icons/hi"
import Image from "next/image"
import TextInput from "../FormInput/TextInput"
import { RegisterInputProps } from "@/types/types"
import { createUser } from "@/actions/users"
import { UserRole } from "@prisma/client"


export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function BioDataForm() {

    const [isLoading, setIsLoading] = React.useState(false)
    const [showNotification, setShowNotification] = React.useState(false)
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterInputProps>()

    async function onSubmit(data: RegisterInputProps) {
        setIsLoading(true)
    }
    return (
        <div className="w-full">
            <div className=" text-center border border-gray-200 pb-4">
                <h1 className="text-4xl font-extrabold scroll-m-20 tracking-tight lg:text-5xl">
                    Bio Data
                </h1>
                <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                </p>
            </div>
            <form
                className="mx-auto max-w-3xl  py-4 px-4 "
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="grid gap-4 grid-cols-2">
                    <TextInput
                        label='Full Name'
                        register={register}
                        name='fullName'
                        type='text'
                        errors={errors}
                        placeholder='Nguyen Van A'
                        
                    />
                    <TextInput
                        label='Full Name'
                        register={register}
                        name='fullName'
                        type='text'
                        errors={errors}
                        placeholder='Nguyen Van A'
                        className="col-span-full sm:col-span-1"
                    />
                    <TextInput
                        label='Phone Number'
                        register={register}
                        name='phone'
                        type='tel'
                        errors={errors}
                        placeholder='0123456789'
                        className="col-span-full sm:col-span-1"
                    />
                    <TextInput
                        label='Email'
                        register={register}
                        name='email'
                        type='email'
                        errors={errors}
                        placeholder='abc@def.xyz'
                        className="col-span-full sm:col-span-1"
                    />
                    <TextInput
                        label='Email'
                        register={register}
                        name='email'
                        type='email'
                        errors={errors}
                        placeholder='abc@def.xyz'
                        className="col-span-full sm:col-span-1"
                    />
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <SubmitButton
                        title='Save and Continue'
                        isLoading={isLoading}
                        loadingTitle='Saving please wait ...'
                    />
                </div>
            </form>
        </div>
    )
}