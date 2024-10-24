import { useHref } from "react-router-dom";
import "../App";
import { Link } from "lucide-react";

function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hidden lg:block lg:sticky z-50 top-0 bg-blue-900 text-white">
      <nav className="flex lg:flex-row px-1 py-4 lg:p-8">
        <div className="lg:m-auto">
          <ul className="lg:flex lg:flex-row lg:space-x-4 space-y-1 lg:space-y-0 text-xl">
            <li>
              <a
                onClick={() => handleScroll("howWork")}
                className="lg:px-3 lg:py-2 hover:border-b-4 border-white cursor-pointer"
              >
                Como funciona?
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("resources")}
                className="lg:px-3 lg:py-2 hover:border-b-4 border-white cursor-pointer"
              >
                Recursos
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("needHelp")}
                className="lg:px-3 lg:py-2 hover:border-b-4 border-white cursor-pointer"
              >
                Precisa de ajuda?
              </a>
            </li>
            <li>
              <a
                onClick={() => window.location.href = '/Login/Login'}
                className="lg:px-3 lg:py-2 hover:border-b-4 border-white cursor-pointer"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
