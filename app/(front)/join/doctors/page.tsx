import CustomButton from '@/components/CustomButton'
import { CustomAccordion, FAQItem } from '@/components/Frontend/CustomAccordion'
import Pricing from '@/components/Frontend/Pricing'
import { link } from 'fs'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function page() {

  const features = [
    "Medical App brings patients to you",
    "Get paid directly from patients",
    "Manage your practice with ease",
    "Get paid directly from patients",
  ]

  const steps = [
    "List your practice",
    "Create competitive offerings",
    "Start seeing patients",
  ]

  const whyUs = [
    "It’s free to join with no membership fees or time commitments.",
    "We help you tailor your offerings to attract new patients and build your practice.",
    "Patients can book appointments with you minutes after your profile goes live."
  ]

  const cards = [
    {
      title: 'List your practice',
      description: "Start a new chapter in your career with Medical App",
      link: '/',
      linkTitle: 'Start a new application'
    },
    {
      title: 'Resume Application',
      description: `Pick up where you left off and complete your onboarding
      process. Schedule for Physical Approval.`,
      link: '/',
      linkTitle: 'Continue Application'
    },
    {
      title: 'Schedule a Call',
      description: ` Arrange a call with our team to learn more about Medical App
        and how we can help you build your practice.`,
      link: '/',
      linkTitle: 'Schedule a Call'
    },
    {
      title: 'Truck your Progress',
      description: `Monitor your application status and approvals in real-time..`,
      link: '/',
      linkTitle: 'Track your Progress' 
    },
  ]

  const faqs : FAQItem[] = [
  {
    qn: 'How do I sign up for Medical App?',
    aws: <div>
      You can sign up for Medical App by visiting our website and clicking on the 
      <CustomButton title='Signup' href="register?role='DOCTOR'" className='bg-blue-600 hover:bg-blue-700' /> button. 
      You will be asked to provide some basic information about yourself and your practice. 
    </div>
  },
  {
    qn: 'Can I use the Medical App on multiple devices??',
    aws: 'Yes. You can use the Medical App on multiple devices, including your smartphone, tablet, and computer.'
  },
  {
    qn: 'Is my data secure on Medical App?',
    aws: `Yes. We take the security of your data very seriously. 
    We use industry-standard encryption to protect your data and comply with all relevant data protection laws.`
  },
  {
    qn:'How can I reset my password?',
    aws: `If you have forgotten your password, you can reset it by clicking on the “Forgot password” link on the login page.`
  },
  {
    qn: 'How do I update my profile?',
    aws: `You can update your profile by logging into your account and clicking on the “Profile” tab. 
    From there, you can edit your contact information, availability, and other details.`
  },
  {
    qn: 'How do I get paid for my services?',
    aws: `You will be paid directly by patients for your services. 
    You can set your own prices and payment terms, and patients can pay you securely through the Medical App platform.`
  }
  ]

  return (
    <div className='min-h-screen'>
      <section className='px-4 py-12'>
        <div className='max-w-6xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h2 className='md:text-[3rem] text-[1.5rem] leading-[3.5rem]'>
              Build a thriving <span className='text-blue-600 font-semibold'> direct-pay </span>   practice with Medical App.
            </h2>
            <p className='py-4'>
              Medical App is a full-service platform to help you build and run
              your practice and care for patients for virtual care,
              in-person care, or both.
            </p>
            <CustomButton
              title='List your Services'
              className='bg-blue-600 text-white hover:bg-blue-700'
              href='# '
            />
            <div className="py-6">
              {
                features.map((feature, index) => (
                  <div className='flex items-center gap-2 py-2' key={index}>
                    <Check size={24} className='text-blue-600
                  flex-shrink-0'/>
                    <p>{feature}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <Image
            src='/JettValorant.jpg'
            alt=''
            width={1170}
            height={850}
            className='w-full rounded' />
        </div>
      </section>
      <section className='px-4 py-20'>
        <div className='max-w-6xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-2'>
          <Image
            src='/JettValorant.jpg'
            alt=''
            width={1170}
            height={850}
            className='w-full object-cover rounded hidden md:block ' />
          <div className=''>
            <h2 className='md:text-4xl text-2xl'>
              Join Sesame to increase your 
              <span className='text-blue-600 font-semibold'> revenue</span> today.
            </h2>
            {/* <div className='py-4'>
              {
                steps.map((step, i) => {
                  return (
                    <p key={i} className='flex items-center'>
                      <Check size={24} className='text-blue-600 flex-shrink-0 ' />
                      <span>{step}</span>
                    </p>
                  )
                })}
            </div> */}
            <div className="grid grid-cols-2 gap-4">
              {
                cards.map((card, i) => {
                  return (
                    <div key={i} className="bg-blue-900 text-center p-4 rounded-lg shadow 2xl">
                      <h3 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className='text-gray-200 text-xs py-3'>
                        {card.description}
                      </p>
                      <CustomButton
                        title={card.linkTitle}
                        className='bg-blue-600 text-white w-full hover:bg-blue-700'
                        href={card.link} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 py-12'>
        <Pricing />
      </section>
      <section className='px-4 py-12'>
        <div className='max-w-6xl mx-auto gap-4'>
        <CustomAccordion FAQs={faqs} />
        </div>
      </section>
    </div>
  )
}
