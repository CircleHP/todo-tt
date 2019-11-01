import styled from 'styled-components'

export const Button = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    transition: all .25s;
    color: green;
    border: 2px solid green;

    :hover {
        cursor: pointer;
        color: white;
        background: black;
    }
`;

export const ButtonDisabled = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    transition: all .25s;
    color: red;
    border: 2px solid red;

    :hover {
        cursor: pointer;
    }
`;

export const ButtonWithIcon = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 6px;
    transition: all 1s;

    &:hover {
        cursor: pointer;
        img {
            opacity: 1;
        }
    }

    img {
        opacity: 0.6;
        width: 25%;
        transition: all .25s;
    }
`;