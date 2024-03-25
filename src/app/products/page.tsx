import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
const Products: React.FC = () => {
  return (
    <section className="container mx-auto  px-10">
      <div className=" pt-8 text-center">
        <h1 className="md:flex-center my-16 text-center font-sans text-[40px] font-bold">
          Products
        </h1>
        <p
          className="mx-auto text-xl font-bold md:w-[730px]
        "
        >
          "Discover our innovative solutions designed to elevate your coffee
          experience. From premium beans to cutting-edge brewing technology,
          we've got everything you need to enjoy the perfect cup every time."
        </p>
      </div>

      <h1 className=" mb-[23px] justify-between pt-[132px] text-[40px] font-bold">
        Roasted Beans
      </h1>
      <div>
        <div className="flex flex-col justify-between gap-[104px] pb-[132px] md:flex-row">
          <div>
            <Card className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1H6zMSvc3m0VslcyfZc0MiN47sZAUayBT"
                  alt="coffee beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                 
                />
              </div>
              <CardHeader>
                <CardTitle className=" mb-6 text-xl font-bold">
                  Andante <br />
                  100% Robusta Espresso Blend Roasted Beans.
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
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1H6zMSvc3m0VslcyfZc0MiN47sZAUayBT"
                  alt="coffee beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Allegro <br />
                  50% of Arabica and Robusta Blend Roasted Beans.
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
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1H6zMSvc3m0VslcyfZc0MiN47sZAUayBT"
                  alt="coffee beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Prestissimo <br />
                  100% Arabica Espresso Blend Roasted Beans.
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
        <h1 className=" mb-6 justify-between text-[40px] font-bold">
          Coffee Products
        </h1>
        <div className="flex flex-col justify-between gap-[104px] pb-[132px] md:flex-row">
          <div>
            <Card className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1I8yN4_7FyK18Iey9MrRzDb9Lh-So39gV"
                  alt="manual brew"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Manual Brew Coffee
                </CardTitle>
                <CardDescription>
                  Furthermore, even though espresso-based beverages remain
                  popular among specialty coffee consumers, the initial outlay
                  of an espresso machine is a risky investment. In comparison,
                  the affordable market entry that manual brewing methods offer
                  has allowed Indonesia’s specialty coffee culture to develop
                  and grow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden">
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1prBfqByvdUPZTk7q9CdlVsudfY2FAVeP"
                  alt="espresso based"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Epsresso Based
                </CardTitle>
                <CardDescription>
                  The espresso menu at a specialty cafe can sometimes be
                  confusing. Coffee drinks are simple. Mostly utilizing just two
                  ingredients, coffee and milk, and sometimes involving a
                  sweetener like a flavored syrup. But how can just two
                  ingredients result in nearly a dozen unique beverage
                  creations? That is where the difference in volume, texture,
                  and milk to espresso ratio all come into play.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden">
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1OLjnTzL3BhMOnp-WNlbnxygDsARRc093"
                  alt="coffee beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Cold Brew Coffee
                </CardTitle>
                <CardDescription>
                  Cold brew is simply coffee that has been brewed with cold
                  rather than hot water and usually involves a long steeping
                  process—anywhere between 12-24 hours. In terms of flavor, cold
                  brew is generally characterized as smooth, low-acid, and
                  heavier than its hot brewed counterparts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <h1 className=" mb-6 justify-between  text-[40px] font-bold">
          Greenbeans Coffee
        </h1>
        <div className="flex flex-col justify-between gap-[104px] md:flex-row ">
          <div>
            <Card className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1fZVh1XEuvjJ4YbANnrq0KF2bH6o-e7kF"
                  alt="green beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                 
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Golden Mandheling
                </CardTitle>
                <CardDescription>
                  Golden Mandheling coffee is a type of Arabica coffee that is
                  grown in the Mandheling region of West Sumatra, Indonesia. The
                  name “Golden Mandheling” refers to the specific variety of
                  Arabica coffee cultivated in this region. The Mandheling
                  region is known for its high-quality coffee production and is
                  often regarded as one of the best coffee-growing regions in
                  Indonesia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden">
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1fZVh1XEuvjJ4YbANnrq0KF2bH6o-e7kF"
                  alt="green beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className=" mb-6 text-xl font-bold">
                  Aceh Gayo
                </CardTitle>
                <CardDescription>
                  Regarding premium coffee beans, the Arabica coffee of Aceh
                  Gayo from the Central Aceh Region stands out as one of the
                  finest in the world. These beans are harvested from
                  meticulously maintained plantations, producing a coffee that
                  delights the senses with its exceptional fragrance, flavor,
                  acidity, body, and overall quality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden">
              <div className="relative  h-[200px] w-full">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1fZVh1XEuvjJ4YbANnrq0KF2bH6o-e7kF"
                  alt="green beans"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg shadow-md"
                  
                />
              </div>
              <CardHeader>
                <CardTitle className="mb-6 text-xl font-bold">
                  Sumatra Super Peaberry
                </CardTitle>
                <CardDescription>
                  Indulge in the exceptional taste of Sumatra Super Peaberry
                  Coffee, a rare and highly sought-after variety known for its
                  unique characteristics and outstanding flavor profile. In this
                  article, we will explore the distinct qualities of this
                  coffee, from its rarity and handpicked selection to its
                  fragrance, flavor, and production specifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <h1 className="my-8 text-center text-[40px]">
          what is they said about Ko.Kopian?
        </h1>
      </div>
      <div>
        <Carousel>
          <CarouselContent className="ml-2 mr-2 gap-20 md:ml-1 md:mr-1">
            <CarouselItem className="rounded border bg-white text-black md:basis-1/2 lg:basis-1/3">
              <div className="item center text center p-5 ">
                <p className=" text-sm mb-8">
                  Cozy, can choose between indoor or outdoor seating, drink is
                  okay, maybe quite pricey for bjn standard but still
                  affordable, wifi sometimes lags but fast and reliable enough,
                  good place for meeting, studying or doing some
                  computer-related works
                </p>

                <h3 className="text-center text-2xl text-red-700">
                  Robert.jr
                </h3>
                <p className="text-center text-base text-gray-600">
                  Owner Coffee Shop
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="rounded border bg-white text-black  md:basis-1/2 lg:basis-1/3">
              <div className="item center text center p-5 ">
                <p className="text-sm mb-8">
                  The calm atmosphere with minimal crowds makes this place
                  comfortable for enjoying coffee or chatting with friends.
                </p>

                <h3 className="text-center text-2xl text-red-700">
                  Yuki Akane
                </h3>
                <p className="text-center text-base text-gray-600">
                  customer
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="rounded border bg-white text-black  md:basis-1/2 lg:basis-1/3">
            <div className="item center text center p-5 ">
                <p className="text-sm mb-8">
                  Cafe and coffee place that is suitable for hanging out or
                  doing assignments. Many menu choices. It tastes delicious and
                  the prices are cafe standards in general. Every Saturday night
                  (Sunday night) there is live music too.
                </p>

                <h3 className="text-center text-2xl text-red-700">Albert</h3>
                <p className="text-center text-base text-gray-600">
                  Barista
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="rounded border bg-white text-black  md:basis-1/2 lg:basis-1/3">
            <div className="item center text center p-5 ">
                <p className="text-sm mb-8">
                  Not the cheapest but definitely the best. They have a
                  fantastic range of coffees and the customer service is second
                  to none. My personal favourite is the Columbian Bucaramanga -
                  give it a try!
                </p>

                <h3 className="text-center text-2xl text-red-700">
                  Michael
                </h3>
                <p className="text-center text-base text-gray-600">Barista</p>
              </div>
            </CarouselItem>
            <CarouselItem className="rounded border bg-white text-black  md:basis-1/2 lg:basis-1/3">
            <div className="item center text center p-5 ">
                <p className="text-sm mb-8">
                  You do an excellent job on all levels, packaging, delivery and
                  product. You give the occasional free sample which is rare
                  these days but much appreciated. The hand written card is a
                  wonderful touch and makes the customer feel like an old
                  friend.
                </p>

                <h3 className="text-center text-2xl text-red-700">Rafael</h3>
                <p className="text-center text-base text-gray-600">Barista</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Products;
