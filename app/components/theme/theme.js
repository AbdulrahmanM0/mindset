"use client"
 
export function darkTheme(dark_theme) {
  if(!dark_theme){
  window.document.querySelector("body").setAttribute('data-theme','dark')
  }else{
    window.document.querySelector("body").removeAttribute('data-theme')
  }
}
