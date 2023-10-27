import React from "react";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import Card from "../components/Card";
import Head from "next/head";

const Aboutus = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"
        />
        <title> About </title>{" "}
      </Head>{" "}
      <div className=" bg-black top-[50px] sm:top-[80px] relative  w-full min-h-screen text-white py-16 px-4 sm:px-16 ">
        <div className="flex flex-col  space-y-10   ">
          <h1 className="text-[30px] md:text-[40px] border-b-2 text-[#006a91] bold">
            {" "}
            ABOUT{" "}
          </h1>{" "}
          <h2 className="text-[25px] md:text-[35px] text-[#00D8FF] font-semibold">
            {" "}
            Who I Am{" "}
          </h2>{" "}
          <h3 className="text-[15px] md:text-[22px] font-thin">
            An Electronics and Communication graduate with a passion for web
            development, I 'm currently thriving as a Software Developer
            Trainee.My expertise spans a wide array of web development
            technologies, including HTML, Tailwind CSS, JavaScript, ReactJS,
            ExpressJs, MongoDb and responsive web design.With a drive to create
            seamless user experiences, I ' m eager to contribute my skills and
            innovative mindset to the ever - evolving world of software
            development.Let 's connect and explore the possibilities together!{" "}
          </h3>{" "}
          <h2 className="text-[25px] md:text-[35px] text-[#00D8FF] font-semibold">
            {" "}
            Skills{" "}
          </h2>{" "}
          <div className="grid  grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 w-full mb-5">
            <Card>
              {" "}
              <SiHtml5 className="mt-2 " color="#eb8740" size={40} />{" "}
              <p> HTML </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiCss3 className="mt-2 " color="#004CE8" size={40} />{" "}
              <p> CSS </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiJavascript className="mt-2 " color="#ffd600" size={40} />{" "}
              <p> Javascript </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiTailwindcss className="mt-2 " color="#06b6d4" size={40} />{" "}
              <p> Tailwind </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiReact className="mt-2 " color="#61dbfb" size={40} />{" "}
              <p> React </p>{" "}
            </Card>{" "}
            {/* <Card>
                                                                                                                                                  {" "}
                                                                                                                                                  <SiBootstrap className="mt-2 " color="#7912f8" size={40} />{" "}
                                                                                                                                                  <p> Bootstrap </p>{" "}
                                                                                                                                                </Card>{" "} */}{" "}
            <Card>
              {" "}
              <SiNodedotjs className="mt-2 " color="#00cc00" size={40} />{" "}
              <p> Node Js </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiMongodb className="mt-2 " color="#4dff4d" size={40} />{" "}
              <p> MongoDb </p>{" "}
            </Card>{" "}
            <Card>
              {" "}
              <SiExpress className="mt-2 " color="#7912f8" size={40} />{" "}
              <p> ExpressJs </p>{" "}
            </Card>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Aboutus;
