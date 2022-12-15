import React, { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, loading, setLoading } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(userInfo.email, userInfo.password)
      .then((result) => {
        setUserInfo({
          name: "",
          email: "",
          password: "",
        });
        toast.success("Sign In successful!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((e) => {
        toast.error(e.message, {
          style: {
            borderRadius: "10px",
            background: "#ED4337",
            color: "#fff",
          },
        });
        setLoading(false);
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Provide a valid email" });
      setUserInfo({ ...userInfo, email: e.target.value });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (!/(?=.*?[A-Z])/.test(password)) {
      setErrors({ ...errors, password: "Password At least one Upper Case!" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setErrors({ ...errors, password: "Password At least one Digit!" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrors({
        ...errors,
        password: "Password At least one Special Character!",
      });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else if (!/.{8,}/.test(password)) {
      setErrors({ ...errors, password: "Password Minimum 8 Characters!" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="loginImg" />
        </div>
          <div className="card w-full max-w-md bg-base-100 border rounded-lg">
            <h1 className="text-4xl font-semibold text-center text-[#444] mt-10">
              Login
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered focus:outline-0 rounded-lg"
                  value={userInfo.email}
                  onChange={handleEmailChange}
                />
                <span className="text-xs text-red-600">{errors.email}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered focus:outline-0 rounded-lg"
                  value={userInfo.password}
                  onChange={handlePasswordChange}
                />
                <span className="text-xs text-red-600">{errors.password}</span>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn rounded-lg border-0 text-white hover:bg-[#d33010] bg-[#FF3811] no-animation mr-5 capitalize w-full"
                />
              </div>
            </form>
            <div className="text-center">
              <span className="mb-8 inline-block">Or Sign In with</span>
              <div className="flex items-center justify-center mb-8">
                <TiSocialFacebook
                  width={31}
                  height={31}
                  size={40}
                  color="#3B5998"
                  className="bg-[#f5f5f8] rounded-full"
                />
                <TiSocialLinkedin
                  width={31}
                  height={31}
                  size={40}
                  color="#0A66C2"
                  className="bg-[#f5f5f8] rounded-full"
                />
                <FcGoogle size={30} className="bg-[#f5f5f8] rounded-full" />
              </div>
              <p className="mb-10 text-[#737373]">
                New to Genius Car?{" "}
                <Link to="/signup">
                  <span className="text-[#FF3811] font-semibold">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
