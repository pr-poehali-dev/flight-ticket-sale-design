
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SwapCitiesButton } from './SwapCitiesButton';
import { BaseComponentProps } from './types';

/**
 * Свойства селектора городов
 */
export interface CitySelectorProps extends BaseComponentProps {
  /**
   * Город отправления
   */
  fromCity: string;
  
  /**
   * Город прибытия
   */
  toCity: string;
  
  /**
   * Обработчик изменения города отправления
   */
  onFromCityChange: (value: string) => void;
  
  /**
   * Обработчик изменения города прибытия
   */
  onToCityChange: (value: string) => void;
  
  /**
   * Обработчик для обмена городами местами
   */
  onSwapCities: () => void;
}

/**
 * Компонент для выбора городов отправления и прибытия
 */
export const CitySelector: React.FC<CitySelectorProps> = React.memo(({
  fromCity,
  toCity,
  onFromCityChange,
  onToCityChange,
  onSwapCities,
  className
}) => {
  return (
    <div className={`relative grid grid-cols-2 gap-2 ${className || ''}`} data-testid="city-selector">
      <div className="relative">
        <Label htmlFor="fromCity">Откуда</Label>
        <Input
          id="fromCity"
          placeholder="Город отправления"
          value={fromCity}
          onChange={(e) => onFromCityChange(e.target.value)}
          className="mt-1"
          data-testid="from-city-input"
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
          data-testid="to-city-input"
        />
      </div>
      
      <SwapCitiesButton onSwapCities={onSwapCities} />
    </div>
  );
});

CitySelector.displayName = 'CitySelector';
