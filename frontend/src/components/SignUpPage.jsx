import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupImage from "../assets/SignUp.webp";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isHiveKeychain, setIsHiveKeychain] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const isPasswordValid = password.length >= 6;

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-ffai.vercel.app/auth/signup/email", {
        email,
        password,
      });
      toast.success(response.data.message || "Signup successful");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
      const message = error.response?.data?.message || "Signup failed. Please try again!";
      toast.error(message);
    }
  };

  const handleHiveKeychainSignUp = async () => {
    if (typeof window.hive_keychain === "undefined") {
      toast.error("Hive Keychain is not installed. Please install it to proceed.");
      return;
    }

    window.hive_keychain.requestSignBuffer(
      null,
      "Login to LifeVault",
      "Active",
      async (response) => {
        if (response.error) {
          toast.error("Login failed: " + response.error);
        } else {
          const { account } = response.result;

          try {
            const res = await axios.post("https://backend-ffai.vercel.app/auth/signup/hive", {
              hiveAccount: account.name,
            });
            toast.success(res.data.message);
            navigate("/login");
          } catch (err) {
            console.error("Hive Keychain Signup Error:", err);
            toast.error(err.response?.data?.message || "Signup failed");
          }
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4 animate-fadeInDown">
            Join Us Today!
          </h2>
          <p className="text-center text-gray-600 mb-8 animate-fadeInDown">
            Create your account to get started
          </p>

          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 mx-2 ${!isHiveKeychain ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setIsHiveKeychain(false)}
            >
              Email Signup
            </button>
            <button
              className={`px-4 py-2 mx-2 ${isHiveKeychain ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setIsHiveKeychain(true)}
            >
              Hive Keychain Signup
            </button>
          </div>

          {isHiveKeychain ? (
            <button
              onClick={handleHiveKeychainSignUp}
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white rounded-md font-bold transform transition duration-300 hover:scale-105"
            >
              Sign Up with Hive Keychain
            </button>
          ) : (
            <form className="space-y-4" onSubmit={handleEmailSignUp}>
              <div className="animate-slideInLeft">
                <label htmlFor="email" className="block text-sm font-medium text-blue-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 rounded-md bg-blue-100 text-blue-800 focus:ring focus:ring-blue-400"
                  aria-label="Enter your email address"
                  required
                />
                {!isEmailValid && email.length > 0 && (
                  <p className="text-xs text-red-500 mt-1">Please enter a valid email address.</p>
                )}
              </div>
              <div className="animate-slideInRight">
                <label htmlFor="password" className="block text-sm font-medium text-blue-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-1 rounded-md bg-blue-100 text-blue-800 focus:ring focus:ring-blue-400"
                    aria-label="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-blue-600"
                  >
                    👁️
                  </button>
                </div>
                {!isPasswordValid && password.length > 0 && (
                  <p className="text-xs text-red-500 mt-1">Password must be at least 6 characters long.</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isEmailValid || !isPasswordValid}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white rounded-md font-bold transform transition duration-300 hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          )}

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;