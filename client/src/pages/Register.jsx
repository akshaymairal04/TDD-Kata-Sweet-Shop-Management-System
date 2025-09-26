import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/authSlice";
import { motion } from "motion/react";

const MotionDiv = motion("div");

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
      <MotionDiv
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow hover:bg-yellow-600 transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && (
            <p className="text-red-500 mt-2 text-sm text-center">{error}</p>
          )}
        </form>
      </MotionDiv>
    </div>
  );
}

export default Register;
