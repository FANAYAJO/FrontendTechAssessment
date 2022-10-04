import React from 'react'

import IOSIconStatusBar from './i-o-s-icon-status-bar'

export default function IOSStatusBarWithNotchSf() {
  return (
    <div className="absolute left-[0] top-[0] h-[66px] w-[375px] overflow-clip bg-[rgba(255,255,255,0)] text-left font-['Helvetica'] font-normal leading-[21px] text-[rgba(2,2,2,1)] [backdrop-filter:blur(20px)]">
      <p className="absolute left-8 top-[13px] inline text-[15px]">9:41</p>
      <IOSIconStatusBar />
    </div>
  )
}
