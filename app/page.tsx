
import Hero from '../components/Hero'
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.9] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <FloatingNav
        navItems={
          [{
            name:"home",link:"/",icon:<FaHome />

          }]
        }
      />
      <Hero/>

    </div>
      </main>
  );
}
