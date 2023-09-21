"use client";

// Import necessary dependencies and components.
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

// Import the utility function for updating search parameters.
import { updateSearchParams } from "@/utils";

// Define the CustomFilter component that provides a dropdown filter.
export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  // Access the router for navigation.
  const router = useRouter();

  // Initialize state for the selected option.
  const [selected, setSelected] = useState(options[0]);

  // Function to handle updating search parameters and navigating to a new URL.
  const handleUpdateParams = (e: { title: string; value: string }) => {
    // Generate a new pathname with updated search parameters.
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    // Use the router to navigate to the new URL.
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      {/* Create a Listbox component for the dropdown. */}
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in the state.
          handleUpdateParams(e); // Call the function to update search parameters.
        }}
      >
        <div className="relative w-fit z-10">
          {/* Create the Listbox.Button to display the selected option. */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>

          {/* Define transition effects for the dropdown options. */}
          <Transition
            as={Fragment} // Group multiple elements without adding an extra DOM node.
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Create the Listbox.Options to display available options. */}
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
