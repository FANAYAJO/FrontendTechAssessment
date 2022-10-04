import React from 'react'

import Reload from './assets/reload'
import AA from './assets/a-a'

export default function SearchFormIos15() {
  return (
    <div className="absolute top-2 left-[calc(50%_-_165.5px_+_0px)] h-11 w-[331px] text-left font-normal leading-[normal] text-black">
      <div className="absolute inset-0 rounded-xl bg-[rgba(0,0,0,0.08)]" />
      <Reload />
      <AA />
      <div className="absolute top-[13px] left-[calc(50%_-_54px_+_-0.5px)] inline-flex items-center gap-1 overflow-clip">
        <p className="font-['SF_Compact_Display'] text-sm opacity-50">􀎡</p>
        <p className="font-['SF_Pro_Text'] text-base tracking-[-0.44799999237060545px]">
          domain.com
        </p>
      </div>
    </div>
  )
}
