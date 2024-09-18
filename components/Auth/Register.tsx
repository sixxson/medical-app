"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SubmitButton from "../FormInput/SubmitButton"
import React from "react"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import toast from "react-hot-toast"
import { Alert } from "flowbite-react"
import { HiInformationCircle } from "react-icons/hi"
import Image from "next/image"
import TextInput from "../FormInput/TextInput"
import { RegisterInputProps } from "@/types/types"
import { createUser } from "@/actions/users"
import { UserRole } from "@prisma/client"


export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function Register(
    {
        role = "USER",
        plan = "free"
    }: {
        role?: string | string[] | undefined,
        plan?: string | string[] | undefined
    }
) {

    const [isLoading, setIsLoading] = React.useState(false)
    const [showNotification, setShowNotification] = React.useState(false)
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterInputProps>()

    async function onSubmit(data: RegisterInputProps) {
        setIsLoading(true)
        data.role = role
        data.plan = plan
        try {
            const user = await createUser(data)

            if (user && user.status === 200) {
                console.log("User created successfully");
                reset()
                setIsLoading(false)
                toast.success("User created successfully")
                router.push(`/verify-account/${user.data?.id}`);
                console.log(user.data);
            } else {
                console.log(
                    "User not created successfully ",
                    user.error
                );
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
                        </p>
                    </div>
                    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} method="POST">
                        {showNotification && (
                            <Alert color="failure" icon={HiInformationCircle}>
                                <span className="font-medium">Sign-in error!</span> Please Check
                                your credentials
                            </Alert>
                        )}

                        <TextInput
                            label='Full Name'
                            register={register}
                            name='fullName'
                            type='text'
                            errors={errors}
                            placeholder='Nguyen Van A'
                        />

                        <TextInput
                            label='Phone Number'
                            register={register}
                            name='phone'
                            type='tel'
                            errors={errors}
                            placeholder='0123456789'
                        />

                        <TextInput
                            label='Email'
                            register={register}
                            name='email'
                            type='email'
                            errors={errors}
                            placeholder='abc@def.xyz'
                        />

                        <TextInput
                            label='Password'
                            register={register}
                            name='password'
                            type='password'
                            errors={errors}
                            placeholder='********'
                        />
                        <SubmitButton
                            title='Create an account'
                            isLoading={isLoading}
                            loadingTitle='Creating an account please wait ...'
                        />
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/image/JettValorant.jpg"
                    alt="Image"
                    width="1170"
                    height="850"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}