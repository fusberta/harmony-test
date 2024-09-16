'use client'
import Hero from '@/components/ui/hero/Hero';
import Main from '@/components/ui/main/Main';
import { getAccessToken } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';
import { useUserStore } from '@/store/store';
import { Profile } from '@/types/auth.interface';
import { Loader2 } from 'lucide-react';
import { NextPage } from 'next'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const MyInfo: NextPage = () => {
    // eslint-disable-next-line
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const setUser = useUserStore((state) => state.setUser);

    const router = useRouter();

    useEffect(() => {
            const checkAccessToken = async () => {
            const accessToken = await getAccessToken();

            if (!accessToken) {
                router.push('/auth');
            } else {
                setIsLoading(false);
            }
        };

        checkAccessToken();
    }, [router]);

    useEffect(() => {
        if (!isLoading) {
            const fetchProfile = async () => {
                try {
                    const userData = await AuthService.getProfile();
                    setProfile(userData);
                    setUser(userData);
                } catch (error) {
                    console.error('Failed to fetch profile:', error);
                }
            };
    
            fetchProfile();
        }
    }, [isLoading, setUser]);

    if (isLoading) {
        return <div className='flex justify-center items-center h-[calc(100vh-86px)]'>
            <Loader2 className="animate-spin" />
        </div>
    }

    return (
        <div>
            <Hero />
            <Main />
        </div>
    )
}

export default MyInfo