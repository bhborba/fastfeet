import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Badge = styled.button`
    align-content: center;
    align-items: center;
    flex: 1;
`;

export const OptionList = styled.div`
    position: absolute;
    width: 150px;
    left: calc(50% - 75px);
    top: calc(100% + 10px);
    background: #ffffff;
    border-radius: 4px;
    padding: 15px 10px;
    display: ${props => (props.visible ? 'block' : 'none')};

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid rgba(0, 0, 0, 0.6);
        border-right: 10px solid rgba(0, 0, 0, 0.6);
        border-bottom: 10px solid #ffffff;
    }
`;

export const Option = styled.div`
    color: #999999;

    & + div {
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid #eeeeee;
    }

    button {
        font-size: 16px;
    }
`;
