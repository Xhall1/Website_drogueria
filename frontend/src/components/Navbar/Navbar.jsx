import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom"; 

const MenuLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Productos",
    link: "/#shop",
  },
  {
    id: 3,
    name: "Sobre nosotros",
    link: "/about-us",
  },
  {
    id: 4,
    name: "Fanpage",
    link: "https://www.facebook.com/people/Droguer%C3%ADa-Multiservicios/61560342563681/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/people/Droguer%C3%ADa-Multiservicios/61560342563681/",
  },
  {
    id: 2,
    name: "Whatsapp",
    link: "/#",
  },

];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-primary font-semibold tracking-widest text-xl uppercase sm:text-20rem">
              Drogueria Multiservicios
            </Link>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    {data.link.startsWith("http") ? (
                      <a
                        href={data.link}
                        className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.name}
                      </a>
                    ) : (
                      <Link
                        to={data.link}
                        className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      >
                        {data.name}
                      </Link>
                    )}
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <span className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Redes Sociales
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order button section */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
