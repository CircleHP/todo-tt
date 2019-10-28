import React, { useState, useEffect } from 'react'
import { ChangeWindowContainer } from '../../styled-components/Wrappers/Wrappers'
import { Input } from '../../styled-components/Inputs/Inputs'
import { Button } from '../../styled-components/Buttons/Buttons'

const ChangeWindow = ({data, type, value, id, openChangeWindow, changeWindowOpened}) => {
    const [newName, setNewName] = useState('')
    const [newDesription, setNewDesription] = useState('')

    const makeChanges = () => {
        let changeItem = window.localStorage.getItem(id + 1)
        changeItem = changeItem ? JSON.parse(changeItem) : {}

        switch(type) {
            case 'name': {
                data[id].name = newName
                changeItem[type] = newName
                window.localStorage.setItem(id + 1, JSON.stringify(changeItem))
            }
            break;
            case 'description': {
                data[id].description = newDesription
                changeItem[type] = newDesription
                window.localStorage.setItem(id + 1, JSON.stringify(changeItem))
            }
            break;
            default:
            break;
        }

        console.log(changeItem)
        openChangeWindow(!changeWindowOpened)
    }

    return (
        <ChangeWindowContainer>
        {
            type === 'name' ? 
            <>
            <div>Name:</div>
            <Input 
                placeholder={'Old: ' + value}
                onChange={(e) => setNewName(e.target.value)} 
            />
            </>
            :
            <>
            <div>Description:</div>
            <Input 
                placeholder={'Old: ' + value}
                onChange={(e) => setNewDesription(e.target.value)} 
            />
            </>
        }

        <div>
            <Button
                onClick={() => {openChangeWindow(!changeWindowOpened)}}
            >
                Close
            </Button>
            <Button
                onClick={() => makeChanges(type)}
            >
                Change it!
            </Button>
        </div>

        </ChangeWindowContainer>
    )
}
export default ChangeWindow