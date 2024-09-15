import { Pencil, Plus, X } from 'lucide-react'
import React from 'react'

export default function ArrayInput({
    setItems,
    items = [],
    itemTitle,
}: {
    setItems: any,
    items: string[],
    itemTitle: string,
}) {

    const [item, setItem] = React.useState("")
    const [showTagForm, setShowTagForm] = React.useState(false)
    function addItem() {
        setShowTagForm(true)
        if (!item) return
        setItems([...items, item])
        setItem("")
    }
    function removeItem(index: any) {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return (
        <div className='sm:col-span-2 col-span-full'>
            {
                showTagForm ? (
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3
                            pointer-events-none'>
                                <Pencil size={18} className='text-gray-500 dark:text-gray-400' />
                            </div>
                            <input
                                value={item}
                                type="text"
                                onChange={(e) => setItem(e.target.value)}
                                id='voice-search'
                                className='bg-gray-50 dark:bg-gray-800 border border-gray-200 text-gray-900 text-base rounded-lg
                                focus:ring-blue-500 block w-full ps-10 p-2.5 dark:border-gray-700 dark:text-gray-50
                                dark:placeholder-gray-400 dark:focus:ring-blue-600 dark:focus:border-blue-500'
                                placeholder={`Create a ${itemTitle}`}
                            />
                        </div>
                        <button
                            onClick={addItem}
                            type='button'
                            className='shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm
                            font-medium rounded-md text-white bg-blue-600 border border-blue-700 hover:bg-blue-800
                            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:border-blue-700
                            dark:focus:ring-blue-800 dark:hover:bg-blue-700'
                        >
                            <Plus size={18} className='me-2' />
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowTagForm(false)}
                            className='ml-3 shrink-0 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center'
                        >
                            <X size={18} className='text-red' />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={addItem}
                        type='button'
                        className='shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm
                    font-medium rounded-md text-white bg-blue-600 border border-blue-700 hover:bg-blue-800
                    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:border-blue-700
                    dark:focus:ring-blue-800 dark:hover:bg-blue-700'
                    >
                        <Plus size={18} className='me-2' />
                        <span>Add {itemTitle}</span>
                    </button>
                )
            }
            <div className="flex flex-wrap gap-4 mt-4">
                {items.map((item, i) => {
                    return (
                        <div
                            onClick={() => removeItem(i)}
                            key={i}
                            className='bg-gray-100 dark:bg-blue-400 text-gray-900 dark:text-gray-50 px-4 py-2 
                            rounded-md  cursor-pointer flex items-center border-gray-900 border-2 dark:border-blue-600 border-dashed'
                        >
                            {item}
                            <X size={18} className='text-red-500' />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
