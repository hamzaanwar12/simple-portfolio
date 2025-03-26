import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";

function StairAnimation() {
  const [direction, setDirection] = useState("initial");
  const stairs = Array.from({ length: 10 }, (_, i) => i + 1);

  const moveDownwardVariants = {
    initial: { y: "-100%" },
    animate: (index) => ({
      y: 0,
      transition: {
        // Reverse stagger: start with last box (index 3)
        delay: index * 0.1,
        duration: 0.45,
        onComplete:
          index === stairs.length - 1
            ? () => {
                setTimeout(() => setDirection("reverse"), 250);
              }
            : undefined,
      },
    }),
  };

  const moveUpwardVariants = {
    initial: { y: 0 },
    animate: (index) => ({
      y: "-100%",
      transition: {
        // Reverse stagger: start with last box (index 3)
        delay: (stairs.length - 1 - index) * 0.1,
        duration: 0.45,
      },
    }),
  };

  return (
    <div
      className="pointer-events-none
 absolute top-0 left-0 flex h-screen w-screen items-center overflow-hidden scrollbar-hide"
    >
      {stairs.map((stair) => (
        <motion.div
          key={stair}
          initial={{ y: "-100%" }}
          variants={
            direction === "initial" ? moveDownwardVariants : moveUpwardVariants
          }
          animate={
            direction === "initial" || direction === "reverse"
              ? "animate"
              : "initial"
          }
          custom={stair}
          className="w-[10%] h-full bg-gray-800"
        />
      ))}
    </div>
  );
}

export default StairAnimation;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const SequentialBoxAnimation = () => {
//   const [animationStage, setAnimationStage] = useState('initial');

//   // Initial boxes positioned in the first column
//   const boxes = [
//     { id: 1, color: 'bg-red-500' },
//     { id: 2, color: 'bg-blue-500' },
//     { id: 3, color: 'bg-green-500' },
//     { id: 4, color: 'bg-yellow-500' }
//   ];

//   // Animation variants for moving right (first stage)
//   const moveRightVariants = {
//     initial: { x: 0, opacity: 1 },
//     animate: (index) => ({
//       x: 300, // Move 300 pixels to the right
//       opacity: 1,
//       transition: {
//         delay: index * 0.2, // Stagger effect
//         duration: 0.5,
//         // When last box completes, trigger next stage
//         onComplete: index === boxes.length - 1
//           ? () => {
//               // Small delay to ensure all boxes are fully at right before next animation
//               setTimeout(() => setAnimationStage('moveLeft'), 500);
//             }
//           : undefined
//       }
//     })
//   };

//   // Animation variants for moving left (second stage - reverse stagger)
//   const moveLeftVariants = {
//     initial: { x: 300, opacity: 1 },
//     animate: (index) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         // Reverse stagger: start with last box (index 3)
//         delay: (boxes.length - 1 - index) * 0.2,
//         duration: 0.5
//       }
//     })
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative w-[500px] h-[400px] border-2 border-gray-300">
//         {boxes.map((box, index) => (
//           <motion.div
//             key={box.id}
//             className={`absolute w-20 h-20 ${box.color}`}
//             style={{ top: `${index * 80 + 50}px`, left: 50 }}
//             variants={animationStage === 'initial' ? moveRightVariants : moveLeftVariants}
//             initial="initial"
//             animate={animationStage === 'initial' || animationStage === 'moveLeft' ? 'animate' : 'initial'}
//             custom={index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SequentialBoxAnimation;
