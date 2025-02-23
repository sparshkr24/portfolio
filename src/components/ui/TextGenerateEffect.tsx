"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    console.log(wordsArray);
    wordsArray.forEach((_, index) => {
      controls.start(
        `span:nth-child(${index + 1})`,
        { opacity: 1 },
        { duration: 2, delay: index * 0.2 }
      );
    });
  }, [controls]);

  const renderWords = () => {
    return (
      <motion.div animate={controls}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold ${className ? className : ''}`}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
