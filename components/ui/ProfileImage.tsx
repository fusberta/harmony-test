'use client'
import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useUserStore } from '@/store/store'

interface ProfileImageProps {
    className?: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className }) => {
    const { user } = useUserStore();

    if (!user.avatar) {
        return null;
    }

    return (
        <Button variant="secondary" size="icon" className={`rounded-full overflow-hidden ${cn(className)}`}>
            <Image
                width={30}
                height={30}
                src={user.avatar}
                alt="Profile"
                className='w-full h-full'
                priority
            />
        </Button>
    )
}

export default ProfileImage