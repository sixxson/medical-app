"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type ShadSelectionInputProps = {
    label: string
    register: any
    className?: string
    OptionTitle: string
    option: OptionInputProps[]
    multiple?: boolean
    selectOption?: any
    setSelectOption?: any
    name: string
}
type OptionInputProps = {
    label: string
    value: string
}

export default function ShalSelectionInput({
    name,
    label,
    OptionTitle,
    register,
    className = "col-span-full sm:col-span-1 ",
    option = [],
    multiple = false,
    selectOption,
    setSelectOption
}: ShadSelectionInputProps
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
                <Select
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    multiple={multiple}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={OptionTitle} />
                    </SelectTrigger>
                    <SelectContent>
                        {option.map((option, i: number) => {
                            return (
                                <SelectItem key={i} value={option.value} defaultValue={selectOption}>
                                    {option.label}
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
