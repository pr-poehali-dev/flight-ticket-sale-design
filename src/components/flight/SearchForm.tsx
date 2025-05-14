import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import {
  TripType,
  TripTypeSelector,
  CitySelector,
  DateSelector,
  PassengerSelector,
  SearchButton,
} from "./SearchFormComponents";
import { addDays } from "date-fns";

/**
 * Компонент формы поиска авиабилетов
 * Позволяет выбрать тип поездки, города, даты и количество пассажиров
 */
const SearchForm = () => {
  // Состояния формы
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [tripType, setTripType] = useState<TripType>("roundTrip");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    addDays(new Date(), 7),
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    addDays(new Date(), 14),
  );
  const [passengers, setPassengers] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация запроса к API
    setTimeout(() => {
      console.log({
        fromCity,
        toCity,
        tripType,
        departureDate,
        returnDate,
        passengers,
      });
      setIsSubmitting(false);
      // В реальном проекте здесь будет логика поиска или редирект на страницу результатов
    }, 1000);
  };

  // Функция для смены городов местами
  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <Tabs defaultValue="avia" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger
            value="avia"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
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
              {/* Выбор типа поездки */}
              <TripTypeSelector
                value={tripType}
                onChange={setTripType}
                className="mb-4"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {/* Выбор городов */}
                <div className="lg:col-span-3">
                  <CitySelector
                    fromCity={fromCity}
                    toCity={toCity}
                    onFromCityChange={setFromCity}
                    onToCityChange={setToCity}
                    onSwapCities={handleSwapCities}
                  />
                </div>

                {/* Выбор дат */}
                <div className="lg:col-span-2">
                  <DateSelector
                    tripType={tripType}
                    departureDate={departureDate}
                    returnDate={returnDate}
                    onDepartureDateChange={setDepartureDate}
                    onReturnDateChange={setReturnDate}
                  />
                </div>

                {/* Выбор пассажиров */}
                <div className="lg:col-span-1">
                  <PassengerSelector
                    value={passengers}
                    onChange={setPassengers}
                  />
                </div>

                {/* Кнопка поиска */}
                <SearchButton
                  className="lg:col-span-1"
                  isLoading={isSubmitting}
                />
              </div>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
