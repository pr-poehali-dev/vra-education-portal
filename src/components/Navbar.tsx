import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-vra-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Box className="h-8 w-8 text-vra-primary" />
              <span className="font-bold text-xl gradient-text">VRA</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-vra-primary transition duration-300">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-vra-primary transition duration-300">
              О нас
            </Link>
            <Link to="/programs" className="text-foreground hover:text-vra-primary transition duration-300">
              Программы
            </Link>
            <Link to="/contact" className="text-foreground hover:text-vra-primary transition duration-300">
              Контакты
            </Link>
            <div className="ml-4 flex space-x-2">
              <Button asChild variant="outline" className="border-vra-primary hover:bg-vra-primary/10">
                <Link to="/login">Вход</Link>
              </Button>
              <Button asChild className="bg-vra-primary hover:bg-vra-secondary">
                <Link to="/register">Регистрация</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-vra-primary hover:text-vra-secondary focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-vra-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-vra-primary/10 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-vra-primary/10 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/programs" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-vra-primary/10 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Программы
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-vra-primary/10 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex space-x-2 pt-2">
              <Button asChild variant="outline" className="border-vra-primary w-1/2">
                <Link to="/login" onClick={() => setIsOpen(false)}>Вход</Link>
              </Button>
              <Button asChild className="bg-vra-primary hover:bg-vra-secondary w-1/2">
                <Link to="/register" onClick={() => setIsOpen(false)}>Регистрация</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
