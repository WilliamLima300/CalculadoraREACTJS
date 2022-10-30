import React, { useState } from "react"
import './Calculator.css' //IMPORTAR CSS
import Container from '@mui/material/Container' // importar container para centralizar a div wrapper da calculadora
import { Box } from '@mui/system' //adiciona espaçamento do contaneir do topo da pagina

export default function Calculator(){
    // criar useState para armazenar valor dos botões cliclados primeiro
    const[num,setNum] = useState(0);
    // criar useState para armazenar valor dos botões clicado depois
    const[oldnum,setOldNum] = useState(0);
    // criar useState para armazenar a operação matematica a ser efetuada
    const[operator,setOperator] = useState();


    // criar função para pegar o numeros e inputar 

    function inputNum(e){
        // variavel que armazena o value do botão clicado
        var input=e.target.value
        // se o numero for 0 em primeiro local ele substitui
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    //criar função para apagar (colocar 0) no botão AC
    function clear(){
        setNum(0);
    }

    //criar função para calcular porcentagem

    function percentage(){
        setNum(num/100);
    }

    //criar função para alternar numero positvo/negativo

    function changeSign(){
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    // criar função para armaezar operador matematico

    function operatorHandle(e){
        //Variavel para armazenar operador
        var operatorInput =  e.target.value

        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    //criar função para realizar os calculos matematicos

    function calculate(){
        if(operator === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }else if(operator === "x"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }else if(operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }else if(operator === "+"){
            setNum(parseFloat(oldnum)+ parseFloat(num));
        }
        

    }


    return(

        <div>

            <Box m={5}/>

            <Container maxWidth="xs">

                <div className="wrapper">
                    <Box m={12} />
                    <h1 className="results">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className="orange" onClick={operatorHandle} value="/">/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandle} value="x">X</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandle} value="-">-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandle} value="+">+</button>
                    <button className="gray double" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>.</button>
                    <button className="orange" onClick={calculate}>=</button>
                    
                </div>

            </Container>
        </div>
    )

}