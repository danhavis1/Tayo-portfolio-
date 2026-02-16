import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-greenBg">
      <div className="container mx-auto py-5 px-4 lg:px-8 flex justify-between items-center h-20 text-white">
        <p className="transition-colors duration-300 hover:text-yellowBg">
          © 2024 Sarah Mitchell - Teacher & Academic Coach. All rights reserved.
        </p>
        <div className="hidden lg:flex space-x-4 text-white">
          <a
            href="https://github.com/danhavis1"
            target="_blank"
            className="bg-white text-slate-600 rounded-full p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110 hover:text-yellowBg"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/danmole-havis-a80b622ba"
            target="_blank"
            className="bg-white text-slate-600 rounded-full p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110 hover:text-yellowBg"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
