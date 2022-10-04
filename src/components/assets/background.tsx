import React from 'react'

export default function Background() {
  return (
    <div className="inline-flex">
      <div className="absolute left-[0] right-[0] top-[0] bottom-[0] [backdrop-filter:blur(20px)]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 375 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_6301_159)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H375V133H0V0Z"
              fill="#F9F9F9"
              fillOpacity="0.94"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_6301_159"
              x="-20"
              y="-20"
              width="415"
              height="173"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_6301_159"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_6301_159"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}
