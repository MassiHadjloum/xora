'use client'
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll to={title}
    onClick={() => setIsOpen(false)}
      offset={-100}
      spy
      smooth
      activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1
    max-lg:h5 max-lg:my-4">
      {title}
    </LinkScroll>
  )

  return (
    <header className={cn("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
      hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",)} >
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link href="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/images/xora.svg" width={115} height={55} alt="xora logo" />
        </Link>
        <div className={cn(`w-full max-lg:fixed max-lg:w-full max-lg:bg-s2 max-lg:top-0 max-lg:left-0 max-lg:opacity-0`,
          isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none'
        )}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen
        max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:my-auto max-lg:z-2">
              <ul className="max-lg:block flex max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={"features"} />
                  <div className="dot" />
                  <NavLink title={"pricing"} />

                </li>
                <li className="nav-logo">
                  <LinkScroll to="hero" offset={-250} spy smooth className={cn('max-lg:hidden transition-transform duration-500 cursor-pointer')}>
                    <Image src="/images/xora.svg" width={160} height={55} alt="logo" />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title={"faq"} />
                  <div className="dot" />
                  <NavLink title={"download"} />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden bloc absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90  ">
              <Image src={'/images/bg-outlines.svg'} width={960} height={380} alt="outline"
                className="z-2 relative" />
              <Image src={'/images/bg-outlines-fill.png'} width={960} height={380} alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5" />
            </div>
          </div>
        </div>
        <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}>
          <Image src={`/images/${isOpen ? 'close' : 'magic'}.svg`} alt="menu"
            width={30} height={30} className="size-1/2 object-contain" />
        </button>
      </div>
    </header >
  );
};

export default Header;
