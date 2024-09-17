"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import { ProfileFormProps, StepFormProps } from "@/types/types"
import TextAreaInput from "../FormInput/TextAreaInput"
import RadioInput from "../FormInput/RadioInput"

export default function Availability({ page, title, description }: StepFormProps) {
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormProps>()
    const availabilityOptions = [
        {
        label:
        'Weekly (Youre available one or more time during the week, every week)',
        value:'weekly'
    },
    {
        label:'Specific Dates(Youre available on specific dates)',
        value:'specific'
    }
]
    async function onSubmit(data: ProfileFormProps) {
        data.page = page
        console.log(data);
    }
    return (
        <div className="w-full">
            <div className=" text-center border border-gray-200 pb-4">
                <h2 className="text-4xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                    {title}
                </h2>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>
            <form
                className="mx-auto max-w-3xl  py-4 px-4 "
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="grid gap-4 grid-cols-2">
                    <TextInput
                        label='What is the Duration of your Meetings'
                        register={register}
                        name='meetingDuration'
                        type='text'
                        errors={errors}
                        placeholder='eg John Doe'
                    />
                    <RadioInput 
                        radioOptions={availabilityOptions}
                        errors={errors}
                        title="When are you available for this meetting?"
                        register={register}
                        name='availability'
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