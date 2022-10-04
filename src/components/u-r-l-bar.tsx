import React from 'react'

import Backgrounds from './backgrounds'
import HomeBarIphone12Mini from './home-bar-iphone12mini'
import ToolbarIphoneSe from './assets/toolbar-iphone-se'
import SearchFormIos15 from './search-form-ios15'

export default function URLBar() {
  return (
    <div className="absolute inset-x-0 top-[680px] h-[133px]">
      <Backgrounds />
      <HomeBarIphone12Mini />
      <ToolbarIphoneSe />
      <SearchFormIos15 />
    </div>
  )
}
