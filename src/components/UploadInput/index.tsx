import { Button } from "@nextui-org/react"
import { useState } from "react"
import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

export function UploadInputComponent(props:{
    required?:boolean,
    setFileFunc:Function,
    color:"default" | "primary" | "secondary" | "success" | "warning" | "error" | "gradient"
}){
    const [file, setFile] = useState<File[]|null>(null)
    const [imgURL, setImgURL] = useState<string>("")

    function onClickEvent(){
        document.getElementById("file")?.click();
    }

    function handleFileChange(e:any){
        setFile(e.currentTarget.files)
        setImgURL(URL.createObjectURL(e.currentTarget.files[0]))
        props.setFileFunc(e.currentTarget.files)
        // setFile(file)

    }

    function onClickXButton(){
        props.setFileFunc(null)
        setFile(null)
        setImgURL("")
    }

    return (
        <>
            <label htmlFor="file" >
                <div className={style.container}>
                    <Button color={props.color} onClick={onClickEvent} className={style.button}>Arquivo de imagem</Button>
                    {/* <p>Campo obrigatório</p> */}
                </div>
                
            </label>
            <input 
                type="file" 
                id="file" 
                style={{display:"none"}} 
                onChange={handleFileChange} 
                accept="image/*"
            />

            {
                file && (
                <div className={style.imgContainer}>
                    <button onClick={onClickXButton}><FontAwesomeIcon icon={faX}/></button>
                    <img src={imgURL} alt="" />
                </div>
                )   
            }
            
        </>
    )
};