import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

const dataFooterTop: ContactItemData[] = [
  {
    title: "Visit Us",
    subTitle: "HCMC, Vietnamese",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subTitle: "+84 329 382 782",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subTitle: "Mon - Sun: 9:00 AM - 9:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Mail Us",
    subTitle: "thanhngodev@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {dataFooterTop.map((item) => (
        <ContactItem key={item.title} {...item} />
      ))}
    </div>
  );
};

const ContactItem = ({ title, subTitle, icon }: ContactItemData) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon || ""}
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
