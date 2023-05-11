import Image from "next/image";
import Navbar from "./components/UI/Navbar";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Navbar heading="dashboard" />
      <div className="flex flex-col h-4/5 w-full items-center justify-center">
        <h1 className="font-bold text-2xl text-black">Dashboard empty</h1>
        <h1 className="text-slate-500 font-bold text-sm md:text-base px-2 md:px-0 text-center">
          click on the hamburger to start learning or the sidebar if on desktop
        </h1>
      </div>
    </main>
  );
}
