
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { BaseComponentProps } from './types';

/**
 * Свойства кнопки поиска
 */
export interface SearchButtonProps extends BaseComponentProps {
  /**
   * Текст для отображения на кнопке
   */
  text?: string;
  
  /**
   * Состояние загрузки
   */
  isLoading?: boolean;
}

/**
 * Кнопка поиска авиабилетов
 */
export const SearchButton: React.FC<SearchButtonProps> = React.memo(({ 
  className,
  text = 'Найти',
  isLoading = false
}) => (
  <div className={className} data-testid="search-button-container">
    <Label className="opacity-0 block">Поиск</Label>
    <Button 
      type="submit"
      className="w-full mt-1 bg-blue-500 hover:bg-blue-600" 
      disabled={isLoading}
    >
      {isLoading ? (
        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icon name="Search" className="mr-2 h-4 w-4" />
      )}
      {text}
    </Button>
  </div>
));

SearchButton.displayName = 'SearchButton';
