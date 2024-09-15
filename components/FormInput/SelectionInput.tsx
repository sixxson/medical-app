"use client"

import Link from "next/link"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
})

type SelectionInputProps = {
    label: string
    register: any
    className: string
    name: string
    option: OptionInputProps[]
    multiple?: boolean
}
type OptionInputProps = {
    label: string
    value: string
}

export default function SelectionInput({
    label,
    name,
    register,
    className="sm:col-span-2",
    option=[],
    multiple = false,
}: SelectionInputProps
) {
    return (
        <div className={className}>
            <label 
            htmlFor={name} 
            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 mb-2"
            >
                {label}
            </label>
            <div className="mt-2">
                <select 
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    multiple={multiple}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-slate-50 dark:bg-slate-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm
                    sm:leading-6"
                >
                    {option.map((option,i:number) => {
                        return (
                            <option key={i} value={option.value}>
                                {option.label}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
