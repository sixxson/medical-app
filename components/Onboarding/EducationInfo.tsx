"use client";
import React from 'react'
import { EducationFormProps, StepFormProps } from '@/types/types'
import { useForm } from 'react-hook-form'
import TextInput from '../FormInput/TextInput'
import SubmitButton from '../FormInput/SubmitButton'
import SelectionInput from '../FormInput/SelectionInput'
import ArrayInput from '../FormInput/ArrayInput'
import MultipleImageInput, { File } from '../FormInput/MultipleFileInput'
import { useRouter } from 'next/navigation';
import { updateDoctorProfile } from '@/actions/onboarding';
import toast from 'react-hot-toast';
import { useOnBoardingContext } from '@/context/context';

export default function EducationInfo({
  page,
  title,
  description,
  formId,
  userId,
  nextPage }: StepFormProps) {

  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const { educationData, setEducationData, saveDbData } = useOnBoardingContext()
  const initialSpecialties = educationData.otherSpecialties || saveDbData.otherSpecialties
  const initialDocs = educationData.boardCertificates || saveDbData.boardCertificates
  const [otherSpecialties, setOtherSpecialties] = React.useState(initialSpecialties)
  const [docs, setDocs] = React.useState<File[]>(initialDocs)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EducationFormProps>({
    defaultValues: {
      medicalSchool: educationData.medicalSchool || saveDbData.medicalSchool,
      graduationYear: educationData.graduationYear || saveDbData.graduationYear,
      primarySpecialization: educationData.primarySpecialization || saveDbData.primarySpecialization,
      boardCertificates: educationData.boardCertificates || saveDbData.boardCertificates,
      otherSpecialties: educationData.otherSpecialties || saveDbData.otherSpecialties,
      page: educationData.page || saveDbData.page,
    }
  })

  async function onSubmit(data: EducationFormProps) {
    setIsLoading(true)
    console.log(data);
    data.otherSpecialties = otherSpecialties
    data.boardCertificates = docs.map((doc) => doc.url)
    try {
      //save data to database
      setIsLoading(false)
      const res = await updateDoctorProfile(formId, data);
      setEducationData(data)
      // save the data to context api - ToDo
      if (res?.status === 201) {
        setIsLoading(false)
        toast.success('Education Info Updated Successfully')
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
        className="mx-auto max-w-3xl dark:text-gray-800 text-base py-4 px-4 "
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
            name='primarySpecialization'
            option={[
              { label: "Cardiology", value: "cardiology" },
              { label: "Dermatology", value: "dermatology" },
              { label: "Endocrinology", value: "endocrinology" },
              { label: "Gastroenterology", value: "gastroenterology" },
            ]}
            className="col-span-full sm:col-span-1"
          />
          <ArrayInput
            items={otherSpecialties}
            setItems={setOtherSpecialties}
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
