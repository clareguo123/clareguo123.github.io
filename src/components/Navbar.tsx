import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import logo from '@/assets/logo-no-background.svg';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = ['Home', 'Resume', 'Blog', 'Synapse', 'Contact'];

  useEffect(() => {
    const currentPage = location.pathname.split('/')[1] || 'Home';
    setActivePage(currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
  }, [location]);

  const handleNavigation = (page: string) => {
    navigate(page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`);
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
                  variant={activePage === page ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigation(page)}
                >
                  {page}
                </Button>
              ))}
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
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
                variant={'ghost'}
                onClick={() => handleNavigation(page)}
                className="w-full justify-start"
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