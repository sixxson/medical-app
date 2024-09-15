import React from 'react'
import { UploadDropzone } from '@/utils/uploadthing'
import { Pencil } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function ImageInput({
    label,
    imageUrl,
    setImageUrl,
    className = "col-span-full",
    endpoint,
}: {
    label: string,
    imageUrl: string|undefined,
    setImageUrl: any,
    className?: string,
    endpoint: string
}
) {
    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label
                    htmlFor="course-image"
                    className='block text-sm font-medium leading-6 text-gray-700
                dark:text-gray-50 mb-2'
                >
                    {label}
                </label>
                {imageUrl && (
                    <button
                        onClick={() => setImageUrl("")}
                        type='button'
                        className='flex space-x-2 bg-slate-900 rounded-md shadow
                        text-slate-50 py-2 px-4'>
                        <Pencil size={16} />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {
                imageUrl ? (
                <Image
                    src={imageUrl}
                    alt="image"
                    width={1000}
                    height={667}
                    className="w-full h-64 object-contain"
                />
                ):(
                    <UploadDropzone
                        endpoint={`${endpoint}`as any}
                        onClientUploadComplete={(res) => {
                            setImageUrl(res[0].url)
                            toast.success('Image uploaded successfully')
                            console.log("Files:", res);
                            console.log("Upload Complete");
                        }}
                    />
                )
            }
        </div>
    )
}
