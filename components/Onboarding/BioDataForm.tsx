"use client"
import React from "react"
import SubmitButton from "../FormInput/SubmitButton"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import { BioDataFormProps, StepFormProps } from "@/types/types"
import { DatePickerInput } from "../FormInput/DatePickerInput"
import RadioInput from "../FormInput/RadioInput"
import toast from "react-hot-toast"
import { generateTrackingNumber } from "@/lib/generateTracking"
import { createDoctorProfile, updateDoctorProfile } from "@/actions/onboarding"
import { useRouter } from "next/navigation"
import { useOnBoardingContext } from "@/context/context"

export default function BioDataForm(
    {
        page,
        title,
        description,
        userId,
        formId,
        nextPage
    }: StepFormProps
) {
    // Get Context Data
    const { bioData, setBioData, setTruckingNumber, setDoctorProfileId, saveDbData, } = useOnBoardingContext()
    const [isLoading, setIsLoading] = React.useState(false)
    const genderOptions = [{ label: "Male", value: "male" }, { label: "Female", value: "female" }]
    const initialDob = bioData.dob || saveDbData.dob
    const router = useRouter()
    const [dob, setDOB] = React.useState<Date>(initialDob)
    const { register, handleSubmit, formState: { errors } } = useForm<BioDataFormProps>({
        defaultValues: {
            firstName: bioData.firstName || saveDbData.firstName,
            lastName: bioData.lastName || saveDbData.lastName,
            middleName: bioData.middleName || saveDbData.middleName,
            gender: bioData.gender || saveDbData.gender,
            dob: bioData.dob || saveDbData.dob,
            page: bioData.page || saveDbData.page,
        }
    })

    async function onSubmit(data: BioDataFormProps) {
        setIsLoading(true)
        if (!dob) {
            toast.error('Please select your Date of Birth')
            setIsLoading(false)
            return
        }
        data.dob = dob
        data.trackingNumber = generateTrackingNumber()
        data.userId = userId as string
        data.page = page
        console.log(data);
        try {
            if (formId) {
                //save data to database
                setIsLoading(false)
                const res = await updateDoctorProfile(formId, data)
                setBioData(data)
                // save the data to context api - ToDo
                if (res?.status === 201) {
                    toast.success('Bio Data Updated Successfully')
                    router.push(`/onboarding/${userId}?page=${nextPage}`)
                    console.log(res.data);
                } else {
                    setIsLoading(false)
                    throw new Error('Something went wrong')
                }
            } else {
                //save data to database
                const res = await createDoctorProfile(data)
                setIsLoading(false)
                // save the data to context api - ToDo
                setBioData(data)
                if (res.status === 201) {
                    toast.success('Doctor Profile Created Successfully')
                    setTruckingNumber(res.data?.trackingNumber ?? "")
                    setDoctorProfileId(res.data?.id ?? "")
                    router.push(`/onboarding/${userId}?page=${nextPage}`)
                    console.log(res.data);
                    //Route to Next Form
                } else {
                    setIsLoading(false)
                    throw new Error('Something went wrong')
                }
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    return (
        <div className="w-full">
            <div className=" text-center border border-gray-200 pb-4 dark:text-slate-900 ">
                <h2 className="text-4xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                    {title}
                </h2>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>
            <form
                className="mx-auto max-w-3xl dark:text-slate-400 py-4 px-4 "
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="grid gap-4 grid-cols-2">
                    <TextInput
                        label='Frist Name'
                        register={register}
                        name='firstName'
                        type='text'
                        errors={errors}
                        placeholder='Nguyen'
                        className="col-span-full sm:col-span-1"
                    />
                    <TextInput
                        label='Last Name'
                        register={register}
                        name='lastName'
                        type='text'
                        errors={errors}
                        placeholder='A'
                        className="col-span-full sm:col-span-1"
                    />
                    <TextInput
                        label='Middle Name (Optional)'
                        register={register}
                        name='middleName'
                        type='text'
                        isRequired={false}
                        errors={errors}
                        placeholder='Van'
                        className="col-span-full sm:col-span-1"
                    />
                    <DatePickerInput
                        errors={errors}
                        date={dob}
                        setDate={setDOB}
                        className="col-span-full sm:col-span-1"
                        title="Date of Birth"
                    />
                    <RadioInput
                        radioOptions={genderOptions}
                        errors={errors}
                        title="Gender"
                        register={register}
                        name="gender"
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