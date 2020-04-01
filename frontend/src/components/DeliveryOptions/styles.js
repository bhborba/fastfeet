import styled from 'styled-components';

export const Container = styled.div``;

export const Container2 = styled.div`
    position: relative;
`;

export const Badge = styled.button``;

export const OptionList = styled.div`
    text-align: left;
    position: absolute;
    width: 150px;
    left: calc(95% - 75px);
    top: calc(100% + 10px);
    background: #ffffff;
    border-radius: 4px;
    padding: 15px 10px;
    display: ${props => (props.visible ? 'block' : 'none')};
    box-shadow: 0px 0px 2px #00000026;

    div {
        display: flex;
        align-items: center;
    }

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #aaa;
    }
`;

export const Option = styled.div`
    color: #999999;
    .icon {
        margin-right: 8px;
    }
    & + div {
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid #eeeeee;
    }

    button {
        font-size: 16px;
    }
`;

export const Modal = styled.div`
    .background {
        background: #000000;
        opacity: 0.7;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: 400ms;
        display: ${props => (props.visible ? 'flex' : 'none')};
    }
    .content {
        padding: 25px;
        flex-direction: column;
        position: fixed;
        display: ${props => (props.visible ? 'flex' : 'none')};
        background: #ffffff;
        width: 450px;
        height: 400px;
        align-items: flex-start;
        border-radius: 4px;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -225px;

        .infos {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            & + div {
                margin-top: 6px;
                padding-top: 6px;
                border-top: 1px solid #eeeeee;
            }

            p {
                font-size: 16px;
                margin: 8px 0;
            }

            .header {
                color: #444444;
                font-weight: bold;
                font-size: 14px;
            }

            .dateInfo {
                color: #666666;
                font-weight: bold;
                margin-right: 5px;
            }
            .signature {
                width: 100%;
                img {
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    margin-top: 23px;
                    width: 234px;
                    height: 36px;
                }
            }
        }
    }
`;
