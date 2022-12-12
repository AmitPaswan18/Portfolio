import { FaLinkedinIn, FaGithub, FaWhatsapp, FaWpforms } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import Buttonrounded from "../components/Buttonrounded";
import Head from "next/head";
const Home = () => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"/>
      <title>Home</title>
    </Head>
        <div className="w-full relative  h-screen ">
        <video
          className="object-cover brightness-[30%]  h-screen w-full"
          autoPlay={true}
          muted={true}
          loop={true}
          src="https://res.cloudinary.com/dbwc39val/video/upload/v1670660903/myportfolio/mixkit-digital-animation-of-screens-4192-medium_sdjprq.mp4"
        />
        <div className="absolute p-4 w-full space-y-5 h-screen text-center top-0 text-white flex flex-col items-center justify-center">
          <p className="text-[20px]">LET'S BUILD SOMETHING TOGETHER </p>
          <h1 className="md:text-[50px] text-[30px] font-bold">
            Hi, I'm <span className="text-[#00D8FF]">Aditya</span>
          </h1>
          <h1 className="md:text-[50px] text-[30px] text-[#00D8FF] font-bold">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
                strings: [
                  "A Front-End Web Developer",
                  "Ambitious person.",
                  "Able to make responsive Designs.",
                  "Open to Learning New Technologies.",
                ],
              }}
            />
          </h1>
          <p className="text-[20px]">
            I’m focused on building responsive front-end web applications
          </p>
          <div className="flex space-x-8 flex-row">
            <Buttonrounded link={'https://www.linkedin.com/in/aditya-kaushik-9a836a186/'} title={'Linkedin'}>
              <FaLinkedinIn color="white" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://github.com/adityakshk499'} title={'Github'}>
              <FaGithub color="#433f40" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link'} title={"Resume"}>
              <FaWpforms color="black" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://api.whatsapp.com/send?phone=919897545121'} title={'Whatsapp'}> 
              <FaWhatsapp  color="#13eb1e" size={30} />
            </Buttonrounded>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home