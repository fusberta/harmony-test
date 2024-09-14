import { Bell, CircleHelp, Settings } from 'lucide-react'
import React from 'react'
import ProfileImage from '../ProfileImage'

const OptionMenu: React.FC = () => {
    return (
        <div className="flex space-x-2">
            <button
                className="p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Settings"
            >
                <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button
                className="p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search"
            >
                <CircleHelp className="w-5 h-5 text-gray-600" />
            </button>
            <button
                className="p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Profile"
            >
                <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <ProfileImage />
        </div>
    )
}

export default OptionMenu