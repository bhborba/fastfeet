import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;

    }

    label {
        display: flex;
        display: inline-block;
        padding: 0 40%;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }

        img {
            align-self: center;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 1px dashed #dddddd;
            background: #eee;
        }

        .img {

            display: flex;
            flex-direction: column;
            align-items: center;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 1px dashed #dddddd;

            svg {
                margin-top: 40px;
            }

            p {
                margin-top: 0;
                color: #dddddd;
                font-size: 16px;
            }
        }

        input {
            display: none;
        }
    }
`;
