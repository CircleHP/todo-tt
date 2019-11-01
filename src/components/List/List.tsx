import React, { useState } from 'react'
import ListHeaders from '../ListHeaders/ListHeaders'
import ListItem from '../ListItem/ListItem'
import ModalWindow from '../ModalWindow/ModalWindow'
import ChangeWindow from '../ChangeWindow/ChangeWindow'
import { ListContainer } from '../../styled-components/Wrappers/Wrappers'

interface TListProps {
    data: any,
    windowOpened: boolean,
    openWindow: Function,
    setCount: Function,
}

const List: React.FunctionComponent<TListProps> = ({data, windowOpened, openWindow, setCount}) => {
    const [changeWindowOpened, openChangeWindow] = useState(false)
    const [type, setType] = useState('')
    const [value, setValue] = useState(undefined)
    const [id, setID] = useState(undefined)

    const deleteItem = (item: any) => {
        if(data.length > 1) {
            data.splice(item.id - 1, 1)
            window.localStorage.removeItem(item.id)
        } else if (data.length <= 1){
            data.splice(0, 1)
            window.localStorage.clear()
        }
    }

    return(
        <ListContainer>
            <ListHeaders />
            {
                data &&
                data.map((item: any, i: number) => (
                    <ListItem 
                        key={i}
                        number={item.id}
                        name={item.name}
                        description={item.description}
                        changeWindowOpened={changeWindowOpened}
                        openChangeWindow={openChangeWindow}
                        deleteItem={deleteItem}
                        setCount={setCount}
                        data={data}
                        setType={setType}
                        setValue={setValue}
                        setID={setID}
                    />
                ))
            }
            {
                windowOpened ?
                <ModalWindow 
                    windowOpened={windowOpened}
                    openWindow={openWindow}
                    data={data}
                />
                :
                null
            }
            {
                changeWindowOpened ?
                <ChangeWindow 
                    openChangeWindow={openChangeWindow}
                    changeWindowOpened={changeWindowOpened}
                    data={data}
                    value={value}
                    type={type}
                    id={id}
                />
                :
                null
            }     
        </ListContainer>
    )
}

export default List