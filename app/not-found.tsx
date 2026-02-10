import Logo from "@/components/layouts/Logo";
import { ArrowLeft, HelpCircle, Home } from "lucide-react";
import Link from "next/link";


const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-shop_light_green/5 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 bg-shop_light_green/10 rounded-full text-shop_dark_green text-sm font-medium mb-6">
            404 - Page Not Found
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! Lost in the digital world?
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-shop_dark_green hover:bg-shop_light_green text-white font-medium rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>

            <Link
              href="/help"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 font-medium rounded-lg transition-all hover:bg-gray-50 hover:shadow-sm"
            >
              <HelpCircle className="h-5 w-5" />
              Get Help
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <p className="text-gray-500 mb-4">Still need help?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-shop_dark_green hover:text-shop_light_green font-medium group"
            >
              Contact our support team
              <ArrowLeft className="ml-1 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
