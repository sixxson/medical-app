"use client"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useForm } from 'react-hook-form'
import TextInput from "../FormInput/TextInput"
import { ProfileFormProps, StepFormProps } from "@/types/types"
import RadioInput from "../FormInput/RadioInput"
import { Checkbox } from "../ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { updateDoctorProfile } from "@/actions/onboarding"
import toast from "react-hot-toast"

export default function Availability({ 
    page, 
    title, 
    description, 
    formId,
    userId,
    nextPage }: StepFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormProps>()
    const availabilityOptions = [
        {
            label:
                'Weekly (Youre available one or more time during the week, every week)',
            value: 'weekly'
        },
        {
            label: 'Specific Dates(Youre available on specific dates)',
            value: 'specific'
        }
    ]

    async function onSubmit(data: ProfileFormProps) {
        setIsLoading(true)
        console.log(data);
        try {
            const res = await updateDoctorProfile(formId, data)
            if (res?.status === 201) {
                setIsLoading(false)
                toast.success('Profile Updated Successfully')
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
                        label='What is the Duration of your Meetings'
                        register={register}
                        name='meetingDuration'
                        type='text'
                        errors={errors}
                        placeholder='eg John Doe'
                        className="col-span-full"
                    />
                    <RadioInput
                        radioOptions={availabilityOptions}
                        errors={errors}
                        title="When are you available for this meetting?"
                        register={register}
                        name='availability'
                    />
                    <div className="col-span-full">
                        <h2>Define your weekly availability below:</h2>
                        <div className="border py-6 px-4 border-gray-200 flex justify-between items-center">
                            {/* Checkbox */}
                            <div className="mr-3">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Monday
                                    </label>
                                </div>
                            </div>
                            {/* Time */}
                            <div className=" grid grid-cols-2 gap-4 dark:text-slate-400">
                                <div className="grid grid-cols-3 gap-2">
                                    <Select>
                                        <SelectTrigger id="hours" aria-label="Hours">
                                            <SelectValue placeholder="Hours" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i} value={`${(i + 1).toString().padStart(2, "0")}`}>
                                                    {(i + 1).toString().padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger id="minute" aria-label="Minute">
                                            <SelectValue placeholder="Minute" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 59 }, (_, i) => (
                                                <SelectItem key={i} value={`${(i + 1).toString().padStart(2, "0")}`}>
                                                    {(i + 1).toString().padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger id="year" aria-label="Year">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="AM">AM</SelectItem>
                                            <SelectItem value="PM">PM</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <Select>
                                        <SelectTrigger id="hours" aria-label="Hours">
                                            <SelectValue placeholder="Hours" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i} value={`${(i + 1).toString().padStart(2, "0")}`}>
                                                    {(i + 1).toString().padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger id="minute" aria-label="Minute">
                                            <SelectValue placeholder="Minute" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 59 }, (_, i) => (
                                                <SelectItem key={i} value={`${(i + 1).toString().padStart(2, "0")}`}>
                                                    {(i + 1).toString().padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger id="year" aria-label="Year">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="AM">AM</SelectItem>
                                            <SelectItem value="PM">PM</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            {/* Add window */}
                            <div className="">
                                <Button
                                    variant="ghost"
                                    type="button">
                                    <Plus size={18} className='flex-shrink-0' />
                                    Add Window
                                </Button>
                            </div>
                        </div>
                    </div>
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