import "../App.css";

function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="md:sticky z-50 top-0">
      <nav className="flex md:flex-row px-1 py-4 md:p-8">
        <div className="md:m-auto">
          <ul className="md:flex md:flex-row md:space-x-4 space-y-1 md:space-y-0 text-xl">
            <li>
              <a
                onClick={() => handleScroll("howWork")}
                className="md:px-3 md:py-2 hover:border-b-4 border-black cursor-pointer"
              >
                Como funciona?
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("resources")}
                className="md:px-3 md:py-2 hover:border-b-4 border-black cursor-pointer"
              >
                Recursos
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("needHelp")}
                className="md:px-3 md:py-2 hover:border-b-4 border-black cursor-pointer"
              >
                Precisa de ajuda?
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("needHelp")}
                className="md:px-3 md:py-2 hover:border-b-4 border-black cursor-pointer"
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
