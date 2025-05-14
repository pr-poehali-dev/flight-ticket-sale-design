
/**
 * Типы для компонентов формы поиска
 */

/**
 * Тип поездки: туда-обратно или в одну сторону
 */
export type TripType = 'roundTrip' | 'oneWay';

/**
 * Общие свойства для всех компонентов формы
 */
export interface BaseComponentProps {
  /**
   * Дополнительные CSS классы для компонента
   */
  className?: string;
}
