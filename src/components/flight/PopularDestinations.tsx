
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Destination {
  id: number;
  city: string;
  country: string;
  image: string;
  price: number;
  discount?: boolean;
}

const destinations: Destination[] = [
  {
    id: 1,
    city: "Москва",
    country: "Россия",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop",
    price: 5999,
    discount: true
  },
  {
    id: 2,
    city: "Санкт-Петербург",
    country: "Россия",
    image: "https://images.unsplash.com/photo-1556610961-2fecc5927173?w=600&auto=format&fit=crop",
    price: 6499
  },
  {
    id: 3,
    city: "Сочи",
    country: "Россия",
    image: "https://images.unsplash.com/photo-1605277909585-44a26c915402?w=600&auto=format&fit=crop",
    price: 8990
  },
  {
    id: 4,
    city: "Казань",
    country: "Россия",
    image: "https://images.unsplash.com/photo-1600421539016-cc3f0866d2b0?w=600&auto=format&fit=crop",
    price: 7250,
    discount: true
  }
];

const PopularDestinations = () => {
  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Популярные направления</h2>
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center text-sm">
          Смотреть все
          <Icon name="ChevronRight" className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={destination.image} 
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {destination.discount && (
                <Badge className="absolute top-3 right-3 bg-red-500">Скидка</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800">{destination.city}</h3>
                  <p className="text-gray-600 text-sm">{destination.country}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">от</p>
                  <p className="font-bold text-blue-600">{destination.price.toLocaleString()} ₽</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
