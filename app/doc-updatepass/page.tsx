'use client'
import {useState} from "react";
import axios from "axios";
import Cookie from "js-cookie";
import {useRouter} from "next/navigation"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const router=useRouter()
  const [newPass,setNewPass]=useState('');
  const [currentPass,setcurrentPass]=useState('');
  const [newConfirmPass,setNewConfirmPass]=useState('');

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault();
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}doctor/updatePassword`, { currentPassword:currentPass,password:newPass, confirmPassword:newConfirmPass 
      
    },
    {headers: {
      "authorization": `Bearer ${Cookie.get("Jwt")}`,
      "Content-Type": "application/json"
    }
  });
      Cookie.remove("Jwt");
      Cookie.remove("patientId");
      Cookie.remove("role");
      toast.success('🦄 Password Update Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("/sigin")
    }

    catch (err) {
      toast.error('🦄 Failed To Update Password', {
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

  return(

    <>
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[500px] rounded-md bg-white bg-opacity-80 py-10 px-6  sm:p-[60px]">
            <h3 className=" pb-4 mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl border-b border-green">
              Change your Password
            </h3>
           
           
            <form>
            <div className="mb-8">
                <label
                  htmlFor="npassword"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                   Current Password
                </label>
                <input
                 value={currentPass}
                 onChange={(el)=>{setcurrentPass(el.target.value)}}
                  type="password"
                  name="npassword"
                  placeholder="Enter New Password"
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
              </div>
              
              <div className="mb-8">
                <label
                  htmlFor="npassword"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                   New Password
                </label>
                <input
                 value={newPass}
                 onChange={(el)=>{setNewPass(el.target.value)}}
                  type="password"
                  name="npassword"
                  placeholder="Enter New Password"
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="ncpassword"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                 value={newConfirmPass}
                 onChange={(el)=>{setNewConfirmPass(el.target.value)}}
                  type="password"
                  name="ncpassword"
                  placeholder="Enter New Confirm Password"
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
              </div>
             
         
              <div className="mb-6">
                <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                onClick={handleSubmit}
                >
                 Change Password
                </button>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 left-0 z-[-1]">
      <svg
        width="1440"
        height="969"
        viewBox="0 0 1440 969"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_95:1005"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1440"
          height="969"
        >
          <rect width="1440" height="969" fill="#090E34" />
        </mask>
        <g mask="url(#mask0_95:1005)">
          <path
            opacity="0.1"
            d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
            fill="url(#paint0_linear_95:1005)"
          />
          <path
            opacity="0.1"
            d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
            fill="url(#paint1_linear_95:1005)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_95:1005"
            x1="1178.4"
            y1="151.853"
            x2="780.959"
            y2="453.581"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_95:1005"
            x1="160.5"
            y1="220"
            x2="1099.45"
            y2="1192.04"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
  <ToastContainer/>
  </>

  )
  

}

export default Page;
