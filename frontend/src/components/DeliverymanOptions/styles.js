import styled from 'styled-components';

export const Container = styled.div``;

export const Badge = styled.button``;

export const Container2 = styled.div`
    position: relative;
`;

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
