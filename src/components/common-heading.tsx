import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IHeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const CommonHeading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: IHeadingProps) => {
  return (
    <div className=" px-6 lg:px-0 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={(cn("w-10 h-10"), iconColor)} />
      </div>
      <div>
        <h2 className=" text-3xl font-bold ">{title}</h2>
        <p className=" text-sm text-muted-foreground ">{description}</p>
      </div>
    </div>
  );
};

export default CommonHeading;
