
import Hero from '../components/Hero'

export default function Home() {
  return (
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx- sm:px-10 px-5">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.9] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Hero/>

    </div>
      </main>
  );
}
