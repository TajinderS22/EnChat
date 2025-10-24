"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    // Root container: Uses flex-col to space out header, main, and footer.
    <div className="flex flex-col max-w-[1920px] min-h-[100svh] mx-auto relative">
      
      {/* Background Image & Overlay 
          This container sits in the background (z-[-1]) and holds both
          the image and a semi-transparent overlay for readability.
      */}
      <div className="absolute inset-0 z-[-1]">
        {/* Your background image */}
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcpz5001o/image/upload/v1759571143/oie_KpghZ0L4pyLa_mi0nc5.png')] bg-no-repeat bg-center bg-cover" />
        
        {/* Overlay for readability:
            - Light mode: 80% opaque white
            - Dark mode: 70% opaque black
        */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />
      </div>

      {/* Header */}
      <div className="sticky top-0 w-full backdrop-blur-md z-10 border-b border-gray-500/20">
        <Navbar />
      </div>

      <main className="flex-grow flex items-center justify-center z-0 px-4">
        <div className="max-w-3xl mx-auto text-center py-24">
          

          <h1 className="text-4xl md:text-6xl font-bold text-teal-700 dark:text-teal-300">
            Your conversations,
            <br />
            <span className="text-gray-900 dark:text-white">Completely Secure.</span>
          </h1>

          
          <p className="text-xl md:text-2xl mt-6 text-gray-800 dark:text-gray-300 font-medium max-w-xl mx-auto">
            EnChat is a fully end-to-end encrypted chat app.
            No tracking. No snooping. Just privacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link href={"/signup"}>
              <Button
                text="Get Started"
                buttonType={"primary"}
                buttonClick={() => {}}
              
              />
            </Link>
            <Link href={'/signin'}>
              <Button
                text="Login"
                buttonType="secondary"
                 
              />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center z-0">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 dark:text-gray-400">
          <div className="flex justify-center gap-x-6 text-sm">
            <Link href="/privacy" className="hover:text-teal-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </div>
          <p className="text-sm mt-4">
            &copy; {new Date().getFullYear()} EnChat. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with <span className="text-red-500">♥</span>
          </p>
        </div>
      </footer>
    </div>
  );
}