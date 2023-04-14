import { ReactElement } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { navOptions, IOption } from "./navOptions";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import counterSlice, { toggleMenu, selectedMenuItem, selectCount } from "../../plugins/redux/slices/menuSlice";
import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Avatar, Container } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Header(props:{}): ReactElement {
  const dispatch = useDispatch()
  const menuIndex = useSelector((state:any)=> state.menu.index);
  const isMenuActive = useSelector((state :any) => state.menu.active);
  const navigate = useNavigate()

  function onClickMenuIndex(index:number){
    dispatch(selectedMenuItem({payload:index, type: "menu/selectedMenuItem"}))
    navigate(navOptions[index].path)
  }

  // function onClickTesteGet(){
  //   console.log(navOptions[menuIndex.payload])
  //   console.log(menuIndex)
  // }

  return (
    <>
      <header className={style.header}>
        <div className={style.containerOne}>
          <div className={style.hamburgerContainer}>
            <Hamburger
              toggled={isMenuActive}
              toggle={() => dispatch(toggleMenu())}
              size={20}
            />
          </div>
          
          {/* <button onClick={onClickTesteGet}>teste get</button> */}
          <h1>Logo.</h1>
        </div>
        
        <div className={style.containerTwo}>
          
        </div>
      </header>
      
      <div className={style.sticky}>
        <nav className={`${isMenuActive ? style.nav : style.navClosed}`}>
          {
            navOptions.map((option: IOption, i:number) => (
              <a 
                className={`${(menuIndex.payload === i) && style.active}`} 
                onClick={()=>onClickMenuIndex(i)} 
                key={option.title}
              >{option.title}</a>
            ))
          }
        </nav>
      </div>
    </>
    

    
  )
}