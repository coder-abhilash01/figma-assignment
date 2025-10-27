import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Button } from './components/ui/button'
import { Separator } from "@/components/ui/separator"
import CardCarousel from './components/CardCarousel'
import { CircleQuestionMark } from 'lucide-react'
import InfoTabs from './components/InfoTabs'



const App = () => {
  const [activeTab,setActiveTab] = useState(false)
  return (

    <div className=' bg-[#28292F] flex h-screen py-6 sm:py-10 px-3 md:pr-2 lg:pr-6 xl:px-8 xl:pr-12 gap-2 xl:gap-6 '>

      <div className='sm:flex flex-1 pb-4 hidden'>

        <div className='flex flex-1 bg-[#616161] rounded-2xl  '></div>
      </div>

      <div className='w-full flex flex-1 flex-col gap-5 px-2 lg:px-5'>

       <InfoTabs/>


        <Separator className=" h-1 max-w-4/5 text-center mx-auto bg-[#363c43] shadow-lg shadow-black" />
        <div className=' flex py-2 flex-1 bg-[#363c43] shadow-lg shadow-black/30 border border-gray-900/30 rounded-xl pr-2 xl:pr-8'>
          <div className='flex flex-col gap-18 pl-2 py-4 '><CircleQuestionMark className='text-[#6d7278] w-5.5 lg:w-7 ' /><svg width="20" height="28" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> <rect x="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> <rect y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> <rect x="10.6879" y="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> <rect y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> <rect x="10.6879" y="21.3757" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" /> </svg></div>
          <CardCarousel />


        </div>
        <Separator className=" h-1 max-w-4/5 text-center mx-auto bg-[#363c43] shadow-lg shadow-black" />


      </div>

    </div>




  )
}

export default App
