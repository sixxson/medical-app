import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AvailabilityForm from '@/components/Dashboard/Doctor/AvailabilityForm'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getDoctorProfileById } from '@/actions/onboarding';

export default async function page() {
const session = await getServerSession(authOptions);
const user = session?.user;
const profile = await getDoctorProfileById(user?.id);
  return (
    <div className='max-w-5xl w-full px-6 py-6'>
      <h2 className='pb-4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Settings</h2>
      <Tabs defaultValue="availability" className="w-[800px]">
        <TabsList>
          <TabsTrigger value="availability">Availability Settings</TabsTrigger>
          <TabsTrigger value="account">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="availability" className='w-full'>Make changes availability 
          <AvailabilityForm profile={profile?.data} />
        </TabsContent>
        <TabsContent value="account">dlkasjda
          asldkjalds;ad alskdfjalskdjkjhdfhsd fsadfsahfdfsdhjkds fhjk dfs  dfshfd shjk dfs hkjdfs hkjdfs h  
          jkhfdfdshjk dfh dfhjk dhj dks hdsh dfshjdks fhkjds fdsfh jdshf
          d jkldfs jkh dfshjdfk sdsf hjk
        </TabsContent>
      </Tabs>

    </div>
  )
}
