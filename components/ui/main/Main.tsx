import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TimeOff from '../time-off/TimeOff'

const Main = () => {
  return (
    <div className='px-16 mx-auto bg-muted flex justify-between pb-16 space-x-4 max-[700px]:px-0 max-[700px]:space-x-0'>
        <Sidebar />
        <TimeOff />
    </div>
  )
}

export default Main