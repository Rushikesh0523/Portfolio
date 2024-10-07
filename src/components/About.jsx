import { useState } from "react";
import bannerImage from "../assets/Patil.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & .Net Developer",
    desc1: `As a fresher Java and .Net Developer, I have foundational knowledge in Java, C#, and 
frameworks like Spring Boot and ASP.NET Core. I am eager to apply my skills in building 
scalable, secure backend systems and responsive web applications.`,
desc2: `I am continuously learning and excited to contribute to real-world projects, 
leveraging my knowledge in Java, .Net, and MySQL. I aim to grow as a full-stack developer 
while delivering efficient, secure, and reliable software solutions.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="Rushikesh Pradip Patil"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
