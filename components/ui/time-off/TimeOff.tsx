import React from 'react'
import TimeHeader from './TimeHeader'
import TimeOffCard from './TimeOffCard'
import { CrossIcon, FileClock, MountainIcon } from 'lucide-react'
import UpcomingTimeOff from './UpcomingTime'
import TimeOffHistory from './TimeHistory'
import { Separator } from '../separator'

const TimeOff = () => {
    return (
        <div className="space-y-6 bg-background p-6 rounded-b-xl border border-t-0 w-full">
            <div className="">
                <TimeHeader />

                <Separator className="my-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TimeOffCard
                    icon={CrossIcon}
                    title="Sick"
                    availableDays={3}
                    description="Days Available"
                    additionalInfo="1 day scheduled"
                    subscription="Sick Full-Time"
                />
                <TimeOffCard
                    icon={MountainIcon}
                    title="Annual Leave"
                    availableDays={10.3}
                    description="Days Available"
                    subscription="Holiday Full-Time"
                />
                <TimeOffCard
                    icon={FileClock}
                    title="Comp/in Lieu Time"
                    availableDays={0}
                    description="Human Used (YTD)"
                    subscription='Comp/in Lieu Time Flexible Policy'
                />
            </div>

            <UpcomingTimeOff />

            <TimeOffHistory />
        </div>
    )
}

export default TimeOff