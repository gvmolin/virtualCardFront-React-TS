import MainTemplate from "../../components/Templates"
import { Card, Button, Modal, Input } from "@nextui-org/react"
import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductCard } from "../../components/ProductCard"
import { useEffect, useState } from "react"
import { UploadInputComponent } from "../../components/UploadInput"
import { client } from "../../plugins/axios"

export default function ItemsPage(){
    //DATA
    const [visible, setVisible] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(false);

    //FORM
    const [nome, setNome] = useState<string>(" ");
    const [file, setFile] = useState<File[]|null>(null)
    // const [valorCompra, setValorCompra] = useState<string>(" ");
    // const [valorVenda, setValorVenda] = useState<string>(" ");
    

    //FUNCTIONS    
    function validateRequired(value:string):boolean {
        return !!value.replaceAll(" ", "");
    };

    function validateFile(value:File[]|null):boolean {
        if(value) return !!value.length;
        return false;
        
    };

    async function getItems(){
        await client.get("/produto").then(res => console.log(res));
    }

    async function createItem(){
        const form = createProdutoFormData();
        await client.post("/produto", form).then(
            console.log
        );
    }

    function createProdutoFormData(): FormData{
        const formData = new FormData()
        formData.append("nome", nome)
        if(file){
            formData.append("file", file[0])
        }
        return formData;
        
    }

    function validateForm():void{
        if(
            validateRequired(nome) &&
            validateFile(file)

            // validateRequired(valorCompra) &&
            // validateRequired(valorVenda)
        ){
            setValid(true);
        } else {
            setValid(false);
        }
    }

    function openForm(){
        setVisible(true)
    }

    function onCloseHandle(){
        setVisible(false);
        clearForm();
    }

    function clearForm(){
        setNome("")
        setFile(null)
    }

    function onSubmit(){
        validateForm();
        if(valid) createItem();
    }

    useEffect(()=>{
        getItems()
    }, [])

    //TEMPLATE
    return(
        <>
            <MainTemplate title="Catálogo">
                <div className={style.container}>
                    <Card variant="flat" className={style.buttonCard}><button onClick={openForm}><FontAwesomeIcon icon={'plus'}/></button></Card>
                    <ProductCard label="Label"> </ProductCard>
                </div>
            </MainTemplate>

            <Modal
                closeButton
                open={visible}
                className={style.modal}
                onClose={onCloseHandle}
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