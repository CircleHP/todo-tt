import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
`;

export const ListContainer = styled.div`
    width: 1200px;
    min-height: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
    font-family: 'Open Sans', sans-serif;
`;

export const InfoHeaderContainer = styled.div`
    width: 1200px;
    height: 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    user-select: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;  
`;

export const ListHeaderContainer = styled.div`
    width: 1200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    user-select: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    
    &>div {
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
            &:first-child {
                width: 50px
            }
            &:nth-child(2) {
                width: 50px
            }
            &:nth-child(3) {
                width: 300px
            }
            &:nth-child(4) {
                width: 650px
            }
            &:nth-child(5) {
                width: 150px
            }
    }
`;

export const ListItemContainer = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    
    &>div {
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
            &:first-child {
                width: 50px
                height: auto
            }
            &:nth-child(2) {
                width: 50px
                img {
                    width: 80%;
                }
            }
            &:nth-child(3) {
                width: 300px
                height: auto
                word-wrap: break-word;
            }
            &:nth-child(4) {
                width: 650px
                tex-align: justify
                word-wrap: break-word;
                height: auto
            }
            &:nth-child(5) {
                width: 150px
                img {
                    width: 25%;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
    }
`;

export const ModalWindowContainer = styled.div`
    position: absolute;
    top: 235px;
    width: 600px;
    height: 600px;
    background: white;
    border: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &>div:nth-child(2) {
        margin-top: 12px;
        width: 90%;
    }

    &>div:nth-child(4) {
        margin-top: 12px;
        width: 90%;
    }

    &>div:last-child {
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    textarea {
        width: 546px;
        height: 200px;
        font-size: 24px;
        padding: 0 4px;
    }
`;

export const ModalWindowHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 12px

    &>div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        padding: 0 22px;

        img {
            width: 50%;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const ChangeWindowContainer = styled.div`
    width: 450px;
    height: 200px;
    position: absolute;
    top: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    border: 2px solid rgba(0, 0, 0, 0.3);

    &>div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 200px;
    }
`;

export const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`;