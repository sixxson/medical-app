"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import { AdditionalFormProps, StepFormProps } from "@/types/types"
import { DatePickerInput } from "../FormInput/DatePickerInput"
import RadioInput from "../FormInput/RadioInput"
import toast from "react-hot-toast"
import MultipleFileInput from "../FormInput/MultipleFileInput"
import { set } from "date-fns"
import TextAreaInput from "../FormInput/TextAreaInput"


export default function AdditionalForm({ page, title, description }: StepFormProps) {
    const [additionalDocs, setAdditionalDocs] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AdditionalFormProps>()

    async function onSubmit(data: AdditionalFormProps) {

        setIsLoading(true)
        data.page = page
        console.log(data);
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
                className="mx-auto max-w-3xl dark:text-slate-900 text-base py-4 px-4 "
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="grid gap-4 grid-cols-2">
                    <TextAreaInput
                        label='Education History'
                        register={register}
                        name='educationHistory'
                        type='text'
                        errors={errors}
                        placeholder='ex: University of Lagos'
                    />
                    <TextAreaInput
                        label='Published Works or Research'
                        register={register}
                        name='research'
                        type='text'
                        errors={errors}
                        placeholder='Enter any published works or research'
                    />
                    <TextAreaInput
                        label='Any Special Accomplishments or Awards'
                        register={register}
                        name='accomplishments'
                        type='text'
                        errors={errors}
                        placeholder='Enter any special accomplishments or awards'
                    />
                    <MultipleFileInput
                        files={additionalDocs}
                        setFiles={setAdditionalDocs}
                        className='col-span-full'
                        endpoint='doctorProfessionDocs'
                        label='Upload Additional Documents (CV, Medical Certifications, etc) Upload'
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