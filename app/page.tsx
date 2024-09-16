'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const HomePage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/auth');
  }, []);

  return null
};

export default HomePage;