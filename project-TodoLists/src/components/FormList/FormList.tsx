import React from "react"
import './FormList.css'

function FormList() {


  return (
    <div className="Form">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
         <form >
         <table>
            <thead>
                <tr>
                    <th className="left">Tarefas</th>
                    <th className="center">Status</th>
                    <th className="right">Opções</th>
                </tr>
             </thead> <br />
             <tbody>
                 <tr>
                     <td className="left">Limpar a casa</td>
                     <td className="center">
                        <img className="icon" src="/public/EmptyIcon.svg" alt="Checkbox" />
                     </td>
                     <td className="right">
                        <img className="icon" src="/public/editIcon.svg" alt=""/>
                        <img className="icon" src="/public/deleteIcon.svg" alt=""/>
                     </td>
                 </tr>
                      <tr>
                        <td className="left">
                             <input type="text" placeholder="Nova Tarefa..." value=""/>
                        </td>
                        <td className="center">
                        </td>
                        <td className="right">
                             <img className="icon" src="/assets/addIcon-0dfbc64b.svg" alt=""/>
                         </td>
                     </tr>
                 </tbody>
             </table>
        </form>
    </div>
  )
}

export default FormList