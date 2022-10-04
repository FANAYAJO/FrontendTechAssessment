import React from 'react'

import Background from './assets/background'

export default function Backgrounds() {
  return (
    <div className="absolute left-[0] right-[0] top-[0] bottom-[0] [backdrop-filter:blur(16px)]">
      <Background />
      <div className="inline-flex">
        <div className="absolute left-[0] right-[0] top-[-0.33px] h-[0.33px] bg-[rgba(0,0,0,0.3)]" />
      </div>
    </div>
  )
}
