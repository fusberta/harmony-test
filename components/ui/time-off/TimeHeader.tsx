import React from 'react'
import { Button } from '../button'
import { FileClock } from 'lucide-react'

const TimeHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <FileClock className="w-6 h-6" />
                <h2 className="text-xl font-semibold text-sky-900">Time Off</h2>
            </div>
            <div className="flex items-end space-x-4">
                <p className='text-sm'>Accrual Level Start Date <span className='text-sky-500'>03/09-2020</span></p>
                <Button variant="outline">Add Time Off Policy</Button>
            </div>
        </div>
    )
}

export default TimeHeader