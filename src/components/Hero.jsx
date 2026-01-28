import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="heroBg py-6" id="home">
      <div className="container mx-auto px-4 xl:px-8 lg:grid grid-cols-2 gap-4 min-h-screen">
        <div className="flex flex-col pt-30 lg:pt-0 lg:justify-center lg:item-center h-full">
          <p className="text-white">Welcome I'm,</p>
          <div className="space-y-6 mb-4">
            <h1 className="text-4xl lg:text-[3.875rem] font-bold text-white">
             Ms. Temitayo Olayinka
            </h1>
            <p className="text-yellowBg font-medium">
              Teacher & Academic Coach
            </p>
          </div>
          <p className="hidden lg:block text-white text-[1rem]">
            Helping students excel academically and build <br />
            confidence through personalized learning strategies.
          </p>
          <p className="lg:hidden text-white text-[1rem]">
            Helping students excel academically and build confidence through
            personalized learning strategies.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
            <a href="mailto:ccccc@gmail.com">
              <button className="btn border-none bg-yellowBg text-white h-12 w-[85vw] lg:w-56 rounded-md">
                <Mail /> Get In Touch
              </button>
            </a>
            <a href="https://gmail.com" target="_blank">
              <button className="btn border bg-transparent text-white h-12 w-[85vw] lg:w-56 rounded-md">
                <Download /> Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-20 lg:pt-10 lg:justify-center lg:item-center h-full">
          <div className="w-[85%] lg:w-[75%] mx-auto lg:mx-0 lg:ml-auto">
            <img src="/avatar2.png" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
