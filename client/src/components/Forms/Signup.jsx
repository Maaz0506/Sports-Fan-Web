import backgroundImage from "../../assets/bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

// import axios from "axios";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError,setIsError]=useState("")
  const navigate = useNavigate();
  const url = "http://localhost:4000/auth/register";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(url, {
        username: username,
        email: email,
        password: password,
      });
      console.log(data.data);
      setIsError(data.data.failed)
      if (data.status === 200 && !data.data.failed) {
        navigate("/");
      }
      else if(isError){
        alert(isError)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen  ">
      <div
        className=" w-1/2 bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="shadow-xl bg-slate-50 w-1/2">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Register Yourself
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required={true}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
