import { ReactElement, useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import style from "./style.module.scss";


export default function Header(props): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  function switchHamburger():void{
    isOpen ? setIsOpen(false) : setIsOpen(true)
    console.log(isOpen)
  }

  return (
    <>
      <header className={style.header}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        <h1>Logo.</h1>
      </header>

      
        <nav className={`${isOpen ? style.nav : style.none}`}>
          <h1>nav content</h1>
        </nav>
      
    </>
    

    
  )
}