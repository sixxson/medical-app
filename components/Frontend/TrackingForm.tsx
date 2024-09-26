"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import SubmitButton from "../FormInput/SubmitButton";
import { Input } from "../ui/input";
import { getApplicationByTracking } from "@/actions/onboarding";
import { useOnBoardingContext } from "@/context/context";
import { set } from "date-fns";

export default function TrackingForm() {
    const [loading, setLoading] = useState(false);
    const { saveDbData, setSaveDbData,setTruckingNumber, setDoctorProfileId} = useOnBoardingContext();
    const [showNotification, setShowNotification] = useState(false);
    const router = useRouter();
    const FormSchema = z.object({
        trackingNumber: z.string().min(2, {
            message: "Tracking Number must be at least 10 characters.",
        }),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            trackingNumber: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setLoading(true);

        try {
            //Make Request
            const res = await getApplicationByTracking(data.trackingNumber);
            // Save this to context Api
            setSaveDbData(res?.data);
            if (res?.status === 404) {
                setShowNotification(true);
                setLoading(false);
            }
            if (res?.status === 200) {
                toast.success("Tracking Number Verified Successfully");
                // setUserId(res.data?.userId!);
                // setPage(res.data?.page!);
                // setTrackingSuccess(true);
                console.log(res.data?.page);
                setTruckingNumber(data.trackingNumber);
                setDoctorProfileId(res.data?.id ?? "");
                router.push(`/onboarding/${res.data?.userId}?page=${res.data?.page}`);
            
                setLoading(false);
            } else {
                throw new Error("Something went wrong");
            }
            //OnBoarding Page
        } catch (error) {
            toast.error("Something went wrong, Please try again");
            setLoading(false);
            console.log(error);
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                {showNotification && (
                    <Alert color="failure" icon={HiInformationCircle}>
                        <span className="font-medium">Wrong Trucking Number!</span> Please Check the
                        number and Enter again
                    </Alert>
                )}
                <FormField
                    control={form.control}
                    name="trackingNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tracking Number</FormLabel>
                            <FormControl>
                                <Input placeholder="eg SomeThing XD" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <SubmitButton
                    title="Submit to Verify"
                    isLoading={loading}
                    loadingTitle="Verifying please wait..."
                />
            </form>
        </Form>
    );
}