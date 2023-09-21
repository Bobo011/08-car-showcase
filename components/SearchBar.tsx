"use client";

// Import necessary dependencies and components.
import React from "react";
import Image from "next/image";
import { SearchManufacturer } from "."; // Import the SearchManufacturer component.
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the SearchButton component that includes a search icon.
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

// Define the SearchBar component.
export const SearchBar = () => {
  // Initialize state variables for manufacturer and model inputs.
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  // Access the router to enable navigation.
  const router = useRouter();

  // Handle the form submission for searching.
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if both the manufacturer and model are empty, display an alert if so.
    if (manufacturer === "" && model === "") {
      return alert("Please Fill in the Search Bar");
    }

    // Call the function to update the search parameters in the URL.
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  // Function to update search parameters in the URL.
  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    // Use the router to navigate to the new URL with updated search parameters.
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        {/* Render the SearchManufacturer component for selecting a manufacturer. */}
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* Render the SearchButton for small screens. */}
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        {/* Input field for entering the car model. */}
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        {/* Render the SearchButton for small screens. */}
        <SearchButton otherClasses="sm:hidden" />
      </div>
      {/* Render the SearchButton for screens larger than small. */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
