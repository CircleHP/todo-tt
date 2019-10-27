import React, { useEffect, useState } from 'react'
import { AppContainer, Blur } from '../../styled-components/Wrappers/Wrappers'
import List from '../List/List'
import InfoHeader from '../InfoHeader/InfoHeader'

const data = []

const App = () => {
  const [count, setCount] = useState(0)
  const [modalWindowOpened, openModalWindow] = useState(false)

  const getItemsFromLocalStorage = () => {
    if(data.length === 0 && window.localStorage.length !== 0) {
        for(let i = 0; i < window.localStorage.length; i++) {
            data.push(JSON.parse(window.localStorage.getItem(i + 1)))
        }
    }
  }

  useEffect(() => {
    getItemsFromLocalStorage()

    if(data) {
      setCount(data.length)
    }

    return () => {}
  }, [count])

  return (
    <AppContainer>
      {
        modalWindowOpened ?
        <Blur />
        :
        null
      }
      <InfoHeader
        windowOpened={modalWindowOpened}
        openWindow={openModalWindow}
        taskCounter={count}
      />
      <List 
        style={{zIndex: 999}}
        windowOpened={modalWindowOpened}
        openWindow={openModalWindow}
        setCount={setCount}
        data={data}
      />
    </AppContainer>
  )
}

export default App
