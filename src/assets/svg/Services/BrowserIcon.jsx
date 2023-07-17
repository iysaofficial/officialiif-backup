import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.581}
      height={39.58}
      viewBox="0 0 39.581 39.58"
      {...props}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M655 1501 c-253 -41 -472 -201 -579 -424 -67 -139 -69 -154 -73 -639
l-4 -438 756 0 756 0 -4 447 c-4 496 -4 495 -73 640 -90 188 -277 343 -479
398 -71 19 -229 27 -300 16z"
        />
        <path
          d="M4284 1500 c-311 -35 -563 -253 -646 -559 -20 -70 -21 -109 -26 -508
l-4 -433 756 0 756 0 0 409 c0 441 -5 502 -53 621 -40 97 -87 169 -162 245
-172 174 -386 252 -621 225z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
