'use client'
import React from 'react'
import ProfileImage from '../ProfileImage'
import { useUserStore } from '@/store/store';
import { Combobox } from '../combobox';
import ProfileMenu from './ProfileMenu';

const Hero = () => {
    const { user, setUser } = useUserStore();
    return (
        <div className='h-48 bg-accent px-16 pt-8 flex items-center justify-between'>
            <ProfileImage className='w-40 h-40 z-20 shadow-xl ml-8' />

            <div className="flex flex-col items-end justify-space-between h-full pt-16">
                <div className="flex justify-between items-center w-full">
                    <h2 className='text-[28px] font-semibold'>{user.name}</h2>
                    <div className="flex gap-5 items-center">
                        <Combobox />
                        <Combobox />
                    </div>
                </div>
                <ProfileMenu />
            </div>
        </div>
    )
}

export default Hero