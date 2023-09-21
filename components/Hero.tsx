"use client";

// Import necessary dependencies and components.
import { CustomButton } from "./index"; // Import the CustomButton component.
import Image from "next/image";

// Define the Hero component.
export const Hero = () => {
  const handleScroll = () => {}; // Placeholder function, not implemented.

  return (
    <div className="hero">
      {/* Left side of the hero section */}
      <div className=" flex-1 pt-36 padding-x ">
        {/* Display the main title */}
        <h1 className="hero__title">
          Find, book, or rent a car --quickly and easily
        </h1>
        {/* Display the subtitle */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* Render a custom button for exploring cars */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} // Call the handleScroll function on button click (not implemented).
        />
      </div>
      {/* Right side of the hero section */}
      <div className="hero__image-container">
        {/* Render an image */}
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            sizes="max-width:10000px"
          />
        </div>
        {/* Create an overlay for the image */}
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};
