"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import AnimatedSection from "./animated-section";

const Sagewold = localFont({
  src: [
    {
      path: "../public/fonts/Sagewold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sagewold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <AnimatedSection className="py-6 max-md:py-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="mb-6 md:mb-0 flex gap-4">
              <Image
                src="/img/cherylogo.png"
                alt="ICBCoin Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <p className={Sagewold.className + " text-xl self-center"}>
                © 2021 - 2025 доходная среда <span>ЭКВИ`С</span>.  <br /> Все права
                защищены.
              </p>
            </div>

            {/* Contact and Social */}
            <div className="text-right">
              <div className="flex justify-end space-x-4">
                <div>
                  <Link
                    href="https://icbprofit.com/"
                    className="bg-black rounded-full p-2 inline-block"
                  >
                    <div className="text-2xl/2 font-bold text-white w-[24px] h-[24px] text-center">Э</div>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://m.vk.com/icbcoin"
                    className="bg-black rounded-full p-2 inline-block w-[40px] h-[40px] relative"
                  >
                    <Image
                      src="/svg/vk_white.svg"
                      alt="vkontakte"
                      width={34}
                      height={34}
                      className="absolute top-[3px] left-[3px]"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://rutube.ru/"
                    className="bg-black rounded-full p-2 inline-block w-[40px] h-[40px] relative"
                  >
                    <Image
                      src="/svg/rutube_svg.svg"
                      alt="rutube"
                      width={24}
                      height={24}
                      className="absolute top-[8px] left-[8px]"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://vc.ru/"
                    className="bg-black rounded-full p-2 inline-block"
                  >
                    <div className="text-[9px] font-bold text-white w-[24px] h-[24px] text-center">VC <br />.RU</div>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://dzen.ru/"
                    className="bg-black rounded-full p-2 inline-block w-[40px] h-[40px] relative"
                  >
                    <Image
                      src="/svg/dzen_svg.svg"
                      alt="dzen"
                      width={34}
                      height={34}
                      className="absolute top-[3px] left-[3px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
