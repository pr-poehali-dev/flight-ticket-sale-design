
import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BaseComponentProps } from './types';

/**
 * Данные о количестве пассажиров
 */
const passengerOptions = [
  { value: '1', label: '1 пассажир' },
  { value: '2', label: '2 пассажира' },
  { value: '3', label: '3 пассажира' },
  { value: '4', label: '4 пассажира' },
  { value: '5', label: '5 пассажиров' }
];

/**
 * Свойства селектора количества пассажиров
 */
export interface PassengerSelectorProps extends BaseComponentProps {
  /**
   * Выбранное количество пассажиров
   */
  value: string;
  
  /**
   * Обработчик изменения количества пассажиров
   */
  onChange: (value: string) => void;
}

/**
 * Компонент выбора количества пассажиров
 */
export const PassengerSelector: React.FC<PassengerSelectorProps> = React.memo(({ 
  value, 
  onChange,
  className 
}) => {
  return (
    <div className={className} data-testid="passenger-selector">
      <Label htmlFor="passengers">Пассажиры</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="passengers" className="w-full mt-1">
          <SelectValue placeholder="Пассажиры" />
        </SelectTrigger>
        <SelectContent>
          {passengerOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
});

PassengerSelector.displayName = 'PassengerSelector';
