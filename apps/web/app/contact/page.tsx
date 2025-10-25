import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col max-w-[1920px] min-h-[100svh] mx-auto relative bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 w-full backdrop-blur-md z-10 border-b border-gray-500/20">
        <Navbar />
      </div>

      <main className="flex-grow px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Have questions or need support? We'd love to hear from you. Reach out to us using the information below.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Email
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For general inquiries, support, or feedback, email us at <a href="mailto:enchat@tajinder.xyz" className="text-teal-500 hover:underline">enchat@tajinder.xyz</a>.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Response Time
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We aim to respond to all inquiries within 24-48 hours. For urgent security-related issues, please include "URGENT" in the subject line.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Other Resources
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Check out our <Link href="/privacy" className="text-teal-500 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-teal-500 hover:underline">Terms of Service</Link> for more information.
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
