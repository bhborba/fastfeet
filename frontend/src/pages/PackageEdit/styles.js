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
            }
        }
    }
`;

export const PackageDetails = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 224px;
    background: #ffffff;
    padding: 30px;
    border-radius: 4px;
    p {
        margin-bottom: 9px;
        color: #444444;
        font-size: 14px;
    }
    .selectForm {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        div {
            width: 48%;
            div {
                width: unset;
            }
        }
    }

    .product {
        width: 100%;
        height: 45px;
        padding: 12px 15px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        color: #999999;
        font-size: 16px;
    }
`;

export const selectStyles = {
    placeholder: () => ({
        fontSize: 16,
        color: '#999999',
    }),

    input: () => ({
        height: 45,
        fontSize: 16,
        color: '#999999',
    }),

    indicatorSeparator: () => null,
};
