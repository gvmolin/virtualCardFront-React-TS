import MainTemplate from "../../components/Templates"
import { Card, Button, Modal, useInput, Input } from "@nextui-org/react"
import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductCard } from "../../components/ProductCard"
import { useState, useMemo, useEffect } from "react"
import { UploadInputComponent } from "../../components/UploadInput"

export default function ItemsPage(){
    //DATA
    const [visible, setVisible] = useState<boolean>(true);
    const [valid, setValid] = useState<boolean>(false);

    //FORM
    const [nome, setNome] = useState<string>(" ");
    // const [valorCompra, setValorCompra] = useState<string>(" ");
    // const [valorVenda, setValorVenda] = useState<string>(" ");
    const [file, setFile] = useState<File[]|null>(null)

    //FUNCTIONS    
    function validateRequired(value:string):boolean {
        return !!value.replaceAll(" ", "");
    };

    // function validateRequiredNumber(value:string):boolean{
    //     console.log(!!value)
    //     return !!value;
    // };

    function validateForm():void{
        if(
            validateRequired(nome)
            // validateRequired(valorCompra) &&
            // validateRequired(valorVenda)
        ){
            setValid(true);
        } else {
            setValid(false)
        }
    }

    function onSubmit(){
        validateForm();
    }

    //TEMPLATE
    return(
        <>
            <MainTemplate title="Catálogo">
                <div className={style.container}>
                    <Card variant="flat" className={style.buttonCard}><button><FontAwesomeIcon icon={'plus'}/></button></Card>
                    <ProductCard label="Label"> </ProductCard>
                </div>
            </MainTemplate>

            <Modal
                closeButton
                open={visible}
                className={style.modal}
            >
                <Modal.Header>
                    <h2>Cadastro de produto</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className={style.inputDiv}>
                        <Input
                            width="100%"
                            shadow={false}
                            helperText={!validateRequired(nome)? "Campo obrigatório" : ""}
                            helperColor={"error"}
                            type="text"
                            label="Nome"
                            onChange={(e)=> setNome(e.currentTarget.value)}
                        />
                    </div>
                    
                    <div className={`${style.inputDiv}`}>
                        <UploadInputComponent 
                            setFileFunc={setFile}
                            color={!!file ? "success": "default"}
                        />
                    </div>
                    {/* <div className={style.inputDiv}>
                        <Input
                            width="100%"
                            shadow={false}
                            helperText={!validateRequired(valorCompra) ? "Campo obrigatório" : ""}
                            helperColor={"error"}
                            type="number"
                            label="Valor de compra"
                            onChange={(e)=> setValorCompra(e.currentTarget.value)}
                        />
                    </div>
                    <div className={style.inputDiv}>
                        <Input
                            width="100%"
                            shadow={false}
                            helperText={!validateRequired(valorVenda) ? "Campo obrigatório" : ""}
                            helperColor={"error"}
                            type="number"
                            label="Valor de venda"
                            onChange={(e)=> setValorVenda(e.currentTarget.value)}
                        />
                    </div>

                    <div className={style.inputDiv}>
                        <Input
                            width="100%"
                            shadow={false}
                            helperText={!validateRequired(valorVenda) ? "Campo obrigatório" : ""}
                            helperColor={"error"}
                            type="number"
                            label="Quantidade em estoque"
                            onChange={(e)=> setValorVenda(e.currentTarget.value)}
                        />
                    </div> */}
                    
                    <Button onClick={onSubmit}>Submit</Button>
                    
                </Modal.Body>
            </Modal>
        </>
    )
}