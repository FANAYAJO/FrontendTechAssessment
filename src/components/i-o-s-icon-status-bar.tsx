import React from 'react'

import IOSIconSmallMobileSignal from './assets/i-o-s-icon-small-mobile-signal'
import IOSIconSmallWifi from './assets/i-o-s-icon-small-wifi'
import IOSIconSmallBattery from './assets/i-o-s-icon-small-battery'

export default function IOSIconStatusBar() {
  return (
    <div className="absolute top-[15px] right-[15px] inline-flex items-start gap-0.5">
      <IOSIconSmallMobileSignal />
      <IOSIconSmallWifi />
      <IOSIconSmallBattery />
    </div>
  )
}
