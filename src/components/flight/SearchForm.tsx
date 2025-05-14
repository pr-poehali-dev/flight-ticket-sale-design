
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { addDays, format } from 'date-fns';
import { ru } from 'date-fns/locale';

const SearchForm = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [tripType, setTripType] = useState('roundTrip');
  const [departureDate, setDepartureDate] = useState<Date | undefined>(addDays(new Date(), 7));
  const [returnDate, setReturnDate] = useState<Date | undefined>(addDays(new Date(), 14));
  const [passengers, setPassengers] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fromCity,
      toCity,
      tripType,
      departureDate,
      returnDate,
      passengers
    });
    // В реальном проекте здесь будет логика поиска или редирект на страницу результатов
  };

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <Tabs defaultValue="avia" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="avia" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
            <Icon name="Plane" className="w-4 h-4 mr-2" />
            Авиабилеты
          </TabsTrigger>
          <TabsTrigger value="hotel" disabled className="opacity-60">
            <Icon name="Building" className="w-4 h-4 mr-2" />
            Отели
          </TabsTrigger>
          <TabsTrigger value="package" disabled className="opacity-60">
            <Icon name="PackageOpen" className="w-4 h-4 mr-2" />
            Пакеты
          </TabsTrigger>
        </TabsList>

        <TabsContent value="avia" className="mt-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="flex space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="roundTrip"
                    name="tripType"
                    value="roundTrip"
                    checked={tripType === 'roundTrip'}
                    onChange={() => setTripType('roundTrip')}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <Label htmlFor="roundTrip">Туда и обратно</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="oneWay"
                    name="tripType"
                    value="oneWay"
                    checked={tripType === 'oneWay'}
                    onChange={() => setTripType('oneWay')}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <Label htmlFor="oneWay">В одну сторону</Label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                <div className="relative lg:col-span-3 grid grid-cols-2 gap-2">
                  <div className="relative">
                    <Label htmlFor="fromCity">Откуда</Label>
                    <Input
                      id="fromCity"
                      placeholder="Город отправления"
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="relative">
                    <Label htmlFor="toCity">Куда</Label>
                    <Input
                      id="toCity"
                      placeholder="Город прибытия"
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSwapCities}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                    aria-label="Поменять города местами"
                  >
                    <Icon name="ArrowLeftRight" className="h-4 w-4 text-blue-500" />
                  </button>
                </div>

                <div className="lg:col-span-2">
                  <Label htmlFor="departureDate">Даты</Label>
                  <div className="flex gap-2 mt-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="Calendar" className="mr-2 h-4 w-4" />
                          {departureDate ? (
                            format(departureDate, 'dd MMM', { locale: ru })
                          ) : (
                            <span>Выберите дату</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={departureDate}
                          onSelect={setDepartureDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    {tripType === 'roundTrip' && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Icon name="Calendar" className="mr-2 h-4 w-4" />
                            {returnDate ? (
                              format(returnDate, 'dd MMM', { locale: ru })
                            ) : (
                              <span>Обратно</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Label htmlFor="passengers">Пассажиры</Label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Пассажиры" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 пассажир</SelectItem>
                      <SelectItem value="2">2 пассажира</SelectItem>
                      <SelectItem value="3">3 пассажира</SelectItem>
                      <SelectItem value="4">4 пассажира</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="lg:col-span-1">
                  <Label className="opacity-0 block">Поиск</Label>
                  <Button type="submit" className="w-full mt-1 bg-blue-500 hover:bg-blue-600">
                    <Icon name="Search" className="mr-2 h-4 w-4" />
                    Найти
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
