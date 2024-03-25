
import Image from "next/image";


const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="relative ">
        <div className=" from 0% absolute inset-0  flex flex-col justify-center bg-opacity-75 bg-gradient-to-tr from-black via-60% to-100% px-14 py-16 md:inset-0 md:px-[100px] md:py-32">
          <h1 className="text-left font-sans text-5xl font-bold text-white md:text-6xl">
            Enter a cozy coffee haven, <br />
            where every cup <br />
            has a story to tell
          </h1>
          <p className="text-left font-sans text-2xl font-medium text-white">
            Indulge in the rich aroma and distinctive flavors that make <br />
            our coffee shop a cherished retreat for all caffeine connoisseurs.
          </p>
        </div>

        <Image
          src="https://drive.google.com/uc?export=view&id=1OlvjRYLFziryfRh_m76TVIm0f-sKbe7X"
          alt="heroSection"
          width="1441"
          height="668"
          className="h-screen w-screen object-cover"
          
        />
      </div>
    </section>
  );
};

export default HeroSection;
