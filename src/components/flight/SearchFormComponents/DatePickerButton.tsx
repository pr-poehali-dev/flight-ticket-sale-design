
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

/**
 * Свойства кнопки выбора даты
 */
export interface DatePickerButtonProps {
  /**
   * Выбранная дата
   */
  date?: Date;
  
  /**
   * Обработчик изменения даты
   */
  onDateChange: (date?: Date) => void;
  
  /**
   * Текст подсказки при отсутствии выбранной даты
   */
  placeholder: string;
  
  /**
   * Дополнительный CSS класс
   */
  className?: string;
}

/**
 * Кнопка выбора даты с выпадающим календарем
 */
export const DatePickerButton: React.FC<DatePickerButtonProps> = React.memo(({
  date,
  onDateChange,
  placeholder,
  className
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className={`w-full justify-start text-left font-normal ${className || ''}`}
        data-testid="date-picker-button"
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
        locale={ru}
      />
    </PopoverContent>
  </Popover>
));

DatePickerButton.displayName = 'DatePickerButton';

export default DatePickerButton;
