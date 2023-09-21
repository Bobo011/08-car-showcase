import Link from "next/link"; 
import Image from "next/image";
import { CustomButton } from "."; 


export const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      {/* Create a navigation bar with a max width and centered content */}
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        {/* Create a link to the homepage */}
        <Link href="/">
          {/* Display the Car Hub logo */}
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {/* Render a custom button for signing in */}
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
