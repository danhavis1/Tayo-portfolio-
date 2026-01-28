import { Dot } from "lucide-react";
import Drawer from "./Drawer";

export default function Nav() {
  const links = [
    {
      name: "Home",
      id: "home"
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Achievements",
      id: "record",
    },
    {
      name: "Testimonials",
      id:"testimonials",

    },
    {
      name: "Contact",
      id: "contact",
    },
  ];
  return (
    <div className="fixed top-0 w-full z-50 bg-greenBg/20">
      <div className="container mx-auto py-5 px-4 xl:px-8 flex justify-between items-center">
        <div className="flex items-center relative">
          <h1 className="font-semibold text-xl text-white">Ms.Temitayo</h1>
          <Dot className="text-yellowBg absolute -right-8.75"size={50} />
        </div>
        <div className="hidden lg:flex gap-6">
          {links.map((item) => (
            <a href={`#${item.id}`} key={item} className="text-white text-sm">
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
