import { PhoneIcon, MailIcon, LinkedinIcon, FacebookIcon, TwitterIcon } from "lucide-react";
import { Card, CardContent } from "../card";

const ContactCard = () => {
  const contactContent = [
    { icon: <PhoneIcon className="w-4 h-4" />, label: "07911 654321" },
    { icon: <MailIcon className="w-4 h-4" />, label: "avd.yana@video" },
  ];

  const socialMediaIcons = [
    { icon: <LinkedinIcon className="w-4 h-4" />, label: "LinkedIn" },
    { icon: <FacebookIcon className="w-4 h-4" />, label: "Facebook" },
    { icon: <TwitterIcon className="w-4 h-4" />, label: "Twitter" },
  ];

  return (
    <Card className="w-[225px] border-none rounded-xl">
      <CardContent className="pt-6">
        <ul className="space-y-2">
          {contactContent.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 mt-4">
          {socialMediaIcons.map((item, index) => (
            <a key={index} href="#" aria-label={item.label}>
              {item.icon}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
