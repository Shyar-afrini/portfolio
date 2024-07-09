import SocialIcon from "@/components/SocialIcon";
import facebook from "@/public/assets/facebook.svg";
import github from "@/public/assets/github.svg";
import instagram from "@/public/assets/instagram.svg";
import linkedin from "@/public/assets/linkedin.svg";
import RectFade from "@/public/assets/rect-fade-black.svg";
import whatsapp from "@/public/assets/whatsapp.svg";
import Image from "next/image";
import Sine from "@/public/assets/sine.svg";

const ContactsContainer = () => {
  return (
    <section id="contacts" className="w-screen h-full bg-accent">
      <Image src={RectFade} alt="rect-fade" />
      <div className="w-full h-full px-container pb-32">
        <h1 className="title py-12">
          contacts
        </h1>
        <div className="w-full h-1/2 flex flex-col gap-4 items-center justify-center">
          <button className="bg-secondaryBackground w-full lg:w-1/2 max-w-lg h-16 rounded-corner relative">
            <a
              href="mailto:shyarafrin2@gmail.com"
              className="absolute bottom-3 left-1/2 active:bottom-0 active:w-full -translate-x-1/2 rounded-corner w-[96%] h-full bg-accent border-[3px] border-secondaryBackground text-secondaryBackground text-3xl font-semibold flex justify-center items-center transition-all duration-300 ease-in-out"
            >
              email me
            </a>
          </button>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <SocialIcon image={github} link="https://github.com/Shyar-afrini" />
            <SocialIcon
              image={whatsapp}
              link="https://api.whatsapp.com/send?phone=9647518202481"
            />
            <SocialIcon
              image={instagram}
              link="https://www.instagram.com/shyar_afrini/"
            />
            <SocialIcon
              image={linkedin}
              link="https://www.linkedin.com/in/shiyar-abdalhanan-997750221"
            />
            <SocialIcon
              image={facebook}
              link="https://www.facebook.com/profile.php?id=100077558087838"
            />
          </div>
        </div>
      </div>
      <Image src={Sine} alt="sine" className="rotate-180" />
    </section>
  );
};

export default ContactsContainer;
