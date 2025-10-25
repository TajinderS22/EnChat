import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Privacy() {
  return (
    <div className="flex flex-col max-w-[1920px] min-h-[100svh] mx-auto relative bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 w-full backdrop-blur-md z-10 border-b border-gray-500/20">
        <Navbar />
      </div>

      <main className="flex-grow px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At EnChat, your privacy is our top priority. We are committed to protecting your personal information and ensuring that your conversations remain secure and private.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            End-to-End Encryption
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All messages are encrypted end-to-end, meaning only you and the intended recipient can read them. We do not have access to your message content.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Data Collection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We collect minimal data necessary for account creation and functionality, such as username, email, and encrypted keys. We do not track your usage or share data with third parties.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-teal-500 hover:underline">contact us</Link>.
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
