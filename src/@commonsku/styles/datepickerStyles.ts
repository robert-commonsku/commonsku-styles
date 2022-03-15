const datepickerStyles = `
.commonsku-styles-datepicker {
  .react-datepicker-wrapper, .react-datepicker__input-container {
    display: block;
    width: 100%;
  }
  
  .react-datepicker {
    border: 1px solid var(--color-primary1-60);
    outline: none;
    box-shadow: 1px  1px 0px var(--color-primary1-60),
              -1px -1px 0px var(--color-primary1-60),
              1px -1px 0px var(--color-primary1-60),
              -1px  1px 0px var(--color-primary1-60);
  }
  
  .react-datepicker__triangle {
    border-bottom-color: background: var(--color-neutrals-20);
  }
  
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header,
  .react-datepicker__header {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  
  .react-datepicker__header,
  .react-datepicker__today-button {
    background: var(--color-neutrals-20);
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  .react-datepicker__header {
    border-bottom: none;
  }
  
  .react-datepicker__today-button {
    border-top: none;
  }
  
  .react-datepicker__day {
    outline: none;
  }
  
  .react-datepicker__day :not(
    .react-datepicker__day--outside-month,
    .react-datepicker__day--selected
  ) {
    color: var(--color-neutrals-90);
  }
  
  .react-datepicker__day:hover:not(.react-datepicker__day--selected),
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background-color: var(--color-neutrals-20);
  }
  
  
  .react-datepicker__day--outside-month {
    color: var(--color-neutrals-70);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected
   {
    background-color: var(--color-primary1-60);
  }
  
  .react-datepicker__navigation--next {
    border-left-color: var(--color-primary1-60);
    margin-top: 8px;
  }
  .react-datepicker__navigation--previous {
    border-right-color: var(--color-primary1-60);
    margin-top: 8px;
  }
  
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom-color: var(--color-primary1-60);
    border-top-color: var(--color-primary1-60);
  }
}
`;

export default datepickerStyles;
