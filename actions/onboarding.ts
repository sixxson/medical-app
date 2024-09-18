"use server";
import EmailTemplate from "../components/Emails/email-template";
import { prismaClient } from "../lib/db";
import { DoctorProfile } from "@prisma/client";
import { Resend } from "resend";

export async function createDoctorProfile(formData: any) {
    const { dob, firstName, lastName, middleName, trackingNumber, userId } = formData;

    try {
        const newProfile = await prismaClient.doctorProfile.create({
            data: {
                dob, 
                firstName, 
                lastName, 
                middleName, 
                trackingNumber, 
                userId,
                gender: formData.gender // Add the missing gender property
            },
        });
        console.log(newProfile);
        return newProfile
    } catch (error) {
        console.log(error);
        return {
            error: "Something went wrong",
        };
    }
}
