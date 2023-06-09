"use client";
import Link from "next/link";
import { useState } from 'react';
import axios from "axios"
import OtpCard from "@/components/otp/page"
import { useRouter } from "next/navigation";
import Cookie from "js-cookie"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SignupPage = () => {

  const router = useRouter();

  const [page, setPage] = useState("1");
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState({});

  const [isOtpGen, setIsOtpGen] = useState(false)


  const nextPage = () => {
    setPage("2")
  }

  const backPage = () => {
    setPage("1")
  }

  const handle = async (event) => {
    const selectedFile = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append("profileImg", selectedFile);
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}patient/upload`, formData);
      toast("Image Selected  Successfully")
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (err) {
    
      toast.error(`🦄 Plz select Image again!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const SubmitForm = async (ev) => {
    ev.preventDefault();
    try {
      const otp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}patient/sendOtp`, { email, name: fullName },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials:true
        });
        setIsOtpGen(true)
            toast.success(`🦄 Please check Your mail for Otp`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

    }
    catch (err) {
          toast.error(`🦄 There is problem while genrating Otp`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

    }

    // try {
    //   const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}patient/signup`, { name: fullName, email, age, address, bloodGroup, mobile, password, confirmPassword, image });
    //   toast("SignUp Successfully")
    //   console.log(result.data.status);
    //   Cookie.set("userName", result.data.result.name);
    //   // router.push("/signin")
    // }
    // catch (err) {
    //   console.log(err.response.data)
    //   toast.error(`🦄 Plz fill all details and signup again`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // }
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          {!isOtpGen &&

            (<div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[500px] rounded-md bg-white bg-opacity-80 backdrop-blur-md py-10 px-6 dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl border-b-2 border-green">
                    Create your account
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-dark ">
                    It’s totally free and super easy
                  </p>

                  <form>
                    {page === "1" &&
                      <>

                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Full Name{" "}
                          </label>
                          <input
                            value={fullName}
                            onChange={(data) => { setFullName(data.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="age"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Age{" "}
                          </label>
                          <input
                            value={age}
                            onChange={(data) => { setAge(data.target.value) }}
                            type="number"
                            name="age"
                            min="0"
                            placeholder="Enter your Age"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="address"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Address{" "}
                          </label>
                          <input
                            value={address}
                            onChange={(data) => { setAddress(data.target.value) }}
                            type="text"
                            name="address"
                            placeholder="Enter your Address"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="bloodGroup"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Enter Your BloodGroup{" "}
                          </label>
                          <input
                            value={bloodGroup}
                            onChange={(data) => { setBloodGroup(data.target.value) }}
                            type="text"
                            name="bloodGroup"
                            required
                            placeholder="Enter your BloodGroup"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-8">
                          <label
                            htmlFor="mobile"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Enter Your Mobile Number{" "}
                          </label>
                          <input
                            value={mobile}
                            onChange={(data) => { setMobile(data.target.value) }}
                            type="number"
                            name="mobile"
                            required
                            placeholder="Enter your mobile number"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-6 flex">
                          <button value={page} onClick={nextPage} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                            Next
                          </button>
                        </div>
                      </>

                    }

                    {page === "2" && <>

                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {" "}
                          Email{" "}
                        </label>
                        <input
                          value={email}
                          onChange={(data) => { setEmail(data.target.value) }}
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <input
                          value={password}
                          onChange={(data) => { setPassword(data.target.value) }}
                          type="password"
                          name="password"
                          placeholder="Enter your Password"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          htmlFor="confirmPassword"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {" "}
                          Confirm Password{" "}
                        </label>
                        <input
                          value={confirmPassword}
                          onChange={(data) => { setConfirmPassword(data.target.value) }}
                          type="password"
                          name="confirmPassword"
                          placeholder="Enter your Confirm Password"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>

                      <div className="mb-8">
                        <label
                          htmlFor="confirmPassword"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {" "}
                          Profile Image{" "}
                        </label>
                        <input

                          onChange={handle}
                          type="file"
                          name="profileImg"
                          placeholder="Select Your Profile Image"
                          accept="image/*"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base bg-dark text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>

                      <div className="mb-8 flex">
                        <label
                          htmlFor="checkboxLabel"
                          className="flex cursor-pointer select-none text-sm font-medium text-white"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="checkboxLabel"
                              className="sr-only"
                            />
                            <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-white border-opacity-20 dark:border-white dark:border-opacity-10">
                              <span className="opacity-0">
                                <svg
                                  width="11"
                                  height="8"
                                  viewBox="0 0 11 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                    fill="#3056D3"
                                    stroke="#3056D3"
                                    strokeWidth="0.4"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          <span className="text-dark">
                            By creating account means you agree to the
                            <a href="#0" className="text-primary hover:underline">
                              {" "}
                              Terms and Conditions{" "}
                            </a>
                            , and our
                            <a href="#0" className="text-primary hover:underline">
                              {" "}
                              Privacy Policy{" "}
                            </a>
                          </span>
                        </label>
                      </div>
                      <div className="flex justify-between">
                        <div className="mb-6  inline-block  ">
                          <button value={page} onClick={backPage} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                            Back
                          </button>
                        </div>
                        <div className="mb-6  inline-block">
                          <button value={page} onClick={SubmitForm} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                            Submit
                          </button>
                        </div>
                      </div>
                    </>
                    }
                  </form>
                  <p className="text-center text-base font-medium text-dark">
                    Already using HealthEase?
                    <Link href="/signin" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            )
          }

          {isOtpGen &&
            (<>
            <div className="text-green text-3xl font-bold text-center">Please Enter Otp And Verify Your Email</div>
              <OtpCard fullName={fullName} age={age} address={address} bloodGroup={bloodGroup} mobile={mobile } email={email} password={password} confirmPassword={confirmPassword} image={image} />
              </>
            )

        

          }
        </div>

      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SignupPage;
