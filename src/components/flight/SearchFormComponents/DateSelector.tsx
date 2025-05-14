
import React from 'react';
import { Label } from '@/components/ui/label';
import { TripType } from './types';
import { DatePickerButton } from './DatePickerButton';
import { BaseComponentProps } from './types';

/**
 * Свойства компонента выбора дат
 */
export interface DateSelectorProps extends BaseComponentProps {
  /**
   * Тип поездки (влияет на отображение поля для обратной даты)
   */
  tripType: TripType;
  
  /**
   * Дата отправления
   */
  departureDate?: Date;
  
  /**
   * Дата возвращения
   */
  returnDate?: Date;
  
  /**
   * Обработчик изменения даты отправления
   */
  onDepartureDateChange: (date?: Date) => void;
  
  /**
   * Обработчик изменения даты возвращения
   */
  onReturnDateChange: (date?: Date) => void;
}

/**
 * Компонент выбора дат вылета и возвращения
 */
export const DateSelector: React.FC<DateSelectorProps> = React.memo(({
  tripType,
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  className
}) => {
  return (
    <div className={className} data-testid="date-selector">
      <Label htmlFor="departureDate">Даты</Label>
      <div className="flex gap-2 mt-1">
        <DatePickerButton 
          date={departureDate}
          onDateChange={onDepartureDateChange}
          placeholder="Выберите дату"
          data-testid="departure-date-picker"
        />

        {tripType === 'roundTrip' && (
          <DatePickerButton 
            date={returnDate}
            onDateChange={onReturnDateChange}
            placeholder="Обратно"
            data-testid="return-date-picker"
          />
        )}
      </div>
    </div>
  );
});

DateSelector.displayName = 'DateSelector';
