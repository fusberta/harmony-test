'use client'
import Hero from '@/components/ui/hero/Hero';
import Main from '@/components/ui/main/Main';
import Sidebar from '@/components/ui/sidebar/Sidebar';
import { AuthService } from '@/services/auth/auth.service';
import { useUserStore } from '@/store/store';
import { Profile } from '@/types/auth.interface';
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const MyInfo: NextPage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
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
    }, [setUser]);

    return (
        <div>
            <Hero />
            <Main />
        </div>
    )
}

export default MyInfo