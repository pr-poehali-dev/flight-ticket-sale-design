
import React from 'react';
import { TripType } from './types';
import { RadioOption } from './RadioOption';
import { BaseComponentProps } from './types';

/**
 * Свойства компонента выбора типа поездки
 */
export interface TripTypeSelectorProps extends BaseComponentProps {
  /**
   * Текущий выбранный тип поездки
   */
  value: TripType;
  
  /**
   * Обработчик изменения типа поездки
   */
  onChange: (value: TripType) => void;
}

/**
 * Компонент для выбора типа поездки (туда-обратно или в одну сторону)
 */
export const TripTypeSelector: React.FC<TripTypeSelectorProps> = React.memo(({ 
  value, 
  onChange,
  className 
}) => {
  return (
    <div className={`flex space-x-4 ${className || ''}`} data-testid="trip-type-selector">
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
});

TripTypeSelector.displayName = 'TripTypeSelector';
