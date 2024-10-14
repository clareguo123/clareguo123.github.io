import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo-no-background.svg";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = ["Home", "Resume", "Blog", "Synapse", "Contact"];

  const handleNavigation = (page: string) => {
    setActivePage(page);
    navigate(page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="backdrop-blur fixed top-0 left-0 right-0 w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {pages.map((page) => (
                <Button
                  key={page}
                  variant={activePage === page ? "default" : "ghost"}
                  onClick={() => handleNavigation(page)}
                  className={`px-3 py-1 ${
                    activePage === page
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-100 text-black hover:bg-gray-300"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-4 sm:px-6 lg:px-8">
            {pages.map((page) => (
              <Button
                key={page}
                variant="ghost"
                onClick={() => handleNavigation(page)}
                className={`w-full justify-start ${
                  activePage === page
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;