import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto md:px-10">
      <h1 className=" md:flex-center my-8 text-center font-sans text-[40px] font-bold">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className=" mt-12 md:col-span-5">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ChO4zzdhkE4pSd4worM6chV2SgE1PVDM"
            alt="photo"
            width={577}
            height={577}
            loading="lazy"
          />
        </div>
        <div className="text-justify md:col-span-7 md:justify-end">
          <h2 className=" mb-2 mt-8 text-center text-3xl font-bold md:pl-7 md:text-left">
            Ko.kopian
          </h2>
          <p className="text-[20px] md:pl-7">
            "Welcome to Ko.Kopian, where passion meets the perfect brew. At
            Ko.Kopian, we're more than just a coffee shop we're a haven for
            enthusiasts seeking a genuine coffee experience. Our story begins
            with a commitment to sourcing the finest beans, handcrafting each
            cup with precision, and creating a space where conversations flow as
            smoothly as our coffee.
            <br />
            <br />
            Here at Ko.Kopian, we embrace diversity in every sip, offering a
            range of meticulously curated blends to satisfy every palate. Our
            cozy ambiance and warm hospitality invite you to linger, connect,
            and make memories over a cup of exceptional coffee.
          </p>
          <div className="mt-5 md:pl-7">
            <Button>
              <Link href="/aboutUs">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
