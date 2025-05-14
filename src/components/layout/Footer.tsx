
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Plane" className="h-5 w-5 mr-2 text-blue-400" />
              АвиаПоиск
            </h3>
            <p className="text-gray-400 mb-4">
              Удобный поиск и бронирование авиабилетов по низким ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Telegram" className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Правила и условия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Сервисы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Поиск авиабилетов</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Бронирование отелей</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аренда автомобилей</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Страхование</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Трансферы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <address className="not-italic">
              <p className="flex items-start mb-2">
                <Icon name="MapPin" className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Москва, ул. Авиаторов, 42</span>
              </p>
              <p className="flex items-center mb-2">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="flex items-center mb-2">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:info@aviapoisk.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@aviapoisk.ru
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} АвиаПоиск. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
