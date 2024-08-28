import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

export default function page() {
  return (
    <div
      className='bg-blue-600 min-h-screen py-8'
    >
      <div
        className="grid md:grid-cols-2 mx-auto grid-cols-1 w-full max-w-5xl bg-white 
      border border-gray-200 rounded-lg shadow dark:bg-gray-800 
      dark:border-gray-700"
      >
        <div className="hidden md:flex linear-bg overflow-hidden">
          {/* Image */}
        </div>
        <div className="">
          <LoginForm />
        </div>
      </div>

    </div>
  )
}
