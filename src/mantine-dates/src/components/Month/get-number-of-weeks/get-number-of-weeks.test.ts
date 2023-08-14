import { getNumberOfWeeks } from './get-number-of-weeks';

describe('@mantine/dates/get-number-of-weeks', () => {
  it('returns number of weeks without first day of week', () => {
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 1))).toBe(1);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 2))).toBe(1);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 3))).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 4))).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5))).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 6))).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 7))).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 8))).toBe(2);
  });

  it('return number of weeks with first day of week', () => {
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 0)).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 1)).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 2)).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 3)).toBe(2);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 4)).toBe(1);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 5)).toBe(1);
    expect(getNumberOfWeeks(new Date(2023, 3, 1), new Date(2023, 3, 5), 6)).toBe(1);

    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 0)).toBe(2);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 1)).toBe(3);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 2)).toBe(3);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 3)).toBe(3);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 4)).toBe(3);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 5)).toBe(2);
    expect(getNumberOfWeeks(new Date(2022, 11, 25), new Date(2023, 0, 5), 6)).toBe(2);
  });
});
