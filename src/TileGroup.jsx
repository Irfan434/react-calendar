import React from 'react';
import PropTypes from 'prop-types';

import Flex from './Flex';

// import { getTileClasses } from './shared/utils';
import { tileGroupProps } from './shared/propTypes';
// eslint-disable-next-line import/no-named-as-default
import getCustomTileClasses from './shared/customUtils';

export default function TileGroup({
  className,
  count = 3,
  dateTransform,
  dateType,
  end,
  hover,
  offset,
  start,
  step = 1,
  tile: Tile,
  value,
  valueType,
  ...tileProps
}) {
  const tiles = [];
  for (let point = start; point <= end; point += step) {
    const date = dateTransform(point);

    tiles.push(
      <Tile
        key={date.getTime()}
        classes={getCustomTileClasses({
          value, valueType, date, dateType, hover,
        })}
        date={date}
        point={point}
        {...tileProps}
      />,
    );
  }

  return (
    <Flex
      className={className}
      count={count}
      offset={offset}
      wrap
    >
      {tiles}
    </Flex>
  );
}

TileGroup.propTypes = {
  ...tileGroupProps,
  activeStartDate: PropTypes.instanceOf(Date),
  count: PropTypes.number,
  dateTransform: PropTypes.func.isRequired,
  offset: PropTypes.number,
  step: PropTypes.number,
  tile: PropTypes.func.isRequired,
};
