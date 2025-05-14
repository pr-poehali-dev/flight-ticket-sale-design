
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

// Компонент выбора типа поездки (туда-обратно/в одну сторону)
interface TripTypeSelectorProps {
  value: 'roundTrip' | 'oneWay';
  onChange: (value: 'roundTrip' | 'oneWay') => void;
}

export const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="roundTrip"
          name="tripType"
          value="roundTrip"
          checked={value === 'roundTrip'}
          onChange={() => onChange('roundTrip')}
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
          checked={value === 'oneWay'}
          onChange={() => onChange('oneWay')}
          className="text-blue-500 focus:ring-blue-500"
        />
        <Label htmlFor="oneWay">В одну сторону</Label>
      </div>
    </div>
  );
};

// Компонент выбора городов
interface CitySelectorProps {
  fromCity: string;
  toCity: string;
  onFromCityChange: (value: string) => void;
  onToCityChange: (value: string) => void;
  onSwapCities: () => void;
}

export const CitySelector: React.FC<CitySelectorProps> = ({
  fromCity,
  toCity,
  onFromCityChange,
  onToCityChange,
  onSwapCities
}) => {
  return (
    <>
      <div className="relative">
        <Label htmlFor="fromCity">Откуда</Label>
        <Input
          id="fromCity"
          placeholder="Город отправления"
          value={fromCity}
          onChange={(e) => onFromCityChange(e.target.value)}
          className="mt-1"
        />
      </div>
      
      <div className="relative">
        <Label htmlFor="toCity">Куда</Label>
        <Input
          id="toCity"
          placeholder="Город прибытия"
          value={toCity}
          onChange={(e) => onToCityChange(e.target.value)}
          className="mt-1"
        />
      </div>
      
      <button
        type="button"
        onClick={onSwapCities}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Поменять города местами"
      >
        <Icon name="ArrowLeftRight" className="h-4 w-4 text-blue-500" />
      </button>
    </>
  );
};

// Компонент выбора дат
interface DateSelectorProps {
  tripType: 'roundTrip' | 'oneWay';
  departureDate?: Date;
  returnDate?: Date;
  onDepartureDateChange: (date?: Date) => void;
  onReturnDateChange: (date?: Date) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  tripType,
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange
}) => {
  return (
    <>
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
              onSelect={onDepartureDateChange}
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
                onSelect={onReturnDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      </div>
    </>
  );
};

// Компонент выбора пассажиров
interface PassengerSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const PassengerSelector: React.FC<PassengerSelectorProps> = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="passengers">Пассажиры</Label>
      <Select value={value} onValueChange={onChange}>
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
    </>
  );
};
