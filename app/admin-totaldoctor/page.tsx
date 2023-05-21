'use client'
import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "@/components/DocCard/SingleBlog"
import {useState, useEffect } from 'react';
import {useRouter} from "next/navigation"
import axios from "axios";
import Cookie from "js-cookie"

const AllDoctor = () => {

    const router=useRouter();
    const [doctors,setDoctors]=useState([]);
    const callAboutpage=async()=>{
       
        try{
          if(!Cookie.get("Jwt")) return router.push("/signin")
            
            const res = await axios.get("http://localhost:8080/v1/doctor",{
                headers: {
                    "authorization": `Bearer ${Cookie.get("Jwt")}`,
                    "Content-Type": "application/json"
                  },                
            } );
            setDoctors(res.data.result)
            console.log(res.data.result)
        }

        catch(err)

        {
            alert(err.response.data.message);
            // router.push("/")
        }
    }


useEffect(() => {
    callAboutpage();
}, [])

    return (
        <>
        {
       doctors ? (
        <section id="blog" className="bg-white/5 bg-opacity-90 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Here List Of All  Doctors"
            paragraph=""
            center
          />
  
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {doctors.map((doctor) => (
              <div key={doctor._id} className="w-full">
                <SingleBlog doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>
            
        ): (
            <h2>No doctor Yet</h2>
        )
        }
        </>
    )
}

export default AllDoctor;