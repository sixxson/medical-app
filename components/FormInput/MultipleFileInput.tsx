import { UploadDropzone } from "@/utils/uploadthing";
import { File, Pencil, XCircle } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import React from "react";

type MultipleImageInputProps = {
    label: string;
    files: File[];
    setFiles: any;
    className?: string;
    endpoint?: any;
};

export type File = {
    url: string;
    title: string;
    size: number;
}

export default function MultipleFileInput(
    {
        label,
        files,
        setFiles,
        className = "col-span-full",
        endpoint = '',
    }: MultipleImageInputProps) {
    function handleImageRemove(fileIndex: any) {
        const updatedFiles = files.filter(
            (file, index) => index !== fileIndex);
        setFiles(updatedFiles);
    }
    console.log(files);
    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label
                    htmlFor="course-image"
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-slate-700 mb-2">
                    {label}
                </label>
                {files && (
                    <button
                        onClick={() => setFiles("")}
                        type='button'
                        className='flex space-x-2 bg-slate-900 rounded-md shadow
                        text-slate-50 py-2 px-4'>
                        <Pencil size={16} />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {files.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {files.map((file, i) => (
                        <div key={i} className="relative">
                            <button
                                onClick={() => handleImageRemove(i)}
                                className="absolute -top-4 -right-2 rounded-full p-1 text-red-700">
                                <XCircle size={24} />
                            </button>
                            <div className="py-2 px-6 border border-slate-200 text-gray-800 bg-white 
                            rounded-md dark:text-slate-50 dark:bg-slate-800 overflow-auto flex">
                                <File size={24} className="text-gray-800 dark:text-slate-50 mr-2" />
                                <div className="flex flex-col">
                                    <p>{file.title}</p>
                                    <span className="text-xs">
                                        {(file.size / 1000).toFixed(2)} KB
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <UploadDropzone
                    className="text-base dark:text-gray-800 ut-uploading:ut-button:bg-blue-600 "
                    endpoint={endpoint}
                    onClientUploadComplete={(res) => {
                        console.log(res);
                        const urls = res.map((item) => {
                            return {
                                url: item.url,
                                title: item.name,
                                size: item.size,
                            }
                        });
                        setFiles(urls);
                        console.log(urls);
                        console.log("Upload Complete");
                        toast.success("Images uploaded successfully");
                    }}

                />
            )}
        </div>
    )
}