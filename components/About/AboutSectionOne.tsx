import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-fs">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 ">
              <SectionTitle
                title="Revolutionizing Healthcare: The Rise of Digital Hospitals"
                paragraph="A digital hospital is a healthcare facility that has fully embraced technology and digitalization in its operations. Digital hospitals use technology to streamline processes, improve efficiency, and enhance patient care.
                One of the key features of a digital hospital is the use of electronic health records (EHRs) to store and manage patient data. EHRs allow healthcare providers to access patient information quickly and easily, which can help to improve the accuracy and efficiency of diagnosis and treatment. Digital hospitals also use other types of digital tools and devices, such as telemedicine and remote patient monitoring, to improve access to care for patients and increase the efficiency of healthcare delivery."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Electronic health records" />
                    <List text="Clinical workflow integration" />
                    <List text="Patient engagement" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Telemedicine and remote patient monitoring" />
                    <List text="AI algorithms and analytics" />
                    <List text="Enhanced patient safety" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0   w-full  aspect-w-4 aspect-h-3"
                data-wow-delay=".2s"
              >
                <Image
                  src={`https://res.cloudinary.com/dgtv2w9av/image/upload/c_crop,h_5800,w_3500/v1685100005/empty-doctors-office-having-remore-doctor-talking-during-online-videocall-conference-computer-screen-hospital-room-equipped-with-medical-professional-tools-medicine-services_calelf.jpg`}
                  alt="about-image"
                  width={5000}  height={3000} style={{ objectFit: "contain" }}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
