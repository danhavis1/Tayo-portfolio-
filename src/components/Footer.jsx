import { Github, Linkedin } from "lucide-react";


export default function Footer() {
  return (
   <div className="w-full  bg-greenBg">
    <div className="container mx-auto py-5 px-4 xl:px-8 flex justify-between items-center h-20 text-white">
      <p>© 2024 Sarah Mitchell - Teacher & Academic Coach. All rights reserved.</p>
      <div className="hidden lg:flex space-x-4 text-white ">
  <div className=" bg-white text-slate-600 rounded-full p-4">
  <a href="https://github.com/danhavis1" target="_blank" >
   <Github  size={10}/>
  </a>
  </div>

  <div className="bg-white text-slate-600 rounded-full p-4">
  <a href="https://linkedin.com/in/danmole-havis-a80b622ba" target="_blank" >
   <Linkedin  size={10}/>
  </a>
</div>
 

</div>
    

    </div>
   
   </div>
  )
}
