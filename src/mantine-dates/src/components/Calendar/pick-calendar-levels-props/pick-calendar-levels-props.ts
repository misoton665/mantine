export function pickCalendarProps<T extends Record<string, any>>(props: T) {
  const {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    nextIcon,
    previousIcon,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    withCellSpacing,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,

    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minNumberOfWeeks,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,

    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,

    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,

    // External picker props
    allowSingleDateInRange,
    allowDeselect,

    // Other props
    minDate,
    maxDate,
    locale,
    ...others
  } = props;

  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      nextIcon,
      previousIcon,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      withCellSpacing,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,

      // MonthLevelGroup props
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minNumberOfWeeks,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,

      // YearLevelGroup props
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,

      // DecadeLevelGroup props
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,

      // External picker props
      allowSingleDateInRange,
      allowDeselect,

      // Other props
      minDate,
      maxDate,
      locale,
    },
    others,
  };
}
