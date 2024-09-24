"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import { ProfileFormProps, StepFormProps } from "@/types/types"
import { DatePickerInput } from "../FormInput/DatePickerInput"
import TextAreaInput from "../FormInput/TextAreaInput"
import toast from "react-hot-toast"
import ImageInput from "../FormInput/ImageInput"
import { useRouter } from "next/navigation"
import { useOnBoardingContext } from "@/context/context"
import { updateDoctorProfile } from "@/actions/onboarding"

export default function ProfileInfoForm({
    page,
    title,
    description,
    formId,
    userId,
    nextPage
}: StepFormProps) {
    const [expiry, setExpiry] = React.useState<Date>()
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormProps>()
    const [profileImage, setProfileImage] = React.useState()
    const router = useRouter()
    const { truckingNumber, doctorProfileId, } = useOnBoardingContext()

    async function onSubmit(data: ProfileFormProps) {
        setIsLoading(true)
        if (!expiry) {
            toast.error('Please select your Medical License Expiry')
            return
        }
        data.profilePicture = profileImage
        data.medicalLicenseExpiration = expiry
        data.yearsOfExperience = Number(data.yearsOfExperience)
        data.page = page
        console.log(data);
        try {
            const res = await updateDoctorProfile(formId, data)
            if (res?.status === 201) {
                setIsLoading(false)
                toast.success('Profile Updated Successfully')
                router.push(`/onboarding/${userId}?page=${nextPage}`)
                console.log(res.data);
            } else {
                setIsLoading(false)
                throw new Error('Something went wrong')
            }
        } catch (error) {
            setIsLoading(false)
        }
    }
    return (
        <div className="w-full">
            <div className=" text-center border border-gray-200 pb-4">
                <p>truckingNumber:{truckingNumber}</p>
                <p>doctorProfile:{doctorProfileId}</p>
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
                        label='Medical License'
                        register={register}
                        name='medicalLicense'
                        type='text'
                        errors={errors}
                        placeholder='Enter your Medical License'
                    />
                    <TextInput
                        label='Years of Experience'
                        register={register}
                        name='yearsOfExperience'
                        type='number'
                        errors={errors}
                        placeholder='ex: 1 year'
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