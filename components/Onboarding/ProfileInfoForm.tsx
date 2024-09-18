"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import {  ProfileFormProps, StepFormProps } from "@/types/types"
import { DatePickerInput } from "../FormInput/DatePickerInput"
import TextAreaInput from "../FormInput/TextAreaInput"
import toast from "react-hot-toast"
import ImageInput from "../FormInput/ImageInput"
import SelectionInput from "../FormInput/SelectionInput"
import { Profile } from "next-auth"
import { createDoctorProfile } from "@/actions/onboarding"
import { useRouter } from "next/navigation"

export default function ProfileInfoForm({ page, title, description }: StepFormProps) {
    const [expiry, setExpiry] = React.useState<Date>()
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormProps>()
    const [profileImage, setProfileImage] = React.useState()
    const router = useRouter()

    async function onSubmit(data: ProfileFormProps) {
        if (!expiry) {
            toast.error('Please select your Medical License Expiry')
            return
        }
        setIsLoading(true)
        data.medicalLicenseExpiration = expiry
        data.page = page
        console.log(data);
        
    }
    return (
        <div className="w-full">
            <div className=" text-center border border-gray-200 pb-4">
                <h2 className="text-4xl font-semibold scroll-m-20 tracking-tight lg:text-5xl dark:text-gray-700">
                    {title}
                </h2>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>
            <form
                className="mx-auto max-w-3xl py-4 px-4 dark:text-gray-800 text-base"
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="grid gap-4 grid-cols-2">
                    <TextInput
                        label='Email Address'
                        register={register}
                        name='email'
                        type='email'
                        errors={errors}
                        placeholder='ex: abc@xyz.com'
                    />
                    <TextInput
                        label='Phone Number'
                        register={register}
                        name='phone'
                        type='tel'
                        errors={errors}
                        placeholder='ex: 08012345678'
                        className="col-span-full sm:col-span-1"
                    />
                    <DatePickerInput
                        title="Medical License Expiry"
                        date={expiry}
                        setDate={setExpiry} 
                        errors={errors}
                        className="col-span-full sm:col-span-1"
                    />
                    <TextAreaInput
                        label='Enter your Biography'
                        register={register}
                        name='bio'
                        type='text'
                        errors={errors}
                        placeholder='Enter your Biography'
                        className="col-span-full"
                    />
                    <ImageInput
                        label='Professional Profile Image'
                        imageUrl={profileImage}
                        setImageUrl={setProfileImage}
                        endpoint='doctorProfileImage'
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