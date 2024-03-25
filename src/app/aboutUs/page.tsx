import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container md:mx-auto md:px-10">
      <h1 className=" md:flex-center pt-24 text-center font-sans text-[40px] font-bold">
        About Us
      </h1>
      <div>
        <div className=" my-14 flex flex-col items-center">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ChO4zzdhkE4pSd4worM6chV2SgE1PVDM"
            alt="photo"
            width={577}
            height={377}
            loading="lazy"
          />
        </div>
        <div className=" text-justify">
          <h2 className=" mb-2 text-center text-3xl font-bold">Ko.kopian</h2>
          <p className="p-1 text-xl">
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
        </div>
      </div>
      <p className="text-justify text-xl">
        As a team of coffee aficionados, we take pride in delivering not just a
        beverage, but an artful creation that embodies our dedication to
        quality. Whether you're a seasoned coffee connoisseur or a casual
        sipper, Ko.Kopian promises an immersive journey into the world of
        coffee.
        <br />
        <br />
        Join us at Ko.Kopian, where every pour tells a tale of passion, flavor,
        and the joy found in a cup well-crafted. Cheers to coffee moments that
        linger and memories that brew!"
      </p>
      <div>
        <h1 className=" flex-center my-8 text-center font-sans text-[52px] font-bold">
          The Founders
        </h1>
        <div className="flex flex-col gap-10 md:flex-row md:justify-center">
          <Card className="overflow-hidden border-none bg-transparent">
            <div className="relative h-[460px] w-[300px]">
              <Image
                src="https://drive.google.com/uc?export=view&id=1BOX2E8qLhc-Hge6W-FV89LSCAioJ67Qw"
                alt="founder1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-center font-[Satoshi] text-[20px] font-bold text-white md:text-[24px]">
                Andrew S.Rabeta
              </CardTitle>
              <CardContent className="text-center">Co-Founder</CardContent>
              <CardDescription>
                Through countless trials & errors, Andrew believed that a great
                brand requires great people and a great message.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden border-none bg-transparent">
            <div className="relative h-[460px] w-[300px]">
              <Image
                src="https://drive.google.com/uc?export=view&id=1zLkTj9uMDhUgfDQHxLKFHy1Dg2_BSlvN"
                alt="coffee beans"
                layout="fill"
                objectFit="cover"
                className=" rounded-md"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-center font-[Satoshi] text-[20px] font-bold text-white md:text-[24px]">
                Dominique Liza.E
              </CardTitle>
              <CardContent className="text-center">Co-Founder</CardContent>
              <CardDescription>
                Along with adaptability and strength to learn, Dominique agrees
                that a sharp mentality from the team will drive better output
                quality.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <h1 className=" flex-center my-8 text-center font-sans text-[52px] font-bold">
        History
      </h1>
      <div className=" mb-14">
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className=" my-5 text-center text-[40px] md:text-left">
              2021
            </h2>
            <p className="text-balance text-justify text-2xl">
              Ko.Kopian was founded by a group of friends with a shared passion
              for coffee. They opened their first location in a cozy corner of
              the city, offering a curated selection of specialty beans and
              expertly brewed beverages.
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div></div>
          <div className="text-center md:px-[32px] md:text-right">
            <h2 className=" my-5 text-[40px]">2022</h2>
            <p className="text-justify  text-2xl md:text-balance">
              Ko.Kopian was founded by a group of friends with a shared passion
              for coffee. They opened their first location in a cozy corner of
              the city, offering a curated selection of specialty beans and
              expertly brewed beverages.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="my-5 text-center text-[40px] md:text-left">
              2023
            </h2>
            <p className="text-balance text-justify text-2xl">
              Ko.Kopian was founded by a group of friends with a shared passion
              for coffee. They opened their first location in a cozy corner of
              the city, offering a curated selection of specialty beans and
              expertly brewed beverages.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <h1 className=" md:flex-center mb-14 pt-8 text-center font-sans text-[40px] font-bold">
        Culture
      </h1>
      <div className=" pb-[274px]">
        <div className="text-justify">
          <p className="p-1 text-xl">
            At Ko.Kopian, our culture is steeped in a deep appreciation for
            craftsmanship, community, and sustainability. We believe in
            fostering a supportive and inclusive environment where every team
            member is valued, respected, and empowered to thrive. Collaboration
            is at the heart of our culture, as we believe that great ideas
            emerge from diverse perspectives working together towards a common
            goal. Integrity and transparency are core values that guide our
            interactions with customers, suppliers, and each other, ensuring
            honesty and trustworthiness in all that we do.
            <br />
            <br />
            Central to our ethos is our commitment to sustainability. From
            ethically sourcing our coffee beans to implementing eco-friendly
            practices in our operations, we strive to minimize our environmental
            footprint and contribute positively to the planet. We believe in
            giving back to the communities that support us, whether through
            charitable initiatives, volunteer work, or partnerships with local
            organizations.
          </p>
        </div>
        <p className="p-1 text-justify text-xl">
          As a team of coffee aficionados, we take pride in delivering not just
          a beverage, but an artful creation that embodies our dedication to
          quality. Whether you're a seasoned coffee connoisseur or a casual
          sipper, Ko.Kopian promises an immersive journey into the world of
          coffee.
          <br />
          <br />
          At Ko.Kopian, passion fuels our endeavors, excellence is our standard,
          and innovation drives us forward. We celebrate individuality and
          creativity, encouraging our team members to explore their interests
          and pursue their passions both within and outside of the coffee world.
          Together, we share a dedication to delivering memorable experiences,
          one cup at a time, while staying true to our values and making a
          positive impact on the world around us.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
