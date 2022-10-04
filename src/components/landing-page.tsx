import React from 'react'

import URLBar from './u-r-l-bar'
import IOSStatusBarWithNotchSf from './i-o-s-status-bar-with-notch-sf'

export default function LandingPage() {
  return (
    <div className="relative h-[813px] w-[375px] bg-[rgba(246,242,255,1)] font-['Helvetica']">
      <div className="absolute top-[290px] left-[calc(50%_-_82.82px_+_0.32px)] h-[292px] w-[165.63px] rounded-[13.23px] drop-shadow-lg [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/21492f0a9e3a281ad871eabf847564dc35c462e9:0.webp)_no-repeat_center_/_contain]" />
      <URLBar />
      <div className="absolute top-[94px] left-[calc(50%_-_160.5px_+_0px)] inline-flex flex-col items-center gap-4 text-center">
        <div className="relative h-[108px] w-[283px] font-bold text-[rgba(36,13,87,1)]">
          <p className="absolute inset-0 inline w-[283px] text-4xl leading-9">
            Imagine if
            <br />
            <br />
            had events.
          </p>
          <p className="absolute left-[21.2%] right-[21.2%] top-[31.48%] bottom-[30.56%] inline text-4xl leading-[normal] [background:linear-gradient(90deg,_rgba(132,_86,_236,_1),_rgba(232,_123,_248,_1))] [webkit-background-clip:text] [webkit-text-fill-color:transparent]">
            Snapchat&#160;
          </p>
        </div>
        <p className="w-[321px] text-base font-light leading-[normal] text-[rgba(79,79,79,1)]">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div className="absolute top-[616px] left-[calc(50%_-_93.5px_+_0px)] inline-flex w-[187px] items-center justify-center gap-2.5 rounded-[10px] bg-gradient-to-r from-[rgba(132,86,236,1)] to-[rgba(232,123,248,1)] p-4 text-right font-bold leading-[normal] text-white">
        <p className="text-base">🎉 Create my event</p>
      </div>
      <IOSStatusBarWithNotchSf />
    </div>
  )
}
