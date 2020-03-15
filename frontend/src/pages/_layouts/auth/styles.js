import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #7d40e7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    div {
        background: #ffffff;
        box-shadow: 0px 0px 10px #00000033;
        border-radius: 4px;
        opacity: 1;
        width: 360px;
        height: 425px;
    }

    img {
        margin: 60px 0 0;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: #ffffff 0% 0%;
            border: 1px solid #dddddd;
            border-radius: 4px;
            height: 45px;
            padding: 0 15px;
            opacity: 1;
            margin: 0 30px 15px;

            &::placeholder {
                color: #999999;
                opacity: 1;
            }
        }

        span {
            color: #f64c75;
            align-self: center;
            margin: 0 0 10px;
        }

        p {
            text-align: left;
            letter-spacing: 0;
            color: #444444;
            opacity: 1;
            margin: 0 30px 9px;
        }

        button {
            height: 45px;
            background: #7d40e7 0% 0% no-repeat padding-box;
            border-radius: 4px;
            opacity: 1;
            border: 0;
            color: #ffffff;
            font-weight: bold;
            font-size: 16px;
            transition: background 0.2s;
            margin: 0 30px 0;

            &:hover {
                background: ${darken(0.03, '#7d40e7')};
            }
        }
    }
`;
