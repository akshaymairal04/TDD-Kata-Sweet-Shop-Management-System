import { motion } from "motion/react";

const MotionDiv = motion("div");
const MotionH1 = motion("h1");
const MotionP = motion("p");
const MotionLi = motion("li");

function About() {
  return (
    <MotionDiv className="min-h-screen bg-yellow-50 flex flex-col items-center justify-start px-4 py-12 gap-10">
      <MotionH1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-yellow-700 mb-6 text-center"
      >
        About Sweet Shop Management
      </MotionH1>

      <MotionP
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center max-w-2xl text-yellow-800 mb-6"
      >
        Sweet Shop Management System is designed to help sweet shop owners
        manage their business efficiently. From tracking inventory and sales to
        managing staff and orders, everything is centralized in a user-friendly
        interface with a colorful, sweet-inspired theme.
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full"
      >
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4 text-center">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-yellow-800 text-lg">
          <MotionLi
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Track inventory and manage stock levels easily.
          </MotionLi>
          <MotionLi
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Monitor sales and generate reports for better decision-making.
          </MotionLi>
          <MotionLi
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Manage staff accounts and track daily tasks efficiently.
          </MotionLi>
          <MotionLi
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Handle customer orders and billing seamlessly.
          </MotionLi>
          <MotionLi
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Colorful, intuitive design to match the sweet shop theme.
          </MotionLi>
        </ul>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-3xl text-center text-yellow-900 text-lg mt-8"
      >
        <p>
          Our system is perfect for small to medium sweet shops that want to
          save time, reduce errors, and improve customer satisfaction. With
          Sweet Shop Management, running your business becomes as sweet as your
          treats!
        </p>
      </MotionDiv>
    </MotionDiv>
  );
}

export default About;
