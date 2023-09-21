'use client'

// Import necessary dependencies and types.
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

// Define the CustomButton component that accepts various props.
export const CustomButton = ({
  textStyles,
  isDisabled,
  rightIcon,
  btnType,
  title,
  containerStyles,
  handleClick
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"} // Use the provided button type or default to "button".
      className={`custom-btn ${containerStyles}`} // Apply custom styles to the button.
      onClick={handleClick} // Call the provided handleClick function on button click.
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span> {/* Display the button title with custom text styles. */}
      {rightIcon && ( // Display a right icon if provided.
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill // Use "fill" to maintain aspect ratio when resizing.
            className="object-contain" // Apply styles to the icon for containment.
          />
        </div>
      )}
    </button>
  )
}
