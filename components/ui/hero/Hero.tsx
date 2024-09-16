'use client'
import React from 'react'
import ProfileImage from '../ProfileImage'
import { useUserStore } from '@/store/store';
import { Combobox } from '../combobox';
import ProfileMenu from './ProfileMenu';

const Hero = () => {
    const { user } = useUserStore();
    return (
        <div className='h-48 bg-accent px-16 pt-8 flex items-center justify-between space-x-5 max-[500px]:flex-col max-[500px]:items-center max-[500px]:h-auto max-[500px]:pb-8'>
            <ProfileImage className='w-40 h-40 z-20 shadow-xl ml-8 max-[860px]:ml-0 max-[600px]:w-20 max-[600px]:h-20 shrink-0' />

            <div className="flex flex-col items-end justify-space-between h-full pt-10">
                <div className="flex justify-between items-center w-full space-x-8">
                    <h2 className='text-[28px] font-semibold'>{user.name}</h2>
                    <div className="flex gap-5 items-center max-[860px]:flex-col">
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