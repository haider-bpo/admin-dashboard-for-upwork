"use client"; 

interface ViewAllButtonProps {
  onClick?: () => void; // Optional onClick handler
  className?: string; // Allow custom className for additional styling
  rounded?: boolean; // Optional prop to toggle between subtle and full rounding
}

export const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  onClick,
  className = "",
  rounded = true, // Default to subtle rounding (matches image)
}) => {
  return (
    <>
      {/* Component-specific styles */}
      <style jsx>{`
        .custom-gradient-border {
          border-image-source: linear-gradient(
            100.7deg,
            rgba(255, 74, 231, 0.7) 0%,
            rgba(133, 167, 243, 0) 32.5%,
            rgba(131, 168, 243, 0) 69%,
            rgba(17, 255, 255, 0.7) 100%
          );
          border-image-slice: 1; /* Ensures the gradient fills the border */
          backdrop-filter: blur(8.4px);
          border-radius: ${rounded ? "9999px" : "1.5px"}; /* Toggle between fully rounded and subtle */
        }

        /* Ensure the button has no default browser styles */
        .view-all-button {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: none;
        }
      `}</style>

      {/* HTML button element */}
      <button
        onClick={onClick}
        className={`view-all-button w-[79px] h-[31px] px-3 bg-[#2b2b2b1c] border-2 custom-gradient-border text-white border-solid text-sm font-medium ${className}`}
      >
        View all
      </button>
    </>
  );
};