import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto;
    flex-direction: column;
    padding: 0 30px;

    header {
        h1 {
            font-size: 24px;
            color: #444444;
        }
        div {
            margin-top: 34px;
            display: flex;
            justify-content: space-between;
            button {
                margin-top: 9px;
                justify-content: center;
                align-items: center;
                display: flex;
                font-size: 14px;
                font-weight: bold;
                color: #ffffff;
                width: 142px;
                height: 36px;
                border: 0;
                background: #7d40e7;
                border-radius: 4px;
                svg {
                    margin-right: 7px;
                }
            }
        }
    }
`;

export const Form = styled.form`
    margin-top: 9px;
    background: #ffffff;
    display: flex;
    width: 237px;
    height: 36px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    align-items: center;
    svg {
        margin-left: 16px;
        color: #999999;
    }
    input {
        border: none;
        margin-left: 8px;
        margin-right: 8px;
        color: #999999;
        width: 170px;
        flex: 1;
    }
`;

export const DeliverymansTable = styled.table`
    width: 100%;
    border: none;
    margin-top: 22px;
    border-collapse: collapse;
    thead th {
        padding: 12px 25px;
        color: #444444;
        text-align: left;
    }

    .lastTh {
        text-align: right;
    }

    tbody td {
        background: #ffffff;
        height: 57px;

        span {
            margin-left: 25px;
        }
    }

    .status {
        display: inline-flex;
        align-items: center;
        padding: 6px;
        margin-left: 25px;
        border-radius: 12px;

        .ball {
            width: 10px;
            height: 10px;
            margin-left: 6px;
            border-radius: 50%;
        }

        span {
            margin-left: 6px;
            margin-right: 6px;
            font-weight: bold;
            font-size: 14px;

            p {
                margin-top: 3px;
            }
        }
    }

    .firstCell {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .lastCell {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        align-items: center;
        .options {
            text-align: right;
            margin-right: 28px;
        }
        button {
            background: none;
            border: 0;
            color: #c6c6c6;
        }
    }
    span {
        display: block;
        font-size: 16px;
        color: #666666;
    }

    .deliveryMan {
        display: flex;
        align-items: center;
        img {
            margin-left: 25px;
            height: 35px;
            border-radius: 50px;
        }

        span {
            margin-left: 5px;
        }
    }
`;
