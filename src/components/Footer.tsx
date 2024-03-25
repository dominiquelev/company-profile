import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-10 pt-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className=" md:col-span-4">
            <Image
              src="https://drive.google.com/uc?export=view&id=1W-w09TWUJW7m4BVNmXdRJaI2uvj2_Ja-"
              width={60}
              height={60}
              alt="logoWhite"
              className="h-[50px] w-[50px]"
            />
            <p className="w-[292px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
            <div className="mt-[12px] flex gap-5">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
          <div className="text-left md:col-span-3">
            <h1 className="mt-4 text-[32px] font-semibold md:ml-4">
              Email Information
            </h1>
            <p className="text-[16] md:ml-4">
              Sign up for free and be the first <br />
              to get notified on our new updates, <br />
              discounts and special offers.
            </p>

            <form className="mx-auto mb-[121px] mt-[21px] flex md:gap-[16px]">
              <div className="relative">
                <span className="absolute left-6 top-5 -translate-y-1/2 transform text-2xl text-black">
                  &#9993;
                </span>
              </div>
              <Input
                type="email"
                className="mr-[16px] rounded-md border bg-white pl-14 text-black focus:outline-none md:pl-10 "
                placeholder="Your email here..."
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid #ccc",
            margin: "auto",
          }}
        />
        <div className="pb-[56px] pt-[36px] text-center md:flex md:justify-between">
          <div>
            <Link href="" className="hover:underline">
              &copy; {new Date().getFullYear()} PT KOKOPIAN KOPI INDONESIA.ALL
              RIGHTS RESERVED
            </Link>
          </div>
          <div className="mt-3 flex justify-between gap-[60px]">
            <Link href="/" className="hover:underline">
              Privacy & Policy
            </Link>
            <Link href="/" className="hover:underline">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
