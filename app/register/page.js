"use client"
import React , { useEffect } from "react"
import { useSelector } from "react-redux";
import { darkTheme } from "../components/theme/theme";

export default function Home() {
  const dark_theme = useSelector(state => state.themeSlice.dark_theme)

  useEffect(()=>{
    darkTheme(dark_theme)
  },[dark_theme])

  return (
    <main>
      
    </main>
  );
}
