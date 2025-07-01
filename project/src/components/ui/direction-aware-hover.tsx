import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface DirectionAwareHoverProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  overlayClassName?: string;
}

export const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
  children,
  className,
  imageUrl,
  overlayClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovered(false);
  };

  const getDirection = (
    event: React.MouseEvent<HTMLDivElement>,
    element: HTMLDivElement
  ) => {
    const { width, height, top, left } = element.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) * (width > height ? height / width : 1);
    const y = (event.clientY - top - height / 2) * (height > width ? width / height : 1);
    const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][direction];
  };

  const variants = {
    initial: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0%",
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
    },
    animate: {
      x: "0%",
      y: "0%",
    },
    exit: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0%",
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
    },
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden group", className)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center",
          overlayClassName
        )}
        initial="initial"
        animate={isHovered ? "animate" : "exit"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};