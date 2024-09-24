"use client"
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
    setTruckingNumber: (value: string) => void
    setDoctorProfileId: (value: string) => void
    doctorProfileId: string
}

const initialData = {
    truckingNumber: "",
    setTruckingNumber: () => { },
    doctorProfileId: "",
    setDoctorProfileId: () => { }
}

const OnBoardingContext = createContext<OnBoardingContext>(initialData)

export function OnBoardingContextProvider({ children }: { children: ReactNode }) {
    const [truckingNumber, setTruckingNumber] = useState("")
    const [doctorProfileId, setDoctorProfileId] = useState("")

    const contextValues = {
        truckingNumber,
        setTruckingNumber,
        doctorProfileId,
        setDoctorProfileId
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