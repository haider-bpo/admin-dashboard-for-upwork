import React from "react";
import Image from "next/image";

interface AvatarPicProps {
  src: string;
  alt: string;
  username: string;
  className?: string;
  hoveredId?: number;
  id?: string;
}

const AvatarPic: React.FC<AvatarPicProps> = ({
  src,
  alt,
  username,
  className = "",
  hoveredId,
  id,
}) => {
  return (
    <div
      className={`h-12 w-12 p-[.4rem] bg-[#3d2e50] transition-transform duration-300 border-2 border-[#2e9cb2] rounded-full ${className}`}
      style={{
        transform: hoveredId === id ? "scale(1.1)" : "scale(1)",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={48} // Set the width to match the container
          height={48} // Set the height to match the container
          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full">
          {username.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default AvatarPic;
