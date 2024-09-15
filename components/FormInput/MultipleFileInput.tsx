import { UploadDropzone } from "@/utils/uploadthing";
import { File, XCircle } from "lucide-react";
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
        endpoint='',
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
                    className="block text-sm font-medium leading-6 text-gray-700 dark:text-slate-50 mb-2">
                    {label}
                </label>
            </div>
            {files.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {files.map((file, i) => (
                        <div key={i} className="relative">
                            <button
                                onClick={() => handleImageRemove(i)}
                                className="absolute top-2 right-2 bg-slate-900 rounded-full p-1 text-white">
                                <XCircle size={16} />
                            </button>
                            <div className="py-2 px-6 border border-slate-200 text-gray-800 bg-white 
                            rounded-md dark:text-slate-50 dark:bg-slate-800 overflow-auto flex">
                                <File size={24} className="text-gray-800 dark:text-slate-50 mr-2" />
                                <div className="flex flex-col">
                                    <p>{file.title}</p>
                                    <span className="text-xs">
                                    {file.size} KB
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <UploadDropzone
                    className="text-base dark:text-gray-800 "
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