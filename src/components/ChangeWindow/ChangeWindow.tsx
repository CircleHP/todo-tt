import React, { useState } from 'react'
import { ChangeWindowContainer } from '../../styled-components/Wrappers/Wrappers'
import { Input } from '../../styled-components/Inputs/Inputs'
import { Button } from '../../styled-components/Buttons/Buttons'

interface TChangewindowProps {
    data: any,
    type: string,
    value?: string,
    id?: number,
    openChangeWindow: Function,
    changeWindowOpened: boolean,
}

const ChangeWindow: React.FunctionComponent<TChangewindowProps> = ({data, type, value, id, openChangeWindow, changeWindowOpened}) => {
    const [newName, setNewName] = useState('')
    const [newDesription, setNewDesription] = useState('')

    const makeChanges = () => {
        // @ts-ignore
        let changeItem = window.localStorage.getItem(id + 1)
        changeItem = changeItem ? JSON.parse(changeItem) : {}

        switch(type) {
            case 'name': {
                // @ts-ignore
                data[id].name = newName
                // @ts-ignore
                changeItem[type] = newName
                // @ts-ignore
                window.localStorage.setItem(id + 1, JSON.stringify(changeItem))
            }
            break;
            case 'description': {
                // @ts-ignore
                data[id].description = newDesription
                // @ts-ignore
                changeItem[type] = newDesription
                // @ts-ignore
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
                // @ts-ignore
                onClick={() => makeChanges(type)}
            >
                Change it!
            </Button>
        </div>

        </ChangeWindowContainer>
    )
}
export default ChangeWindow