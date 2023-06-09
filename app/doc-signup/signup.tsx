"use client";
import Link from "next/link";
import OtpCard from "@/components/otp/doc"
import { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";
import DefaultImg from "@/public/images/about/DF.png"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [page, setPage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [appointmentFee, setAppointmentFee] = useState("")
  const [qualification, setQualification] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const [isOtpGen, setIsOtpGen] = useState(false)
  const nextPage = () => {
    setPage(!page)
  }
  const handle = async (event) => {
    const selectedFile = event.target.files[0];
   
    let formData = new FormData();
    formData.append("profileImg", selectedFile);
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}doctor/upload`, formData);

      setImage({
        url: data.url,
        public_id: data.public_id
      })
      toast.success('🦄 Image Upload Succesfully', {
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
      toast.error('🦄 Error Recievs While Upload Picture', {
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
      const otp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}doctor/sendOtp`, { email, name },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
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
  }

  // const SubmitForm = async (ev) => {
  //   ev.preventDefault();
  //   try {
  //     const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}doctor/signup`,{name,email,age, experience, specialization, description,appointmentFee, qualification,password,confirmPassword,image });
  //     toast.success('🦄 Doctor Added Successfully', {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  //   catch (err) {
  //     toast.error('🦄 Error Accurs While Adding New Doctor', {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //     router.back();

  //   }
  // }


  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">

          {!isOtpGen &&

            (
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto max-w-[500px] rounded-md bg-white bg-opacity-80 py-10 px-6 sm:p-[60px]">
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl border-b-2 border-green">
                      Create Doctor's Account
                    </h3>
                    <p className="mb-11 text-center text-base font-medium text-body-color ">
                      It’s totally free and super easy
                    </p>

                    {!page &&
                      <form>
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Full Name{" "}
                          </label>
                          <input
                            value={name}
                            onChange={(event) => { setName(event.target.value) }}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
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
                            onChange={(event) => { setAge(event.target.value) }}
                            type="number"
                            name="age"
                            min="18"
                            placeholder="Enter your Age"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="qualification"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Qualification{" "}
                          </label>
                          <input
                            value={qualification}
                            onChange={(event) => { setQualification(event.target.value) }}
                            type="text"
                            name="qualification"
                            placeholder="Enter your qualification"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="Specailization"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Specailization{" "}
                          </label>
                          <input
                            value={specialization}
                            onChange={(event) => { setSpecialization(event.target.value) }}
                            type="text"
                            name="Specailization"
                            required
                            placeholder="Enter your years of specialization"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-8">
                          <label
                            htmlFor="experience"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Experience{" "}
                          </label>
                          <input
                            value={experience}
                            onChange={(event) => { setExperience(event.target.value) }}
                            type="text"
                            name="experience"
                            min={0}
                            required
                            placeholder="Enter your Experience"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="description"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Description{" "}
                          </label>
                          <input
                            value={description}
                            onChange={(event) => { setDescription(event.target.value) }}
                            type="text"
                            name="description"
                            required
                            placeholder="Add you description"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-6 flex">
                          <button onClick={nextPage} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                            Next
                          </button>
                        </div>
                      </form>
                    }

                    {page &&
                      <form>
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
                            onChange={(event) => { setEmail(event.target.value) }}
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
                            onChange={(event) => { setPassword(event.target.value) }}
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
                            onChange={(event) => { setConfirmPassword(event.target.value) }}
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your Confirm Password"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-8">
                          <label
                            htmlFor="fee"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Appointment Fee{" "}
                          </label>
                          <input
                            value={appointmentFee}
                            onChange={(event) => { setAppointmentFee(event.target.value) }}
                            type="number"
                            name="fee"
                            required
                            min={0}
                            placeholder="Enter your Appointment Fee"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>

                        <div className="mb-8">
                          <label
                            htmlFor="profileImg"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {" "}
                            Select Your profile Img{" "}
                          </label>
                          <input
                            onChange={handle}
                            type="file"
                            name="profileImg"
                            accept="image/*"
                            placeholder="Profile Image"
                            className="w-full rounded-md border border-transparent py-3 px-6 bg-dark text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                        </div>
                        <div className="mb-8 flex">
                          <label
                            htmlFor="checkboxLabel"
                            className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="checkboxLabel"
                                className="sr-only"
                              />
                              <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
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
                            <span>
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
                            <button onClick={nextPage} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                              Back
                            </button>
                          </div>
                          <div className="mb-6  inline-block">
                            <button onClick={SubmitForm} className="flex w-full items-end justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    }
                    <p className="text-center text-base font-medium text-body-color">
                      Already using HealthEase?
                      <Link href="/signin" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}

          {isOtpGen &&
            (<>
            <div className="text-green text-3xl text-center font-bold ">Please Enter Otp And Varify Your Email</div>
              <OtpCard name={name} email={email} age={age} experience={experience} specialization={specialization} description={description} appointmentFee={appointmentFee} qualification={qualification} password={password} confirmPassword={confirmPassword} image={image} />
              </>
            )



          }


        </div>

      </section>
      <ToastContainer />
    </>
  );
};

export default SignupPage;
