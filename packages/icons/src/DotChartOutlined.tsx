import * as React from 'react';

function SvgDotChartOutlined(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 78 78"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 .007H77.78v77.778H0z" />
      <path
        d="M5.557 72.229H75c.74 0 1.445.294 1.967.811.517.522.811 1.228.811 1.967a2.779 2.779 0 01-2.778 2.777H5.557A5.558 5.558 0 010 72.23V2.784a2.779 2.779 0 015.556 0V72.23zM44.446 44.45c6.133 0 11.11 4.978 11.11 11.111 0 6.134-4.977 11.111-11.11 11.111-6.134 0-11.111-4.977-11.111-11.11 0-6.134 4.977-11.112 11.11-11.112zm-25-16.667c4.6 0 8.333 3.734 8.333 8.334s-3.733 8.333-8.333 8.333a8.336 8.336 0 01-8.334-8.333c0-4.6 3.734-8.334 8.334-8.334zM61.112.007c9.2 0 16.667 7.466 16.667 16.666S70.312 33.34 61.112 33.34c-9.2 0-16.666-7.467-16.666-16.667 0-9.2 7.466-16.666 16.666-16.666z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgDotChartOutlined = React.memo(SvgDotChartOutlined);
export default MemoSvgDotChartOutlined;