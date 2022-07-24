import React from 'react'
import {Switch, Route} from "react-router-dom"
import {ProductosLista} from "./Productos/index"

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path='' exact component={ProductosLista}/>
      </Switch>
    </section>
  )
}
export default Paginas