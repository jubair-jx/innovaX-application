"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRightCircle,
  Code2Icon,
  Image,
  MessageCircle,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageCircle,
    color: "text-violet-600",
    bgColor: "text-violet-700",
    href: "/conversation",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-red-600",
    bgColor: "text-red-700",
    href: "/video-generation",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-orange-600",
    bgColor: "text-rorangeed-700",
    href: "/music-generation",
  },
  {
    label: "Code Generation",
    icon: Code2Icon,
    color: "text-purple-600",
    bgColor: "text-purple-700",
    href: "/code-generation",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-cyan-600",
    bgColor: "text-cyan-700",
    href: "/image-generation",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" mb-8 space-y-4">
        <h2 className=" text-2xl md:text-5xl font-bold text-center">
          Explore the journey of AI
        </h2>
        <p className=" text-muted-foreground font-light text-sm md:text-lg text-center">
          Meet and talk about the future of ai
        </p>
      </div>
      <div className=" px-4 md:px20 lg:px-32 space-y-4">
        {tools?.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className=" p-4 border-black/10 flex items-center justify-between hover:shadow-md transition-all cursor-pointer"
          >
            <div className=" flex items-center gap-x-1">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className=" font-semibold">{tool.label}</div>
            </div>
            <ArrowRightCircle className=" text-gray-600 h-6 w-6" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
