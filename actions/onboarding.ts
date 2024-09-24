"use server";
import { prismaClient } from "@/lib/db";
import { Resend } from "resend";

export async function createDoctorProfile(formData: any) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { dob, firstName, lastName, middleName, trackingNumber, userId, gender, page } = formData;
    try {
        const newProfile = await prismaClient.doctorProfile.create({
            data: {
                dob,
                firstName,
                lastName,
                middleName,
                gender,
                page,
                trackingNumber,
                userId,
            },
        });
        console.log(newProfile);
        return {
            data: newProfile,
            status: 201,
            error: null,
        }
    } catch (error) {
        console.log(error);
        return {
            data: null,
            status: 500,
            error: "Something went wrong",
        };
    }
}

export async function updateDoctorProfile(id: string | undefined, data: any) {
    if (id) {
        try {
            const updateDoctorProfile = await prismaClient.doctorProfile.update({
                where: {
                    id
                },  
                data
            })
            return {
                data: updateDoctorProfile,
                status: 201,
                error: null,
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 500,
                error: "Something went wrong",
            };
        }
    }
}

export async function getDoctorById(id: string) {
    if (id) {
        try {
            const doctorProfile = await prismaClient.doctorProfile.findUnique({
                where: {
                    id,
                },
            });
            return {
                data: doctorProfile,
                status: 201,
                error: null,
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 500,
                error: "Something went wrong",
            };
        }
    }
}

export async function getApplicationByTracking(trackingNumber: string) {
    if (trackingNumber) {
        try {
            const existingProfile = await prismaClient.doctorProfile.findUnique({
                where: {
                    trackingNumber,
                },
            });
            if(!existingProfile) {
                return {
                    data: null,
                    status: 404,
                    error: "Wrong Tracking Number",
                }
            }
            return {
                data: existingProfile,
                status: 200,
                error: null,
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 500,
                error: "Something went wrong",
            };
        }
    }
}