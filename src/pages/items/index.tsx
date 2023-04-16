import MainTemplate from "../../components/Templates"
import { Card, Button } from "@nextui-org/react"
import style from "./style.module.scss"
import { icons } from "../../plugins/fontsAwesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductCard } from "../../components/ProductCard"

export default function ItemsPage(){

    return(
        <MainTemplate title="Catálogo">
            <div className={style.container}>
                <Card variant="flat" className={style.buttonCard}><button><FontAwesomeIcon icon={'plus'}/></button></Card>
                <ProductCard label="Label"> </ProductCard>
            </div>
        </MainTemplate>
    )
}