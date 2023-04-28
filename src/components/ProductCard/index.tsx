import { Card } from "@nextui-org/react";
import style from "./style.module.scss";
import {Button, Dropdown} from "@nextui-org/react";
import { MouseEventHandler, useEffect, useState } from "react";

interface Iprops {
    label:string,
    children:any,
    src:string,
}

export function ProductCard(props:Iprops){
    const [active, setActive] = useState<boolean>(false);


    function onHover(e:MouseEventHandler<unknown>){
        // console.log(e)
        // setActive(true)
        
    }

    function dropdownClick(e:any){
        console.log(e)
        console.log("click")
        const button = document.getElementById("dropdownButton" + props.src)
        console.log(button)
        button?.click();
    }



    useEffect(()=>{
        console.log(active)
    },[active])

    return (
        <Card variant="flat" className={style.container} onMouseEnter={() => setActive(true)} onMouseLeave={()=>setActive(false)}> 
            {active && 
                (<div className={style.controls} >
                    <Dropdown>
                        <Dropdown.Button light color={"default"} ></Dropdown.Button>
                        <Dropdown.Menu
                            disabledKeys={["edit", "delete"]}
                            aria-label="Example with disabled actions"
                        >
                            <Dropdown.Item key="new">New file</Dropdown.Item>
                            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                            <Dropdown.Item key="delete" withDivider color="error">
                                Delete file
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>)
            }
            <div className={style.content} onClick={(e) => dropdownClick(e)}> <img src={`${import.meta.env.VITE_BASE_URL}/produto/image/${props.src}`} alt="" /> </div>
            <div className={style.label}> {props.label} </div>
        </Card>
    )

    
}