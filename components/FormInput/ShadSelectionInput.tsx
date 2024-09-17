"use client"
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
    className = "col-span-full ",
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
                <select
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    multiple={multiple}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-slate-50 dark:bg-slate-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm
                    sm:leading-6"
                    onChange={(e) => setSelectOption(e.target.value)}
                >
                    {option.map((option, i: number) => {
                        return (
                            <option key={i} value={option.value} defaultValue={selectOption}>
                                {option.label}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
