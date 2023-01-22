import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Navigation from './components/Navigation'
import Title from './components/Title'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Title />
      <Search />
      <Footer />
      <Footer2 />
    </div>
  )
}

export default App
