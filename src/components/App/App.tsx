import React, { useEffect, useState } from 'react';
import { AppContainer, Blur } from '../../styled-components/Wrappers/Wrappers';
import List from '../List/List';
import InfoHeader from '../InfoHeader/InfoHeader';

const data: any = []

const App: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)
  const [modalWindowOpened, openModalWindow] = useState(false)

 

  const getItemsFromLocalStorage = () => {
    if(data.length === 0 && window.localStorage.length !== 0) {
        for(let i = 0; i < window.localStorage.length; i++) {
          // @ts-ignore
            data.push(JSON.parse(window.localStorage.getItem(i + 1)))
          // ignoring i as function wants it as string .-.
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
        windowOpened={modalWindowOpened}
        openWindow={openModalWindow}
        setCount={setCount}
        data={data}
      />
    </AppContainer>
  )
}

export default App
