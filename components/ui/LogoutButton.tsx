'use client'
import React from 'react'
import { Button } from './button'
import { LogOut } from 'lucide-react'
import { removeTokensFromStorage } from '@/services/auth/auth.helper';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/store';

const LogoutButton = ({ className }: {className?: string}) => {
    const clearUser = useUserStore((state) => state.clearUser);
    const router = useRouter();
    const handleLogout = () => {
        removeTokensFromStorage();
        clearUser();
        router.replace('/auth');
    };

    return (
        <Button 
            size={'icon'} 
            variant={'ghost'} 
            className={className}
            onClick={handleLogout}
        >
            <LogOut size={18} className='mt-0.5'/>
        </Button>
    )
}

export default LogoutButton