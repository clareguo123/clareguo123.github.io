import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();
  const pages = ["Home", "Resume", "Blog", "Synapse", "Contact"];

  const handleNavigation = (page: string) => {
    setActivePage(page);
    switch (page) {
      case "Home":
        navigate("/");
        break;
      case "Resume":
        navigate("/resume");
        break;
      case "Blog":
        navigate("/blog");
        break;
      case "Synapse":
        navigate("/synapse");
        break;
      case "Contact":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 fixed top-0 left-0 right-0">
      <div className="container flex justify-end items-center h-14">
        {pages.map((page) => (
          <Button
            key={page}
            variant={activePage === page ? "default" : "ghost"}
            onClick={() => handleNavigation(page)}
            className="ml-2"
          >
            {page}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;