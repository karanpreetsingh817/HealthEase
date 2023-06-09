import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleReview = ({ Review }) => {
  const { rating, patient, profileImg, review } = Review;

  let ratingIcons = [];
  for (let index = 0; index < rating; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md  p-8 shadow-one   bg-white bg-opacity-80 bg-blur-md lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-dark dark:border-opacity-10 ">
          “{review}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            {/* HERE WE DISPLAY PROFILE IMAGE AVTAR OF PATIENT */}
            <Image src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" alt={patient} fill /> 
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark  lg:text-base xl:text-lg">
              {/* HERE WE DISPLAY NAME OF PATIENT */}
              KARANPREET Singh
            </h5>
            <p className="text-sm text-dark">Patient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
