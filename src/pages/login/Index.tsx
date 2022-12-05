import { Card, Input, Button } from "@nextui-org/react";
import style from "./style.module.scss";

export default function LoginPage (){
  return(
    <div className={style.container}>
      <Card className={style.card}>
        <div className={style.form}>
          <div className={style.logo}>
            <h1>Logo.</h1>
          </div>
          
          <div className={style.content}>
            <section>
              <Input label="Username"></Input>
              <Input.Password label="Password"></Input.Password>
              <Button color="success"> Login </Button>
            </section>
            
          </div>
          
        </div>
        <div className={style.secondary}>
          secondary
        </div>
      </Card>
    </div>
  )
}