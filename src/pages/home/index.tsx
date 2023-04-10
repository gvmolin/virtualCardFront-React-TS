import style from "./style.module.scss";
import MainTemplate from "../../components/Templates";
import { Card } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Home() {
  return (
    <MainTemplate>
      <div className={style.container}>
        <h1 className={style.title}>Dashboard</h1>

        <div className={style.row}>
          <Card variant="flat" className={style.card}>
            <h1><FontAwesomeIcon icon={'eye'}/></h1>
            <p className={style.percent}>+10%</p>
            <h3>25.556</h3>
            <p>Total accesses</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <p className={style.percent}>+12% ( T / Y )</p>
            <h1><FontAwesomeIcon icon={'eye'}/></h1>
            <h3>374</h3>
            <p>Accesses today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <p className={style.percent}>+9% ( T / Y )</p>
            <h1><FontAwesomeIcon icon={'arrow-pointer'}/></h1>
            <h3>12.324</h3>
            <p>Total clicks</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1><FontAwesomeIcon icon={'arrow-pointer'}/></h1>
            <p className={style.percent}>+7% ( T / Y )</p>
            <h3>122</h3>
            <p>Clicks Today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1>{'{}'}</h1>
            <p className={style.percent}>+3% ( T / Y )</p>
            <h3>122</h3>
            <p>{'{button.title}'} today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1>{'{}'}</h1>
            <h3>122</h3>
            <p>Total {'{button.title}'}</p> 
          </Card>

          
        </div>
      </div>
      
    </MainTemplate>
  )
}