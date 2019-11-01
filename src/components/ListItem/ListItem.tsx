import React, { useEffect } from 'react'
import { ListItemContainer } from '../../styled-components/Wrappers/Wrappers'

interface TListItemProps {
    data: any,
    number: number,
    name: string,
    description: string,
    deleteItem: Function,
    setCount: Function,
    openChangeWindow: Function,
    changeWindowOpened: boolean,
    setType: Function,
    setValue: Function,
    setID: Function,
}

const ListItem: React.FunctionComponent<TListItemProps> = ({data, number, name, description, deleteItem, setCount, openChangeWindow, changeWindowOpened, setType, setValue, setID}) => {
    
    const checkType = (type: string, value: string, id: number) => {
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