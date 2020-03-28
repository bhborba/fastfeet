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

export const DeliverysTable = styled.table`
    width: 100%;
    border: none;
    margin-top: 22px;
    border-collapse: collapse;
    thead th {
        padding: 12px 25px;
        color: #444444;
        text-align: left;
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
        background: #dff0df;
        margin-left: 25px;
        border-radius: 12px;

        .ball {
            margin-bottom: 2px;
            width: 10px;
            height: 10px;
            background: #2ca42b;
            margin-left: 6px;
            border-radius: 50%;
        }

        span {
            margin-top: 2px;
            margin-left: 6px;
            margin-right: 6px;
            font-weight: bold;
            color: #2ca42b;
            font-size: 14px;
            vertical-align: middle;
        }
    }

    .firstCell {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .lastCell {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        display: flex;
        padding: 0 30px;
        align-items: center;
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
