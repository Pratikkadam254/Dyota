"use client";

import { useId } from "react";

export interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number][];
  className?: string;
}

export default function GridPattern({
  width = 40,
  height = 40,
  squares = [[0, 0]],
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M${width/2} 0 L${width/2} ${height} M0 ${height/2} L${width} ${height/2}`}
            className="stroke-gray-300"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
