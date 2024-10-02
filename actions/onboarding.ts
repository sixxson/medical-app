"use server";
import EmailTemplate from "@/components/Emails/email-template";
import WelcomeEmail from "@/components/Emails/wellcome-email";
import { prismaClient } from "@/lib/db";
import { Resend } from "resend";


// Doctor Profile
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
            if (!existingProfile) {
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

export async function compeleteProfile(id: string | undefined, data: any) {
    const resend = new Resend(process.env.SENDGRID_API_KEY);

    if (id) {
        try {
            const updateDoctorProfile = await prismaClient.doctorProfile.update({
                where: {
                    id
                },
                data
            })

            const existingProfile = await prismaClient.doctorProfile.findUnique({
                where: {
                    id,
                },
            });
            if (!existingProfile) {
                return {
                    data: null,
                    status: 404,
                    error: "Profile not found",
                }
            }

            //send a welcome email
            const firstName = existingProfile.firstName;
            const email = existingProfile.email as string;
            const previewText = "Welcome to Online Doctors";
            const message =
                `Thank you for joining Online Doctors.
                We are so grateful to have you onboard.`;
            const sendMail = await resend.emails.send({
                from: 'Medical App  <info@sixcom.io.vn>',
                to: email,
                subject: "Welcome to Online Doctors",
                react: WelcomeEmail({ firstName, previewText, message }),
            });
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


// Availability
export async function getDoctorProfileById(userId: string | undefined) {
    if (userId) {
        try {
            const profile = await prismaClient.doctorProfile.findUnique({
                where: {
                    userId
                },
                include: {
                    availability: true,
                }
            })
            return {
                data: profile,
                status: 201,
                error: null,
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 500,
                error: "Profile was not updated",
            };
        }
    }
}

export async function createAvailability(data: any) {
    try {
        const newAvaila = await prismaClient.availability.create({
            data
        });
        console.log(newAvaila);
        return newAvaila
    } catch (error) {
        console.log(error);
        return {
            data: null,
            status: 500,
            error: "Something went wrong",
        };
    }
}

export async function updateAvailabilityById(id: string | undefined, data: any) {
    if (id) {
        try {
            const updateAvaila = await prismaClient.availability.update({
                where: {
                    id
                },
                data
            })
            return {
                data: updateAvaila,
                status: 201,
                error: null,
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 500,
                error: "Availability Something went wrong",
            };
        }
    }
}