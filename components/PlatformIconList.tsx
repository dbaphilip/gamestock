import { Platform } from "@/hooks/usePlatforms";
import { ReactNode } from "react";
import {
  FaAndroid,
  FaApple,
  FaGlobeEurope,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: ReactNode } = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  mac: <FaApple />,
  nintendo: <SiNintendogamecube />,
  android: <FaAndroid />,
  linux: <FaLinux />,
  web: <FaGlobeEurope />,
  ios: <MdPhoneIphone />,
};

export default function PlatformIconList({ platforms }: Props) {
  //
  return (
    <div className="p-3">
      {platforms.map((platform) => (
        <span className="fs-2 platform-icon" key={platform.id}>
          {iconMap[platform.slug]}
        </span>
      ))}
    </div>
  );
}
