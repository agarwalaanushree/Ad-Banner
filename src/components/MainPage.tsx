import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function MainPage() {
  return (
    <div className="h-screen w-full flex flex-col relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav className="fixed top-0 w-full bg-white dark:bg-black p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-black dark:text-white">
            AdBanners
          </div>
          <div className="space-x-4">
            <Link href="/" className="text-black dark:text-white hover:underline">
              Home
            </Link>
            <Link href="/ads" className="text-black dark:text-white hover:underline">
              Ads
            </Link>
            {/* <Link href="/about" className="text-black dark:text-white hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-black dark:text-white hover:underline">
              Contact
            </Link> */}
          </div>
        </div>
      </nav>
      
      <div className="flex-grow flex items-center justify-center pt-16"> 
        <div className="p-4 relative z-10 w-full text-center">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Stay Tuned for Exciting Offers!
          </h1>
          <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-100 max-w-lg mx-auto"
          >
            Don’t miss out on our exclusive promotions and updates! Check out our ad banners for special deals.
          </p>
          <div className="mt-4">
            <Link href={"/ads"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Ads
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
