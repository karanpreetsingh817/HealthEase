"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const router = useRouter();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const gettingExstingReview = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}doctor/${Cookie.get("doctorId")}/reviews/myReview`,
        {
          headers: {
            authorization: `Bearer ${Cookie.get("Jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.result) {
        setReview(res.data.result.review);
        setRating(res.data.result.rating);
      }
      if((res.data.result).length===0){
        toast.success('🦄 There Is Review of Doctor', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (err) {
      toast.warning('🦄 There is no review written by you for this doctor', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    gettingExstingReview();
  },[]);

  const handleSubmit = async (el) => {
    el.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}doctor/${Cookie.get("doctorId")}/reviews`,
        { rating, review },
        {
          headers: {
            authorization: `Bearer ${Cookie.get("Jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.result) {
        toast.success('🦄 Review Added Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        router.push(`/show-alldoctor/${Cookie.get("doctorId")}`)
      }
    } catch (err) {
      toast.error('🦄 There Is Problem While Adding Review', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
    <section id="contact" className="overflow-hidden py-20  md:py-20 lg:py-28 ">
      <div className="container ">
        <div className="-mx-4 ml-48 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12 xl:w-9/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-white bg-opacity-80 py-11 px-8 backdrop-blur-md dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Add Your Review
              </h2>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2"></div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <textarea
                        value={review}
                        onChange={(el) => {
                          setReview(el.target.value);
                        }}
                        name="message"
                        rows={5}
                        placeholder="Enter your Review"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <input
                        value={rating}
                        onChange={(el) => {
                          setRating(el.target.value);
                        }}
                        name="rating"
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Enter Rating Between 1 to 5"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-white placeholder-white shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></input>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-md bg-primary py-4 px-9 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      onClick={handleSubmit}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12"></div>
        </div>
      </div>
    </section>
    <ToastContainer/>
    </>
  );
};

export default Contact;
