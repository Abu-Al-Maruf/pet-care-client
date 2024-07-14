import { TEInput, TERipple } from "tw-elements-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { createUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("creating...");

    try {
      const res = await createUser(email, password);
      console.log(res.user);
      toast.success("created", { id: toastId });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="h-full bg-neutral-200">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 p-10">
        <div className="block rounded-lg bg-white shadow-lg">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img className="mx-auto w-24" src={logo} alt="logo" />
                  <h4 className="mb-12 w-2/3 mx-auto sm:w-full mt-1 pb-1 text-xl font-semibold">
                    Welcome to our pet care family
                  </h4>
                </div>

                <form onSubmit={handleSubmit}>
                  <p className="mb-4">Please Register</p>
                  {/* <!--Username input--> */}
                  <TEInput
                    type="email"
                    label="Email"
                    className="mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                  ></TEInput>

                  {/* <!--Password input--> */}
                  <TEInput
                    type="password"
                    label="Password"
                    className="mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                  ></TEInput>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <TERipple rippleColor="light" className="w-full">
                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      >
                        Register
                      </button>
                    </TERipple>
                  </div>

                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Already have an account?</p>
                    <TERipple rippleColor="light">
                      <Link
                        to={"/login"}
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      >
                        Login
                      </Link>
                    </TERipple>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Right column container--> */}
            <div
              className="flex items-center p-6 rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
