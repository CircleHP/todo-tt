import React, { useState } from 'react'
import { ChangeWindowContainer } from '../../styled-components/Wrappers/Wrappers'
import { Input } from '../../styled-components/Inputs/Inputs'
import { Button } from '../../styled-components/Buttons/Buttons'

const ChangeWindow = ({data, type, value, openChangeWindow, changeWindowOpened}) => {
    const [newName, setNewName] = useState('')
    const [newDesription, setNewDesription] = useState('')

    // const makeChanges = () => {
    //     switch(type) {
    //         case 'name': {
    //             data[value].name = newName
    //             window.localStorage.setItem('name', newName)
    //         }
    //         break;
    //         case 'description': {
    //             data[value].description = newDesription
    //             window.localStorage.setItem('description', newDesription)
    //         }
    //         break;
    //         default:
    //         break;
    //     }

    //     openChangeWindow(!changeWindowOpened)
    // }

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

        <Button
            // onClick={() => makeChanges(type)}
        >
            Change it!
        </Button>

        </ChangeWindowContainer>
    )
}
export default ChangeWindow