import React, { useEffect } from 'react'
import { ListItemContainer } from '../../styled-components/Wrappers/Wrappers'

const ListItem = ({data, number, name, description, deleteItem, setCount, openChangeWindow, changeWindowOpened, setType, setValue, setID}) => {
    
    const checkType = (type, value, id) => {
        openChangeWindow(!changeWindowOpened)
        setType(type)
        setValue(value)
        setID(id)
    }

    useEffect(() => {
        setCount(data.length)
        
        return () => {}
    })

    return(
        <ListItemContainer>
            <div>{number}.</div>
            <div>
                <img src='/icons/msg.png' alt='msg_icon' />
            </div>
            <div 
                onClick={() => {checkType('name', name, number - 1)}}
            >
                {name}
            </div>
            <div
                onClick={() => {checkType('description', description, number - 1)}}
            >
                {description}
            </div>
            <div
                onClick={() => {
                    deleteItem(number)
                    setCount(data.length)
                }}
            >
                <img src='/icons/remove.png' alt='remove_icon' />
            </div>
        </ListItemContainer>
    )
}

export default ListItem