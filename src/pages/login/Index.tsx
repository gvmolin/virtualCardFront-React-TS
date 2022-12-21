import { Card, Input, Button } from "@nextui-org/react";
import style from "./style.module.scss";
import ReactCardFlip from "react-card-flip";
import { ReactElement, useState } from "react";

export default function LoginPage ():ReactElement {
  const [isFlipped, setIsFlipped] = useState(false)

  function goTo(path:string):void{
    window.location.href = path;
  }

  return(
    <div className={style.container}>
      <Card className={style.card}>
      
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className={style.form}>
            <div className={style.logo}>
              <h1>Logo.</h1>
            </div>
            <div className={style.content}>
              <section>
                <Input label="Username" className={style.formItem}></Input>
                <Input.Password label="Password" className={style.formItem}></Input.Password>
                <Button color="success" className={style.formItem} onClick={() => goTo('home')}> Login </Button>
                <Button onClick={() => setIsFlipped(true)} className={style.formItem}> Create account </Button>
                <p className={style.formItem}>Forgot your password? &nbsp;<a href="">Recover password.</a></p>
              </section>
            </div>
          </div>

          <div className={style.form}>
            <div className={style.logo}>
              <h1>Logo.</h1>
            </div>
            <div className={style.content}>
              <section>
                <Input label="Username" className={style.formItem}></Input>
                <Input label="Email" className={style.formItem}></Input>
                <Input.Password label="Password" className={style.formItem}></Input.Password>
                <Input.Password label="Confirm Password" className={style.formItem}></Input.Password>
                <Button color="success" className={style.formItem}> Create account </Button>
                <Button onClick={() => setIsFlipped(false)} className={style.formItem}> Login page </Button>
              </section>
            </div>
            </div>
        </ReactCardFlip>
        <div className={style.secondary}>
          <img src="/laptop.svg" className="logo" alt="Vite logo" />
        </div>
      </Card>
    </div>
  )
}