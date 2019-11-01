import React from 'react'
import { InfoHeaderContainer } from '../../styled-components/Wrappers/Wrappers'
import { ButtonWithIcon } from '../../styled-components/Buttons/Buttons'

interface TInfoHeaderProps {
    taskCounter: number,
    windowOpened: boolean,
    openWindow: Function,
}

const InfoHeader: React.FunctionComponent<TInfoHeaderProps> = ({taskCounter, windowOpened, openWindow}) => {
    return(
        <InfoHeaderContainer>
            <div>Task list / {taskCounter} items</div>
            <ButtonWithIcon
                onClick={() => {openWindow(!windowOpened)}}
            >
                Create new
                <img src='/icons/add.png' alt='add_icon' />
            </ButtonWithIcon>
        </InfoHeaderContainer>
    )
}

export default InfoHeader;