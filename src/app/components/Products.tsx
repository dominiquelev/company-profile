import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Products: React.FC = () => {
  return (
    <section className="container mx-auto mb-20 px-10">
      <div className="flex flex-col pt-8 text-center">
        <h1 className=" mb-5 font-sans text-[40px] font-bold text-white md:text-left md:text-[56px]">
          Products
        </h1>
      </div>

      <div className="flex flex-col justify-between gap-[104px] md:flex-row">
        <div>
          <Card className="overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src="https://drive.google.com/uc?export=view&id=1H6zMSvc3m0VslcyfZc0MiN47sAUayBT"
                alt="coffee beans"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg shadow-md"
                
              />
            </div>
            <CardHeader>
              <CardTitle className=" mb-6 text-left font-sans text-xl font-bold text-white md:text-2xl">
                Roasted Coffee Beans
              </CardTitle>
              <CardDescription>
                Indulge in perfection with our carefully sourced and expertly
                roasted coffee beans.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src="https://drive.google.com/uc?export=view&id=1I8yN4_7FyK18Iey9MrRzDb9Lh-So39gV"
                alt="coffee beans"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg shadow-md"
                
              />
            </div>
            <CardHeader>
              <CardTitle className="mb-6 text-left font-sans text-xl font-bold text-white md:text-2xl">
                Coffee Products
              </CardTitle>
              <CardDescription>
                Indulge in perfection with our carefully sourced and expertly
                roasted coffee beans.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src="https://drive.google.com/uc?export=view&id=1fZVh1XEuvjJ4YbANnrq0KF2bH6o-e7kF
              "
                alt="coffee beans"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg shadow-md"
                
              />
            </div>
            <CardHeader>
              <CardTitle className="mb-6 text-left font-sans text-xl font-bold text-white md:text-2xl">
                Greenbeans Coffee
              </CardTitle>
              <CardDescription>
                Indulge in perfection with our carefully sourced and expertly
                roasted coffee beans.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Button variant="ghost" size={"lg"}>
          <Link href="/products">Other Products...</Link>
        </Button>
      </div>
    </section>
  );
};

export default Products;
