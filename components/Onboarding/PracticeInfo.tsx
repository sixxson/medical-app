import { BioDataFormProps, StepFormProps } from '@/types/types'
import exp from 'constants'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import SubmitButton from '../FormInput/SubmitButton'
import RadioInput from '../FormInput/RadioInput'
import { DatePickerInput } from '../FormInput/DatePickerInput'
import TextInput from '../FormInput/TextInput'

export default function PracticeInfo({
  page,
  title,
  description,
}: StepFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [dob, setDOB] = React.useState<Date>()
  const [expiry, setExpiry] = React.useState<Date>()
  const genderOptions = [{ label: "Male", value: "male" }, { label: "Female", value: "female" }]
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BioDataFormProps>()

  async function onSubmit(data: BioDataFormProps) {
    if (!dob) {
      toast.error('Please select your Date of Birth')
      return
    }
    if (!expiry) {
      toast.error('Please select your Medical License Expiry')
      return
    }
    setIsLoading(true)
    data.dob = dob
    // data.medicalLicenseExpiration = expiry
    data.page = page
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
            placeholder='Van A'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Middle Name'
            register={register}
            name='middleName'
            type='text'
            errors={errors}
            placeholder='abc@xyz.com'
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
