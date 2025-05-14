
import React from 'react';
import { Label } from '@/components/ui/label';

/**
 * Свойства для компонента радио-кнопки
 */
export interface RadioOptionProps {
  /**
   * Идентификатор радио-кнопки
   */
  id: string;
  
  /**
   * Имя группы радио-кнопок
   */
  name: string;
  
  /**
   * Значение радио-кнопки
   */
  value: string;
  
  /**
   * Состояние выбора (отмечена или нет)
   */
  isChecked: boolean;
  
  /**
   * Обработчик изменения состояния
   */
  onChange: () => void;
  
  /**
   * Текст метки
   */
  label: string;
}

/**
 * Компонент радио-кнопки с меткой для форм
 */
export const RadioOption: React.FC<RadioOptionProps> = ({
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

export default RadioOption;
