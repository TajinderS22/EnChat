import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Terms() {
  return (
    <div className="flex flex-col max-w-[1920px] min-h-[100svh] mx-auto relative bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 w-full backdrop-blur-md z-10 border-b border-gray-500/20">
        <Navbar />
      </div>

      <main className="flex-grow px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Welcome to EnChat. By using our service, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            By accessing and using EnChat, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Use License
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Permission is granted to temporarily use EnChat for personal, non-commercial transitory viewing only.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The materials on EnChat are provided on an 'as is' basis. EnChat makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about these Terms of Service, please <Link href="/contact" className="text-teal-500 hover:underline">contact us</Link>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center">
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
        </div>
      </footer>
    </div>
  );
}
