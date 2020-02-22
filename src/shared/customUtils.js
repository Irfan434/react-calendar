const numMatchesInValueArray = (date, value) => {
  const matches = value.filter(curDate => curDate.getDate() === date.getDate()
      && curDate.getMonth() === date.getMonth()
      && curDate.getFullYear() === date.getFullYear());

  return matches.length;
};

const getCustomTileClasses = ({
  // eslint-disable-next-line no-unused-vars
  value, valueType, date, dateType, hover,
} = {}) => {
  const className = 'react-calendar__tile';
  const classes = [className];
  if (numMatchesInValueArray(date, value) > 0) {
    classes.push(`${className}--active`);
  }
  return classes;
};

export default getCustomTileClasses;
