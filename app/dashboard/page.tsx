import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicsCard from '@/components/dashboard/HotTopicsCard'
import Quizmecard from '@/components/dashboard/Quizmecard'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'

// type Props = {
//     //props
// }

export const metadata={
    title:"Dashboard",
    description:"Dashboard",
    url:"/dashboard",
}

const Dashboard = async () => {
  const session=await getAuthSession();
  if(!session?.user){
    redirect("/");
  }
  return (
    <div className="h-screen p-8  pt-28  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]  dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className='flex items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        </div>
       
        <div className='grid gap-4 mt-4 md:grid-cols-2 '>
        <Quizmecard/>
        <HistoryCard/>
        </div>
       
        
    </div>
  )
}

export default Dashboard