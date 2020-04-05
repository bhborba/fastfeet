import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto;
    flex-direction: column;
    padding: 0 30px;

    header {
        margin-top: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-size: 24px;
            color: #444444;
        }
        div {
            display: flex;
            button {
                margin-top: 9px;
                justify-content: center;
                align-items: center;
                display: flex;
                font-size: 14px;
                font-weight: bold;
                color: #ffffff;
                width: 112px;
                height: 36px;
                border: 0;
                border-radius: 4px;
                svg {
                    margin-right: 7px;
                }
            }

            .save {
                background: #7d40e7;
                margin-left: 16px;
            }

            .back {
                background: #cccccc;
                margin-top: 9px;
                justify-content: center;
                align-items: center;
                display: flex;
                font-size: 14px;
                font-weight: bold;
                color: #ffffff;
                width: 112px;
                height: 36px;
                border: 0;
                border-radius: 4px;
                svg {
                    margin-right: 7px;
                }
            }
        }
    }
`;

export const RecipientDetails = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 350px;
    background: #ffffff;
    padding: 30px;
    border-radius: 4px;

    p {
        margin-top: 18px;
        margin-bottom: 9px;
        color: #444444;
        font-size: 14px;
        font-weight: bold;
    }

    input {
        padding: 12px 25px;
        width: 100%;
        height: 45px;
        border: 1px solid #dddddd;
        border-radius: 4px;
    }

    div {
        display: flex;
        flex-direction: row;
        align-content: space-between;
        div {
            flex-direction: column;
            width: 20%;
        }
        div + div {
            margin-left: 16px;
        }
        .street {
            width: 60%;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        align-content: space-between;
        div {
            flex-direction: column;
            width: 33.3%;
        }
    }
`;
