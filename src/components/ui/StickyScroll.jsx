"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  // Initialize scrollYProgress based on the container
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  // Calculate the number of cards
  const cardLength = content.employees.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate the breakpoints based on employee indices
    const cardsBreakpoints = Array.from({ length: cardLength }, (_, index) => index / cardLength);
    
    // Find the closest breakpoint index
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--gray-900)",
    "var(--neutral-900)",
    "var(--stone-900)",
    "var(--zinc-900)",
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="">
          {content.employees.map((item, index) => (
            <div key={item.name + index} className="my-20 ">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm my-2"
              >
                {item.position}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm"
              >
                 {item.about}  
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm my-2"
              >
                {item.experience}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ 
          backgroundImage: `url(${content.employees[activeCard]?.image})`, // Use the image of the active card
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor:'#050505'
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content.employees[activeCard]?.content ?? null} {/* Ensure content is being fetched properly */}
      </div>
    </motion.div>
  );
};
