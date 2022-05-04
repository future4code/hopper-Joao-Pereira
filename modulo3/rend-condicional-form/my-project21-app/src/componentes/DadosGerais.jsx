import React from "react"

export class DadosGerais extends React.Component {
    render() {    
        return <div>
            <h1>ETAPA 1 - DADOS GERAIS &#x1F3B2;&#x1F30E;
    </h1>
            <h2>1. Qual é o seu nome?</h2>
            <input></input>

            <h2>2. Qual é a sua idade?</h2>
            <input></input>

            <h2>3. Qual é o seu e-mail?</h2>
            <input></input>

            <h2>4. Qual é a sua escolaridade?</h2>
            <select className="form-control" id="escolaridade" name="escolaridade">
                <option value={""}>Selecione uma escolaridade</option>
                <option value={"Ensino médio incompleto"}>Ensino médio incompleto</option>
                <option value={"Ensino médio completo"}>Ensino médio completo</option>
                <option value={"Ensino superior incompleto"}>Ensino superior incompleto</option>
                <option value={"Ensino superior completo"}>Ensino superior completo</option>

            </select>
        </div>
    }
}