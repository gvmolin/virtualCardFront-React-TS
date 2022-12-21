import { ReactElement } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import style from "./style.module.scss";


export default function MainTemplate(props:{children:ReactElement}): ReactElement {
  const isMenuActive = useSelector((state :any) => state.menu.active);

  return (
    <div className={style.container}>
      <Header />  
      <div className={`${isMenuActive ? style.navOpened : style.navClosed}`}>
        {props.children}
      </div>
    </div>
      
  )
}