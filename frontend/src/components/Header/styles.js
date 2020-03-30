import styled from 'styled-components';

export const Container = styled.div`
    background: #ffffff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        .selected {
            color: #444444;
        }

        a {
            font-weight: bold;
            color: #999999;
            margin-right: 21px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    margin-left: 20px;
    padding-left: 20px;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #666666;
        }

        button {
            float: right;
            border: none;
            background: none;
            display: block;
            margin-top: 5px;
            font-size: 14px;
            color: #de3b3b;
        }
    }
`;
