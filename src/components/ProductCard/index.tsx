import { Card } from "@nextui-org/react";
import style from "./style.module.scss";

interface Iprops {
    label:string,
    children:any
}

export function ProductCard(props:Iprops){
    return (
        <Card variant="flat" className={style.container}> 
            <div className={style.content}> content </div>
            <div className={style.label}> {props.label} </div>
        </Card>
    )
}