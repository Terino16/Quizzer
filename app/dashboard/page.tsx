import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicsCard from '@/components/dashboard/HotTopicsCard'
import Quizmecard from '@/components/dashboard/Quizmecard'
import RecentActivityCard from '@/components/dashboard/RecentActivity'
import React from 'react'

// type Props = {
//     //props
// }

export const metadata={
    title:"Dashboard",
    description:"Dashboard",
    url:"/dashboard",
}

const Dashboard = () => {
  return (
    <div className='p-8 mx-auto max-w-7xl'>
        <div className='flex items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        </div>
       
        <div className='grid gap-4 mt-4 md:grid-cols-2 '>
        <Quizmecard/>
        <HistoryCard/>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
            <RecentActivityCard/>
            <HotTopicsCard/>
        </div>
        
    </div>
  )
}

export default Dashboard