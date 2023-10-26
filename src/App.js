import React from 'react'
import Header from './components/header/Header'
import Card from './components/card/Card'

//! scss dosyasindaki sayfalari buradas yada App.scss de import edebiliriz.
// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_varieble.scss"

import "./App.scss"
import data from "./data"
const App = () => {
  return (
    <div>
      <Header/>
      <Card data={data}/>
    </div>
  )
}

export default App