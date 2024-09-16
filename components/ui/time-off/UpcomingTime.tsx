import { CalendarIcon, Clock8, CrossIcon, LucideIcon } from "lucide-react";
import { Separator } from "../separator";

interface TimeOffEvent {
  icon: LucideIcon;
  date: string;
  description: string;
}

const UpcomingTimeOff: React.FC = () => {
  const events: TimeOffEvent[] = [
    { icon: CrossIcon, date: "Jan 27", description: "1 day of Sick" },
    { icon: CalendarIcon, date: "Jul 4", description: "Independence Day" },
  ];

  return (
    <div>
      <div className="flex items-center space-x-3">
        <Clock8 className="w-5 h-5" />
        <h3 className="text-base font-medium text-sky-900">Upcoming Time Off</h3>
      </div>
      <Separator className="my-4" />
      <ul className="space-y-4">
        {events.map((event, index) => (
          <div key={index}>
            <li className="flex items-center space-x-4">
              <event.icon className="w-10 h-10" />
              <div className="">
                <span>{event.date}</span>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </li>
            <Separator className="my-4" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTimeOff;
