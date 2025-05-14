import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  CitySelector,
  DateSelector,
  PassengerSelector,
  TripTypeSelector,
} from "./SearchFormComponents";

// Интерфейс для данных формы поиска
interface SearchFormData {
  fromCity: string;
  toCity: string;
  tripType: "roundTrip" | "oneWay";
  departureDate?: Date;
  returnDate?: Date;
  passengers: string;
}

const SearchForm = () => {
  // Используем единый объект состояния для данных формы
  const [formData, setFormData] = useState<SearchFormData>({
    fromCity: "",
    toCity: "",
    tripType: "roundTrip",
    departureDate: addDays(new Date(), 7),
    returnDate: addDays(new Date(), 14),
    passengers: "1",
  });

  // Обработчик изменения одного поля формы
  const handleFormChange = <K extends keyof SearchFormData>(
    field: K,
    value: SearchFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", formData);
    // Здесь будет логика поиска или редирект на страницу результатов
  };

  // Обработчик обмена городами
  const handleSwapCities = () => {
    setFormData((prev) => ({
      ...prev,
      fromCity: prev.toCity,
      toCity: prev.fromCity,
    }));
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
              {/* Селектор типа поездки */}
              <TripTypeSelector
                value={formData.tripType}
                onChange={(value) => handleFormChange("tripType", value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {/* Селектор городов */}
                <div className="relative lg:col-span-3 grid grid-cols-2 gap-2">
                  <CitySelector
                    fromCity={formData.fromCity}
                    toCity={formData.toCity}
                    onFromCityChange={(value) =>
                      handleFormChange("fromCity", value)
                    }
                    onToCityChange={(value) =>
                      handleFormChange("toCity", value)
                    }
                    onSwapCities={handleSwapCities}
                  />
                </div>

                {/* Селектор дат */}
                <div className="lg:col-span-2">
                  <DateSelector
                    tripType={formData.tripType}
                    departureDate={formData.departureDate}
                    returnDate={formData.returnDate}
                    onDepartureDateChange={(date) =>
                      handleFormChange("departureDate", date)
                    }
                    onReturnDateChange={(date) =>
                      handleFormChange("returnDate", date)
                    }
                  />
                </div>

                {/* Селектор пассажиров */}
                <div className="lg:col-span-1">
                  <PassengerSelector
                    value={formData.passengers}
                    onChange={(value) => handleFormChange("passengers", value)}
                  />
                </div>

                {/* Кнопка поиска */}
                <div className="lg:col-span-1">
                  <Label className="opacity-0 block">Поиск</Label>
                  <Button
                    type="submit"
                    className="w-full mt-1 bg-blue-500 hover:bg-blue-600"
                  >
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
