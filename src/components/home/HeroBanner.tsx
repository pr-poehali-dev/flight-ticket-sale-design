
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/20"></div>
        <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-white/10"></div>
        <div className="absolute right-40 bottom-20 h-48 w-48 rounded-full bg-white/15"></div>
      </div>
      
      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Путешествуйте с комфортом и экономией
          </h1>
          <p className="text-lg md:text-xl text-blue-50">
            Найдите лучшие предложения на авиабилеты, отели и туры по всему миру
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50"
              size="lg"
            >
              <Icon name="Search" className="mr-2 h-5 w-5" />
              Найти билеты
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              size="lg"
            >
              Спецпредложения
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center">
              <Icon name="Shield" className="mr-2 h-5 w-5 text-blue-200" />
              <span>Безопасная оплата</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2 h-5 w-5 text-blue-200" />
              <span>Поддержка 24/7</span>
            </div>
            <div className="flex items-center">
              <Icon name="Tag" className="mr-2 h-5 w-5 text-blue-200" />
              <span>Лучшие цены</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
