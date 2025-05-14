
import React from 'react';
import Icon from '@/components/ui/icon';

/**
 * Свойства кнопки обмена городами
 */
export interface SwapCitiesButtonProps {
  /**
   * Обработчик нажатия на кнопку
   */
  onSwapCities: () => void;
  
  /**
   * Дополнительный CSS класс
   */
  className?: string;
}

/**
 * Кнопка для смены городов отправления и прибытия местами
 */
export const SwapCitiesButton: React.FC<SwapCitiesButtonProps> = React.memo(({ 
  onSwapCities,
  className
}) => (
  <button
    type="button"
    onClick={onSwapCities}
    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors ${className || ''}`}
    aria-label="Поменять города местами"
    data-testid="swap-cities-button"
  >
    <Icon name="ArrowLeftRight" className="h-4 w-4 text-blue-500" />
  </button>
));

SwapCitiesButton.displayName = 'SwapCitiesButton';

export default SwapCitiesButton;
