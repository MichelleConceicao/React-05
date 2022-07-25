import React, {Component} from 'react'
import "./App.css"
export default class App extends Component{
  state = {
    dados: [
      {
        nome: "Michelle",
        idade:32,
      }, 
      {
        nome: "Dandara",
        idade:30,
      }, 
      {
        nome: "Rosane",
        idade:31,
      }, 
      {
        nome: "Lenon",
        idade:34
      }, 
      {
        nome: "Marilete",
        idade:60
      }, 
      {
        nome: "Rosiane",
        idade:61
      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.dados.map((item) => (
          <div className="container">
            <h2>Olá, {item.nome} você tem {item.idade} anos!</h2>
          </div>
        ))}
      </div>
    )
  }
}