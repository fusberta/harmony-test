import React from 'react'
import MainMenu from './main-menu/MainMenu'
import SearchInput from './SearchInput'
import OptionMenu from './OptionMenu'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[86px] px-9'>
        <h1 className='text-xl font-bold'>
            HarmonyHR
        </h1>
        <MainMenu />
        <SearchInput />
        <OptionMenu />
    </div>
  )
}

export default Header