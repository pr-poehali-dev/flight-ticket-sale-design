
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Icon name="Plane" className="h-6 w-6 mr-2 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              АвиаПоиск
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
            Главная
          </Link>
          <Link to="/results" className="text-gray-700 hover:text-blue-500 transition-colors">
            Спецпредложения
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500 transition-colors">
            Помощь
          </Link>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Icon name="Search" className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="hidden lg:inline-flex">
              Войти
            </Button>
            <Button className="hidden lg:inline-flex">
              Регистрация
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="mr-2"
          >
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg">Главная</Link>
                <Link to="/results" className="text-lg">Спецпредложения</Link>
                <Link to="/profile" className="text-lg">Помощь</Link>
                <hr className="my-2" />
                <Button variant="outline" className="w-full">Войти</Button>
                <Button className="w-full">Регистрация</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="border-t border-gray-100 py-3 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex gap-2">
              <Input 
                placeholder="Поиск рейсов, направлений..." 
                className="w-full" 
              />
              <Button>
                <Icon name="Search" className="h-4 w-4 mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
