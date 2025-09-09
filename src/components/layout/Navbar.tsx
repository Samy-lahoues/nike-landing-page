import { slugify } from "@/lib/utils";
import { burgerMenu } from "@/constants/images";
import { headerLogo } from "@/constants/images";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink}>
              <a
                style={{ textTransform: "capitalize" }}
                href={`#${slugify(navLink)}`}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {navLink}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden xl:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={burgerMenu} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
