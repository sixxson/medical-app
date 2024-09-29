"use client"
import { AdditionalFormProps, BioDataFormProps, ContactInfoFormProps, EducationFormProps, PracticeFormProps, ProfileFormProps } from "@/types/types";
import { createContext, ReactNode, useContext, useState } from "react";
// context => useState to golobal Level

// Steps for creating Context Api
// Creating and Exporting Context
// 1) Define the shape of the data you want to track
// 2) Define the initial data
// 3) create and export the context
// 4) add the types to the Context and initialData
// Use the Created Context to Create and Export Provider

// Create and Export Hook

// Wrap the Entire App in the Provider

interface OnBoardingContext {
    truckingNumber: string
    doctorProfileId: string
    setTruckingNumber: (value: string) => void
    setDoctorProfileId: (value: string) => void

    //Track the Form Data
    bioData: BioDataFormProps
    profileData: ProfileFormProps
    contactData: ContactInfoFormProps
    educationData: EducationFormProps
    practiceData: PracticeFormProps
    additionalData: AdditionalFormProps
    saveDbData: any
    setSaveDbData: (data: any) => void
    setBioData: (value: BioDataFormProps) => void
    setProfileData: (value: ProfileFormProps) => void
    setContactData: (value: ContactInfoFormProps) => void
    setEducationData: (value: EducationFormProps) => void
    setPracticeData: (value: PracticeFormProps) => void
    setAdditionalData: (value: AdditionalFormProps) => void
}

const initialBioData = {
    firstName: "",
    lastName: "",
    middleName: "",
    dob: "",
    userId: "",
    gender: "",
    page: "",
    trackingNumber: "",
}

const initialProfileData = {
    profilePicture: "",
    bio: "",
    page: "",
    medicalLicense: "",
    medicalLicenseExpiration: "",
    yearsOfExperience: 0,
}

const initialContactData = {
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    page: "",
}

const initialEducationData = {
    medicalSchool: "",
    graduationYear: 0,
    primarySpecialization: "",
    boardCertificates: [],
    otherSpecialties: [],
    page: "",
}

const initialPracticeData = {
    hospitalName: "",
    hospitalAddress: "",
    hospitalContact: "",
    hospitalEmail: "",
    hospitalWebsite: "",
    hospitalHoursOfOperation: "",
    insuranceAccepted: "",
    servicesOffered: [],
    languageSpoken: [],
    page: "",
}

const initialAdditionalData = {
    educationHistory: "",
    research: "",
    accomplishments: "",
    additionDocs: [],
    page: "",
}


const initialData = {
    truckingNumber: "",
    doctorProfileId: "",
    setTruckingNumber: () => { },
    setDoctorProfileId: () => { },

    //Track the Form Data
    bioData: initialBioData,
    profileData: initialProfileData,
    contactData: initialContactData,
    educationData: initialEducationData,
    practiceData: initialPracticeData,
    additionalData: initialAdditionalData,
    saveDbData: [],
    setSaveDbData: () => { },
    setBioData: () => { },
    setProfileData: () => { },
    setContactData: () => { },
    setEducationData: () => { },
    setPracticeData: () => { },
    setAdditionalData: () => { },
}

const OnBoardingContext = createContext<OnBoardingContext>(initialData)

export function OnBoardingContextProvider({ children }: { children: ReactNode }) {
    const [truckingNumber, setTruckingNumber] = useState<string>("")
    const [doctorProfileId, setDoctorProfileId] = useState<string>("")
    const [bioData, setBioData] = useState<BioDataFormProps>(initialBioData)
    const [profileData, setProfileData] = useState<ProfileFormProps>(initialProfileData)
    const [contactData, setContactData] = useState<ContactInfoFormProps>(initialContactData)
    const [educationData, setEducationData] = useState<EducationFormProps>(initialEducationData)
    const [practiceData, setPracticeData] = useState<PracticeFormProps>(initialPracticeData)
    const [additionalData, setAdditionalData] = useState<AdditionalFormProps>(initialAdditionalData)
    const [saveDbData, setSaveDbData] = useState<any>([])
    const contextValues = {
        truckingNumber,
        setTruckingNumber,
        doctorProfileId,
        setDoctorProfileId,
        
        bioData,
        profileData,
        contactData,
        educationData,
        practiceData,
        additionalData,
        saveDbData,
        setSaveDbData,
        setBioData,
        setProfileData,
        setContactData,
        setEducationData,
        setPracticeData,
        setAdditionalData,
    }

    return (
        <OnBoardingContext.Provider value={contextValues}>
            {children}
        </OnBoardingContext.Provider>
    )
}

export function useOnBoardingContext() {
    return useContext(OnBoardingContext)
}


export default OnBoardingContext