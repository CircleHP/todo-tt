import React, { useState } from 'react'
import { ModalWindowContainer, ModalWindowHeader } from '../../styled-components/Wrappers/Wrappers'
import { Input } from '../../styled-components/Inputs/Inputs'
import { Button, ButtonDisabled } from '../../styled-components/Buttons/Buttons'

interface TModalWindowProps {
    windowOpened: boolean,
    openWindow: Function,
    data: any,
}

const ModalWindow: React.FunctionComponent<TModalWindowProps> = ({windowOpened, openWindow, data}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(data.length + 1)

    const saveChanges = () => {
        data.push({
            name: name,
            description: description,
            id: id
        })
        // @ts-ignore
        window.localStorage.setItem(id, JSON.stringify(data[data.length - 1]))
        openWindow(!windowOpened)
    }

    const toggleWindow = () => {
        openWindow(!windowOpened)
        setName('')
        setDescription('')
    }

    return(
        <ModalWindowContainer>
            <ModalWindowHeader>
                <div>
                    New Task
                </div>
                <div
                    onClick={() => {openWindow(!windowOpened)}}
                >
                    <img src='/icons/remove.png' alt='remove_icon' />
                </div>
            </ModalWindowHeader>

            <div>Name:</div>
            <Input
                onChange={(e: any) => setName(e.target.value)} 
            />

            <div>Description:</div>
            <textarea
                onChange={(e: any) => setDescription(e.target.value)} 
            />

            <div>
                <Button
                    onClick={() => {toggleWindow()}}
                >
                    Close
                </Button>
                {
                    name.length === 0 && description.length === 0 ?
                    <ButtonDisabled>
                        Save
                    </ButtonDisabled>
                    :
                    <Button
                        onClick={() => {saveChanges()}}
                    >
                        Save
                    </Button>
                }
                
            </div>
        </ModalWindowContainer>
    )
}

export default ModalWindow