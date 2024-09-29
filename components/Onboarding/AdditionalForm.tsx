"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import { AdditionalFormProps, StepFormProps } from "@/types/types"
import toast from "react-hot-toast"
import MultipleFileInput, { File } from "../FormInput/MultipleFileInput"
import TextAreaInput from "../FormInput/TextAreaInput"
import { compeleteProfile, updateDoctorProfile } from "@/actions/onboarding"
import { useRouter } from "next/navigation"
import { useOnBoardingContext } from "@/context/context"

export default function AdditionalForm(
    {
        page,
        title,
        description,
        formId,
        userId,
    }: StepFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)
    const { additionalData, setAdditionalData, saveDbData } = useOnBoardingContext()
    const initialAdditionalData = additionalData.additionDocs || saveDbData.additionDocs
    const [additionalDocs, setAdditionalDocs] = React.useState<File[]>(initialAdditionalData)
    console.log(saveDbData);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AdditionalFormProps>({
        defaultValues: {
            educationHistory: additionalData.educationHistory || saveDbData.educationHistory,
            research: additionalData.research || saveDbData.research,
            accomplishments: additionalData.accomplishments || saveDbData.accomplishments,
            additionDocs: additionalData.additionDocs || saveDbData.additionDocs,
            page: additionalData.page || saveDbData.page,
        }
    })

    async function onSubmit(data: AdditionalFormProps) {
        setIsLoading(true)
        data.additionDocs = additionalDocs.map((additionalDoc) => additionalDoc.url)
        console.log(data);
        try {
            //save data to database
            setIsLoading(false)
            const res = await compeleteProfile(formId, data)
            setAdditionalData(data)
            if (res?.status === 201) {
                setIsLoading(false)
                setAdditionalData(data)

                //extract the profile from data from the update profile 
                //Send a wellcome Email

                toast.success('Profile Completed Successfully')
                //Route them to the login page
                router.push(`/login`)
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
            <div className=" text-center border border-gray-200 pb-4 ">
                <h2 className="text-4xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                    {title}
                </h2>
                <p className="text-balance text-muted-foreground">
                    {description}
                </p>
            </div>
            <form
                className="mx-auto max-w-3xl text-base py-4 px-4 "
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
                        title='Complete Profile'
                        isLoading={isLoading}
                        loadingTitle='Saving please wait ...'
                    />
                </div>
            </form>
        </div>
    )
}