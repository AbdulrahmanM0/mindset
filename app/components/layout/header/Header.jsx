"use client"

import { toggle_theme } from '@/app/store/Features/themeSlice/themeSlice'
import React , {useRef,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileDropDown from './profiledropdown/ProfileDropDown';

function Header() {
    const themeState = useSelector(state => state.themeSlice.dark_theme)
    const themeRef = useRef()
    const dispatch = useDispatch();
    
    // start handle theme
    const handleTheme = (check) => {
        dispatch(toggle_theme(check))
    }
    // end handle theme

    useEffect(()=>{
        themeRef.current.checked = themeState
    },[])

  return (
    <header className="container m-auto">
        <nav className="w-full flex justify-between py-4 px-3">
            {/* start sidebar toggle */}
            <div id="side_toggle" data-toggle="none">
                <input type="checkbox"  id="checkbox"  onChange={(e)=>handleSideBar(e.target.checked)}/>
                <label for="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
            </div>
            {/* end sidebar toggle */}

            {/* start theme toggle */}
            <div>
                <div className="themes">
                    {/* <label className="switch" for="switch">
                        <input id="switch"  type="checkbox" className="circle" />
                        <svg
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="moon svg"
                        >
                        <path
                            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                            ></path>
                        </svg>
                        <div className="sun svg">
                        <span className="dot"></span>
                        </div>
                    </label> */}
                    
                    <input type="checkbox" className="theme_switch" onChange={(e)=>handleTheme(e.target.checked)} ref={themeRef}></input>
                </div>
            </div>
            {/* end theme toggle */}
            {/* start profile dropdown */}
            <div>
                <div>
                    <ProfileDropDown />
                </div>
            </div>
            {/* end profile dropdown */}
        </nav>
    </header>
  )
}

export default Header