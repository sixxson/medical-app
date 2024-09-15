import React from 'react'
import { ContactInfoFormProps, StepFormProps } from '@/types/types'
import { useForm } from 'react-hook-form'
import TextInput from '../FormInput/TextInput'
import SubmitButton from '../FormInput/SubmitButton'
import SelectionInput from '../FormInput/SelectionInput'
import ArrayInput from '../FormInput/ArrayInput'
import MultipleImageInput from '../FormInput/MultipleFileInput'
import { url } from 'inspector'

export default function ProfessionInfo({ page, title, description }: StepFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInfoFormProps>()

  const [otherSpecialization, setOtherSpecialization] = React.useState([])
  const [docs, setDocs] = React.useState([])

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
            label='Medical School'
            register={register}
            name='medicalSchool'
            type='text'
            errors={errors}
            placeholder='Enter your Medical School'
          />
          <TextInput
            label='Graduation Year'
            register={register}
            name='graduationYear'
            type='text'
            errors={errors}
            placeholder='Enter your Graduation Year'
            className="col-span-full sm:col-span-1"
          />
          <SelectionInput
            label='Select Your Primary Specializations'
            register={register}
            name='country'
            option={[
              { label: "Cardiology", value: "cardiology" },
              { label: "Dermatology", value: "dermatology" },
              { label: "Endocrinology", value: "endocrinology" },
              { label: "Gastroenterology", value: "gastroenterology" },
            ]}
            className="col-span-full sm:col-span-1"
          />
          <ArrayInput
            items={otherSpecialization}
            setItems={setOtherSpecialization}
            itemTitle='Select Your Secondary Specializations'
          />
          <MultipleImageInput
            files={docs}
            setFiles={setDocs}
            className='col-span-full'
            endpoint='doctorProfessionDocs'
            label='Upload your Medical (Max of 4 Docs)'
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
