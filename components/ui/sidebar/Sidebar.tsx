import React from 'react'
import InfoCard, { CardItem } from './InfoCard';
import { CalendarIcon, ClockIcon, GlobeIcon, HashIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import ContactCard from './ContactCard';

const HireDateCard = () => {
    const hireDateContent: CardItem[] = [
      { icon: <CalendarIcon className="w-4 h-5" />, label: "Sep. 3, 2020" },
      { icon: <ClockIcon className="w-4 h-5" />, label: "3y - 9m - 20d" },
    ];
  
    return <InfoCard title="Hire Date" content={hireDateContent} />;
  };
  
  const EmployeeDetailsCard = () => {
    const employeeDetailsContent: CardItem[] = [
      { icon: <HashIcon className="w-4 h-4" />, label: "5" },
      { icon: <ClockIcon className="w-4 h-4" />, label: "Full-Time" },
      { icon: <UsersIcon className="w-4 h-4" />, label: "Operations" },
      { icon: <GlobeIcon className="w-4 h-4" />, label: "Europe" },
      { icon: <MapPinIcon className="w-4 h-4" />, label: "London, UK" },
    ];
  
    return <InfoCard content={employeeDetailsContent} />;
  };
  
  const DirectReportsCard = () => {
    const directReportsContent: CardItem[] = [
      { icon: <UsersIcon className="w-4 h-4" />, label: "Shane" },
      { icon: <UsersIcon className="w-4 h-4" />, label: "Nathan" },
      { icon: <UsersIcon className="w-4 h-4" />, label: "Mitchell" },
      { icon: <UsersIcon className="w-4 h-4" />, label: "Philip" },
      { icon: <UsersIcon className="w-4 h-4" />, label: "4 More..." },
    ];
  
    return <InfoCard title="Direct Reports" content={directReportsContent} />;
  };
const Sidebar = () => {
  return (
    <div className="space-y-4 -translate-y-4 text-sm max-[860px]:hidden">
      <ContactCard />
      <HireDateCard />
      <EmployeeDetailsCard />
      <DirectReportsCard />
    </div>
  )
}

export default Sidebar