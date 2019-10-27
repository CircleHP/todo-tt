import React from 'react'
import { headers } from '../../static-data/index'
import { ListHeaderContainer } from '../../styled-components/Wrappers/Wrappers'

const ListHeaders = () => {
    return(
        <ListHeaderContainer>
            {
                headers.map((item, i) => (
                    <div key={i}>{item}</div>
                ))
            }
        </ListHeaderContainer>
    )
}

export default ListHeaders