import { PracticeFormProps, StepFormProps } from '@/types/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import SubmitButton from '../FormInput/SubmitButton'
import TextInput from '../FormInput/TextInput'
import ArrayInput from '../FormInput/ArrayInput'
import ShalSelectionInput from '../FormInput/ShadSelectionInput'
import { useRouter } from 'next/navigation'
import { updateDoctorProfile } from '@/actions/onboarding'
import toast from 'react-hot-toast'

export default function PracticeInfo({
  page,
  title,
  description,
  formId,
  userId,
  nextPage
}: StepFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const insuranceOption = [{ label: "Choose your Option", value: "none" }, { label: "Yes", value: "yes" }, { label: "No", value: "no" }]
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PracticeFormProps>()
  const [services, setServices] = React.useState([])
  const [languages, setLanguages] = React.useState([])
  const [insuranceAccepted, setInsuranceAccepted] = React.useState('')
  const router = useRouter()

  async function onSubmit(data: PracticeFormProps) {
    setIsLoading(true)
    console.log(data);
    data.servicesOffered = services
    try {
        const res = await updateDoctorProfile(formId, data)
        if (res?.status === 201) {
            setIsLoading(false)
            toast.success('Practice Info Updated Successfully')
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
          <TextInput
            label='Hospital Name'
            register={register}
            name='hospitalName'
            type='text'
            errors={errors}
            placeholder='Enter your Hospital Name'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Hospital Address'
            register={register}
            name='hospitalAddress'
            type='text'
            errors={errors}
            placeholder='Enter your Hospital Address'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Hospital Contact Number'
            register={register}
            name='hospitalContact'
            type='text'
            errors={errors}
            placeholder='Enter your Hospital Contact Number'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Hospital Email Address'
            register={register}
            name='hospitalEmail'
            type='text'
            errors={errors}
            placeholder='Enter your Hospital Email Address'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Hospital Website (Optional)'
            register={register}
            name='hospitalWebsite'
            type='text'
            errors={errors}
            isRequired={false}
            placeholder='Enter your Hospital Website'
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label='Hospital Hours of Operation'
            register={register}
            name='hospitalHoursOfOperation'
            type='number'
            errors={errors}
            placeholder='Enter your Hospital Hours of Operation eg 5'
            className="col-span-full sm:col-span-1"
          />
          <ShalSelectionInput
            option={insuranceOption}
            label=" Insurance Accepted"
            OptionTitle="insuranceAccepted"
            register={register}
            selectOption={insuranceAccepted}
            setSelectOption={setInsuranceAccepted}
            name="insuranceAccepted"
          />
          <ArrayInput
            items={services}
            setItems={setServices}
            itemTitle='Add Hospital Services'
            className="col-span-full"
          />
          <ArrayInput
            items={languages}
            setItems={setLanguages}
            itemTitle='Add Languages Spoken at the Hospital'
            className="col-span-full"
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
