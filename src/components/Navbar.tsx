"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { width } = useDeviceSize();

  return (
    <nav>
      <div className="container fixed left-0 right-0 top-0  z-10 mx-auto w-full justify-between px-10 py-[24px] shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-row-reverse items-center gap-20 md:flex-row md:gap-4">
            <div className=" ">
              <Image
                src="https://drive.google.com/uc?export=view&id=1W-w09TWUJW7m4BVNmXdRJaI2uvj2_Ja-"
                width={60}
                height={60}
                alt="logoWhite"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div>
              {width <= 432 ? (
                <Button variant="ghost" onClick={() => alert("Search clicked")}>
                  <Search size={24} />
                </Button>
              ) : (
                <input
                  type="search"
                  placeholder="search"
                  className=" rounded-full text-black md:h-10 md:w-auto"
                />
              )}
            </div>
          </div>
          <div className="hidden px-[126px] md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <Button
                variant="ghost"
                size={"lg"}
                onClick={() => router.push("/")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                size={"lg"}
                onClick={() => router.push("/aboutUs")}
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                size={"lg"}
                onClick={() => router.push("/products")}
              >
                Products
              </Button>
              <Button
                variant="ghost"
                size={"lg"}
                onClick={() => router.push("/teams")}
              >
                Teams
              </Button>
            </div>
          </div>
          <div className="block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/aboutUs")}>
                  About Us
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/products")}>
                  Products
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/teams")}>
                  Teams
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
