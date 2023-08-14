import { DayOfWeek } from '../../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';
import { getEndOfWeek } from '../get-end-of-week/get-end-of-week';
import { getNumberOfWeeks } from '../get-number-of-weeks/get-number-of-weeks';

export function getMonthDays(
  month: Date,
  firstDayOfWeek: DayOfWeek = 1,
  minNumberOfWeeks: number = 0
): Date[][] {
  const currentMonth = month.getMonth();
  const startOfMonth = new Date(month.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);

  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const numberOfWeeks = getNumberOfWeeks(date, endDate, firstDayOfWeek);
  const numberOfExtraWeeks =
    minNumberOfWeeks > numberOfWeeks ? minNumberOfWeeks - numberOfWeeks : 0;
  endDate.setDate(endDate.getDate() + 7 * numberOfExtraWeeks);

  const weeks: Date[][] = [];

  while (date <= endDate) {
    const days: Date[] = [];

    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    weeks.push(days);
  }

  return weeks;
}
