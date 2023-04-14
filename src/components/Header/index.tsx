import { ReactElement } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { navOptions, IOption } from "./navOptions";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import counterSlice, { toggleMenu, selectedMenuItem, selectCount } from "../../plugins/redux/slices/menuSlice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Container } from "@nextui-org/react";

export default function Header(props:{}): ReactElement {
  const dispatch = useDispatch()
  const indexRedux = useSelector((state:any)=> state.menu.index);
  const isMenuActive = useSelector((state :any) => state.menu.active);

  function onClickTeste(index:number){
    dispatch(selectedMenuItem({payload:index, type: "menu/selectedMenuItem"}))
  }

  function onClickTesteGet(){
    
    console.log(indexRedux)
  }

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

          {/* <button onClick={onClickTeste}>teste</button> */}
          {/* <button onClick={onClickTesteGet}>teste get</button> */}
          <h1>Logo.</h1>

        </div>
        
        <div className={style.containerTwo}>
          
        </div>
        


      </header>
      
      <nav className={`${isMenuActive ? style.nav : style.navClosed}`}>
        {
          navOptions.map((option: IOption) => (
            <a href={option.path} key={option.title}>{option.title}</a>
          ))
        }
      </nav>
    </>
    

    
  )
}