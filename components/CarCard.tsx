"use client";

// Import necessary dependencies and utilities.
import { useState } from "react";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";
import { CarDetails, CustomButton } from ".";

// Define the props interface for the CarCard component.
interface CarCardProps {
  car: CarProps;
}

// Define the CarCard component.
export const CarCard = ({ car }: CarCardProps) => {
  // Initialize a state variable to control the visibility of additional car details.
  const [isOpen, setIsOpen] = useState(false);

  // Destructure properties from the 'car' object.
  const { city_mpg, year, make, model, transmission, drive } = car;

  // Calculate the car rental price based on city miles per gallon (city_mpg) and year.
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      {/* Render car make and model as the title. */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Render the car rental price. */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
      </p>

      {/* Render '/day' label. */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* Render the car image. */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Render additional car details (transmission, drive, city_mpg). */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] leading-[17px]">
              {drive.toLocaleUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
          </div>
        </div>

        {/* Render a button to view more details and open the CarDetails component. */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Render the CarDetails component with the 'isOpen' state. */}
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
