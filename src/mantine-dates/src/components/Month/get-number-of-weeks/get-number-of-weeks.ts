import dayjs from 'dayjs';
import { DayOfWeek } from '../../../types';

export const getNumberOfWeeks = (
  startDate: Date,
  endDate: Date,
  firstDayOfWeek: DayOfWeek = 1
): number => {
  const diffToFirstDayOfWeek = (7 - firstDayOfWeek + dayjs(startDate).day()) % 7;
  const startDateOfFirstDayOfWeek = dayjs(startDate).subtract(diffToFirstDayOfWeek, 'day');

  return dayjs(endDate).diff(startDateOfFirstDayOfWeek, 'week') + 1;
};
