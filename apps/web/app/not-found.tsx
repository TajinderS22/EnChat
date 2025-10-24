"use client";
import Link from "next/link";
import { Button } from "@repo/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-center px-4">
      
      {/* Main 404 Heading */}
      <h1 className="text-8xl font-bold text-teal-600 dark:text-teal-400">
        404
      </h1>

      {/* Sub Heading */}
      <h2 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white">
        Page Not Found
      </h2>

      {/* Helper Text */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      {/* Go Home Button */}
      <div className="mt-10">
        <Link href="/">
          <Button
            text="Go back home"
            buttonType={"primary"}
            buttonClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
}