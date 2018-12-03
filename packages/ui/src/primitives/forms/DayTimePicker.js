// @flow
import * as React from 'react';
import { parse } from 'date-fns';
import { DayPicker, type YearPickerType } from './DayPicker';
import { Input } from './index';
import { Select } from '../filters';

type Props = {
  children?: Node,
  /** Field disabled */
  isDisabled?: boolean,
  /** Ref to apply to the inner Element */
  innerRef: React.Ref<*>,
  date: string,
  time: string,
  offset: string,
  htmlID: string,
  autoFocus?: boolean,
  handleDayChange: Date => void,
  handleTimeChange: Function,
  handleOffsetChange: Function,
  yearRangeFrom?: number,
  yearRangeTo?: number,
  yearPickerType?: YearPickerType,
};

export const DateTimePicker = (props: Props) => {
  const { date, time, offset, htmlID, autoFocus, isDisabled, innerRef } = props;
  const {
    handleDayChange,
    handleTimeChange,
    handleOffsetChange,
    yearRangeFrom,
    yearRangeTo,
    yearPickerType,
  } = props;
  const TODAY = new Date();

  const options = [
    '-12',
    '-11',
    '-11',
    '-10',
    '-09',
    '-08',
    '-07',
    '-06',
    '-05',
    '-04',
    '-03',
    '-02',
    '-01',
    '+00',
    '+01',
    '+02',
    '+03',
    '+04',
    '+05',
    '+06',
    '+07',
    '+08',
    '+09',
    '+10',
    '+11',
    '+12',
    '+13',
    '+14',
  ].map(o => ({ value: `${o}:00`, label: `${o}:00` }));
  return (
    <div>
      <DayPicker
        autoFocus={autoFocus}
        onSelectedChange={handleDayChange}
        yearRangeFrom={yearRangeFrom}
        yearRangeTo={yearRangeTo}
        yearPickerType={yearPickerType}
        startCurrentDateAt={date ? parse(date) : TODAY}
        startSelectedDateAt={date ? parse(date) : TODAY}
      />
      <Input
        type="time"
        name="time-picker"
        value={time}
        onChange={handleTimeChange}
        disabled={isDisabled || false}
        isMultiline={false}
        ref={innerRef}
      />
      <Select
        value={offset}
        options={options}
        onChange={handleOffsetChange}
        id={`react-select-${htmlID}`}
      />
    </div>
  );
};