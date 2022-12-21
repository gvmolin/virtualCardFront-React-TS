import { ReactElement } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { navOptions, IOption } from "./navOptions";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../plugins/redux/slices/menuSlice";
import { useSelector } from "react-redux";

export default function Header(props:{}): ReactElement {
  const dispatch = useDispatch()
  const isMenuActive = useSelector((state :any) => state.menu.active);

  return (
    <>
      <header className={style.header}>
        <div className={style.hamburgerContainer}>
          <Hamburger 
            toggled={isMenuActive} 
            toggle={() => dispatch(toggleMenu())} 
            size={20}
          />
        </div>
        
        <h1>Logo.</h1>
      </header>
      
      <nav className={`${isMenuActive ? style.nav : style.navClosed}`}>
        {
          navOptions.map((option: IOption) => (
            <a href={option.path}>{option.title}</a>
          ))
        }
      </nav>
    </>
    

    
  )
}