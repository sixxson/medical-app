import { createAvailability, updateAvailabilityById } from '@/actions/onboarding'
import { Button } from '@/components/ui/button'
import { Loader2, Minus, Plus } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

export default function Friday({ profile }: { profile: any }) {

    const availability = profile?.availability || ""
    const timesArray = [
        "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
        "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
    ]
    const [selectedTime, setSelectedTime] = React.useState<string[]>([])
    const [loading, setLoading] = React.useState(false)

    function handleSelectTime(time: string) {
        if (selectedTime.includes(time)) {
            toast.error(`${time} alrealy added, Please select another time`);
            return;
        }
        setSelectedTime((prevTimes) => [...prevTimes, time])
    }
    function handleRemoveTime(time: string) {
        setSelectedTime((prevTimes) => prevTimes.filter(prevTime => prevTime !== time))
    }
    function handleAddAll() {
        if (selectedTime.length === timesArray.length) {
            toast.error(`All Time alrealy added`);
            return;
        } else {
            setSelectedTime((prevTimes) => [...timesArray])
        }
    }
    function handleClearAll() {
        if (selectedTime.length === 0) {
            toast.error(`No Time to remove`);
            return;
        } else {
            setSelectedTime([])
        }
    }
    async function handleSubmit() {
        setLoading(true);
        if (profile?.id && availability?.id) {
            const data = {
                friday: selectedTime,
                doctorProfileId: profile.id
            }
            await updateAvailabilityById(availability?.id, data);
            setLoading(false);
            console.log(data);
        } else if (profile?.id) {
            const data = {
                friday: selectedTime,
                doctorProfileId: profile.id
            }
            setLoading(false);
            await createAvailability(data);
            console.log(data);
        }else{
            setLoading(false);
            console.log('No Profile Found');
        }
    }

    return (
        <div className='p-4 border-gray-200 dark:border-gray-600 shadow rounded-md
        grid grid-cols-1 sm:grid-cols-2 divide-x divide-gray-200'>
            <div className="px-2">
                <h2>
                    Clicking another tab will toggle
                </h2>
                <div className="py-6 grid grid-cols-3 gap-2">
                    <button
                        onClick={handleAddAll}
                        className='flex text-sm items-center py-2 px-3 border border-gray-100
                        gap-2 rounded-md text-center'>
                        <span>Add all</span>
                        <Plus className='w-3 h-3' />
                    </button>
                    {timesArray.map((time, index) => (
                        <button
                            onClick={() => handleSelectTime(time)}
                            key={index}
                            className='flex text-sm items-center py-2 px-3 border border-gray-100
                        gap-2 rounded-md text-center'>
                            <span>{time}</span>
                            <Plus className='w-3 h-3' />
                        </button>
                    ))}
                </div>
            </div>
            <div className="px-2">
                <h2>
                    Some Thing like that
                </h2>
                <div className="py-6 grid grid-cols-3 gap-2">
                    {selectedTime.map((time, index) => (
                        <button
                            onClick={() => handleRemoveTime(time)}
                            key={index}
                            className='flex text-sm items-center py-2 px-3 border border-gray-100 dark:border-gray-900
                            text-center bg-blue-200 gap-2 rounded-md dark:bg-blue-600'>
                            <span>{time}</span>
                            <Minus className='w-3 h-3' />
                        </button>
                    ))}
                </div>
                {selectedTime.length > 0 && (
                    <div className='border-t border-gray-200 flex justify-between items-center pt-4'>
                        {loading ?
                            <Button
                                onClick={handleSubmit}
                                className='flex items-center py-2 px-3 border border-gray-100 dark:border-gray-900
                                gap-2 rounded-md  bg-blue-400 dark:bg-blue-600 dark:text-slate-800'>
                                <Loader2 className="animate-spin h-5 w-5 mr-3" />
                                Saving please wait...
                            </Button>
                            :
                            <Button
                                disabled={loading}
                                onClick={handleSubmit}
                                className='flex items-center py-2 px-3 border border-gray-100 dark:border-gray-900
                                gap-2 rounded-md  bg-blue-400 dark:bg-blue-600 dark:text-slate-800'>
                                <p className='font-semibold '>Save Settings</p>
                            </Button>
                        }
                        <Button
                            onClick={handleClearAll}
                            className='flex items-center py-2 px-3 border border-gray-100 dark:border-gray-900
                        gap-2 rounded-md  bg-red-400 dark:bg-red-600 dark:text-slate-800'>
                            <p className='font-semibold '>Clear All</p>
                            <Minus className='w-3 h-3' />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
