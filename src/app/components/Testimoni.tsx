import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimoni: React.FC = () => {
  return (
    <section className="container mx-auto px-20 pb-[46px] pt-3">
      <div>
        <h1 className="mb-4 text-center text-[40px]">
          Testimoni
        </h1>
      </div>
      <div>
        <Carousel>
          <CarouselContent className="ml-2 mr-2 gap-20 md:ml-1 md:mr-1">
            <CarouselItem className="rounded border bg-white text-black md:basis-1/2 lg:basis-1/3">
              <div className="item center text center p-5 ">
                <p className="text-sm mb-8">
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
                <p className=" text-sm mb-8">
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
              <div className="p-5">
                <p className="text-14 mb-8">
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
                <p className="text-14 mb-8">
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

export default Testimoni;
