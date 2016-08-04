import React from 'react';
import trianglify from 'trianglify';
import pure from 'recompose/pure';

import removeUndefined from './utils';

function Trianglify({
  height,
  width,
  cellSize,
  variance,
  seed,
  xColors,
  yColors,
  colorSpace,
  colorFunction,
  strokeWidth,
  className,
  style,
  }) {
  const config = {
    height,
    width,
    cell_size: cellSize,
    variance,
    seed,
    x_colors: xColors,
    y_colors: yColors,
    color_space: colorSpace,
    color_function: colorFunction,
    stroke_width: strokeWidth,
  };
  const pattern = trianglify(removeUndefined(config));
  return (
    <svg
      className={className}
      width={pattern.opts.width}
      height={pattern.opts.height}
      style={style}
    >
      {
        pattern.polys.map((poly, index) => (
          <path
            key={index}
            d={`M${poly[1].join('L')}Z`}
            fill={poly[0]}
            stroke={poly[0]}
            strokeWidth={pattern.opts.stroke_width}
          />
        ))
      }
    </svg>
  );
}

export default pure(Trianglify);
export const lib = trianglify;
