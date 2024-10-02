import HomeDisplayCard from '@/components/Dashboard/Doctor/HomeDisplayCard'
import ListPannel from '@/components/Dashboard/Doctor/ListPannel'
import NewButton from '@/components/Dashboard/Doctor/NewButton'
import PannelsHeader from '@/components/Dashboard/Doctor/PannelsHeader'
import { List } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* Header  */}
          <PannelsHeader />
      {/* 2 Pannels */}
      <div className="grid grid-cols-12">
        {/* List Pannels */}
        <div className="col-span-4">
          <ListPannel />
        </div>
        <div className="col-span-8 ">
          {/* Display pannels */}
          <HomeDisplayCard />
        </div>
      </div>
      Appointments
    </div>
  )
}
