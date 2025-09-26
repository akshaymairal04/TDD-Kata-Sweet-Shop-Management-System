import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MotionDiv = motion("div");
const MotionH1 = motion("h1");
const MotionP = motion("p");

function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-start px-4 py-12 gap-12">
      {/* Hero Section */}
      <MotionH1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-pink-700 mb-6 text-center"
      >
        Sweet Shop Management
      </MotionH1>

      <MotionP
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-lg text-pink-600 mb-6 max-w-2xl"
      >
        Manage your sweets, sales, inventory, and customers efficiently with a
        colorful, user-friendly sweet-themed interface.
      </MotionP>

      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link
          to="/login"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-yellow-400 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Register
        </Link>
        <Link
          to="/about"
          className="bg-green-400 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition"
        >
          About
        </Link>
      </MotionDiv>

      {/* Features Section */}
      <MotionDiv className="mt-12 max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: "Inventory Management",
            description:
              "Track stock levels, get notifications, and never run out of sweets.",
            color: "bg-pink-100 text-pink-700",
          },
          {
            title: "Sales & Billing",
            description:
              "Generate invoices, track daily sales, and see revenue reports easily.",
            color: "bg-yellow-100 text-yellow-700",
          },
          {
            title: "Staff & Orders",
            description:
              "Manage staff accounts, assign tasks, and track customer orders seamlessly.",
            color: "bg-green-100 text-green-700",
          },
        ].map((feature, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
            className={`${feature.color} p-6 rounded-xl shadow-lg`}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}

export default Home;
