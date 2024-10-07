import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            
          <h1 className="text-4xl">Web Development</h1>
<p className="text-lg leading-relaxed text-gray-700">
  I specialize in web development using technologies like HTML, CSS, JavaScript, and frameworks 
  such as React.js and ASP.NET Core. My experience includes building responsive frontends and 
  scalable backends for applications like the Atoms Unified Management Platform and the Online 
  Examination System. I have hands-on experience with MySQL and am skilled in delivering secure 
  and efficient web solutions.
</p>
<button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
  Check
</button>
</div>
<div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
<h1 className="text-4xl">Backend Development</h1>
<p className="text-lg leading-relaxed text-gray-700">
  I have experience in backend development, working with technologies such as Java, C#, and 
  frameworks like Spring Boot and ASP.NET Core. I have built scalable backend systems for platforms 
  like the Atoms Unified Management Platform and the Online Examination System. My expertise includes 
  working with MySQL databases and ensuring the security and efficiency of server-side applications.
</p>

            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
