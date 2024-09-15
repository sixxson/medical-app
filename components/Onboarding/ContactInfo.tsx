import React from 'react'
import { ContactInfoFormProps, StepFormProps } from '@/types/types'
import { useForm } from 'react-hook-form'
import TextInput from '../FormInput/TextInput'
import SubmitButton from '../FormInput/SubmitButton'

export default function ContactInfo({ page, title, description }: StepFormProps) {
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInfoFormProps>()

    async function onSubmit(data: ContactInfoFormProps) {
        setIsLoading(true)
        reset()
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
            className="mx-auto max-w-3xl  py-4 px-4 "
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
                <TextInput
                    label='Country'
                    register={register}
                    name='country'
                    type='text'
                    errors={errors}
                    placeholder='Enter your Country'
                    className="col-span-full sm:col-span-1"
                />
                <TextInput
                    label='City'
                    register={register}
                    name='city'
                    type='text'
                    errors={errors}
                    placeholder='Enter your City'
                    className="col-span-full sm:col-span-1"
                />
                <TextInput
                    label='State'
                    register={register}
                    name='state'
                    type='text'
                    errors={errors}
                    placeholder='Enter your State'
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
