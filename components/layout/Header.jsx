import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Search from "../ui/Search";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setisSearchModal] = useState(false);
  const [isHamburgerMenu, setisHamburgerMenu] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-primary"
      }`}
    >
      <div className="container flex justify-between mx-auto items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:bg-transparent bg-primary sm:flex hidden
        ${isHamburgerMenu === true && "!grid place-content-center"}`}
        >
          <ul className="flex font-navfont gap-6 sm:flex-row flex-col items-center">
            <li className="hover:text-secondary sm:text-xl text-5xl">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/menu">SPEISEKARTE</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/reservation">RESERVATION</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <button onClick={() => setisSearchModal(true)}>
            <FaSearch className="hover:text-secondary transition-all" />
          </button>
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-secondary transition-all" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="hover:text-secondary transition-all" />
          </Link>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary hover:text-secondary transition-all">
              BESTELLEN JETZT
            </button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setisHamburgerMenu(true)}
          >
            <MdMenu className="text-xl hover:text-secondary transition-all" />
          </button>
          {isHamburgerMenu && (
            <button
              onClick={() => setisHamburgerMenu(false)}
              className="absolute z-50 top-5 right-5"
            >
              <TfiClose size={50} className="hover:text-third transition-all" />
            </button>
          )}
        </div>
      </div>
      {isSearchModal && <Search setisSearchModal={setisSearchModal} />}
    </div>
  );
};

export default Header;
