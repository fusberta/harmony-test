import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TimeOffCardProps {
    icon: LucideIcon;
    title: string;
    availableDays: number;
    description: string;
    additionalInfo?: string;
    subscription?: string;
}

const TimeOffCard: React.FC<TimeOffCardProps> = ({ icon: Icon, title, availableDays, description, subscription, additionalInfo }) => {
    return (
        <div>
            <Card className="bg-muted h-52">
                <CardContent className="text-center flex flex-col items-center justify-center h-full w-full">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <div className="flex items-center space-x-2">
                        <Icon className="w-8 h-8" />
                        <p className="text-3xl font-bold">{availableDays}</p>
                    </div>
                    <p className="text-sm font-semibold">{description}</p>
                    {additionalInfo && <p className="text-xs font-medium mt-1 text-muted-foregrounds">{additionalInfo}</p>}
                </CardContent>
            </Card>
            <p className="text-center text-xs mt-2 text-muted-foreground">{subscription}</p>
        </div>
    );
};

export default TimeOffCard;
