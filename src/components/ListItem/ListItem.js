import React, { useEffect } from 'react'
import { ListItemContainer } from '../../styled-components/Wrappers/Wrappers'

const ListItem = ({data, number, name, description, deleteItem, setCount, openChangeWindow, changeWindowOpened, setType, setValue}) => {
    
    const checkType = (type, value) => {
        // openChangeWindow(!changeWindowOpened)
        setType(type)
        setValue(value)
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
                onClick={() => {checkType('name', number - 1)}}
            >
                {name}
            </div>
            <div
                onClick={() => {checkType('description', number - 1)}}
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