import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export interface CardItem {
  icon: JSX.Element;
  label: string;
}

interface InfoCardProps {
  title?: string;
  content: CardItem[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <Card className="w-[225px] border-none rounded-xl">
      {title && (
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={title ? "pt-0" : "pt-6"}>
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
