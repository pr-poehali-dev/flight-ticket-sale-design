
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

// Тип поездки: туда-обратно или в одну сторону
export type TripType = 'roundTrip' | 'oneWay';

// Компонент выбора типа поездки
interface TripTypeSelectorProps {
  value: TripType;
  onChange: (value: TripType) => void;
  className?: string;
}

export const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({ 
  value, 
  onChange,
  className 
}) => {
  return (
    <div className={`flex space-x-4 ${className || ''}`}>
      <RadioOption 
        id="roundTrip"
        name="tripType"
        value="roundTrip"
        isChecked={value === 'roundTrip'}
        onChange={() => onChange('roundTrip')}
        label="Туда и обратно"
      />
      
      <RadioOption 
        id="oneWay"
        name="tripType"
        value="oneWay"
        isChecked={value === 'oneWay'}
        onChange={() => onChange('oneWay')}
        label="В одну сторону"
      />
    </div>
  );
};

// Компонент радио-кнопки
interface RadioOptionProps {
  id: string;
  name: string;
  value: string;
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  id,
  name,
  value,
  isChecked,
  onChange,
  label
}) => (
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={isChecked}
      onChange={onChange}
      className="text-blue-500 focus:ring-blue-500"
    />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

// Компонент выбора городов
interface CitySelectorProps {
  fromCity: string;
  toCity: string;
  onFromCityChange: (value: string) => void;
  onToCityChange: (value: string) => void;
  onSwapCities: () => void;
  className?: string;
}

export const CitySelector: React.FC<CitySelectorProps> = ({
  fromCity,
  toCity,
  onFromCityChange,
  onToCityChange,
  onSwapCities,
  className
}) => {
  return (
    <div className={`relative grid grid-cols-2 gap-2 ${className || ''}`}>
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
      
      <SwapCitiesButton onSwapCities={onSwapCities} />
    </div>
  );
};

// Кнопка для смены городов местами
interface SwapCitiesButtonProps {
  onSwapCities: () => void;
}

const SwapCitiesButton: React.FC<SwapCitiesButtonProps> = ({ onSwapCities }) => (
  <button
    type="button"
    onClick={onSwapCities}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
    aria-label="Поменять города местами"
  >
    <Icon name="ArrowLeftRight" className="h-4 w-4 text-blue-500" />
  </button>
);

// Компонент выбора дат
interface DateSelectorProps {
  tripType: TripType;
  departureDate?: Date;
  returnDate?: Date;
  onDepartureDateChange: (date?: Date) => void;
  onReturnDateChange: (date?: Date) => void;
  className?: string;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  tripType,
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  className
}) => {
  return (
    <div className={className}>
      <Label htmlFor="departureDate">Даты</Label>
      <div className="flex gap-2 mt-1">
        <DatePickerButton 
          date={departureDate}
          onDateChange={onDepartureDateChange}
          placeholder="Выберите дату"
        />

        {tripType === 'roundTrip' && (
          <DatePickerButton 
            date={returnDate}
            onDateChange={onReturnDateChange}
            placeholder="Обратно"
          />
        )}
      </div>
    </div>
  );
};

// Кнопка выбора даты с календарем
interface DatePickerButtonProps {
  date?: Date;
  onDateChange: (date?: Date) => void;
  placeholder: string;
}

const DatePickerButton: React.FC<DatePickerButtonProps> = ({
  date,
  onDateChange,
  placeholder
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal"
      >
        <Icon name="Calendar" className="mr-2 h-4 w-4" />
        {date ? (
          format(date, 'dd MMM', { locale: ru })
        ) : (
          <span>{placeholder}</span>
        )}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={onDateChange}
        initialFocus
      />
    </PopoverContent>
  </Popover>
);

// Компонент выбора пассажиров
interface PassengerSelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const PassengerSelector: React.FC<PassengerSelectorProps> = ({ 
  value, 
  onChange,
  className 
}) => {
  return (
    <div className={className}>
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
    </div>
  );
};

// Кнопка поиска билетов
interface SearchButtonProps {
  className?: string;
}

export const SearchButton: React.FC<SearchButtonProps> = ({ className }) => (
  <div className={className}>
    <Label className="opacity-0 block">Поиск</Label>
    <Button type="submit" className="w-full mt-1 bg-blue-500 hover:bg-blue-600">
      <Icon name="Search" className="mr-2 h-4 w-4" />
      Найти
    </Button>
  </div>
);
