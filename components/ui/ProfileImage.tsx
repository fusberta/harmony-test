import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProfileImageProps {
    src: string
    className?: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, className }) => {
    return (
        <Button variant="secondary" size="icon" className={`rounded-full ${cn(className)}`}>
            <Image
                width={30}
                height={30}
                src={src}
                alt="Profile"
                className='w-full h-full'
            />
        </Button>
    )
}

export default ProfileImage