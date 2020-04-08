import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #7d40e7;
`;

export const CardList = styled.View`
    padding: 34px 20px;
    margin-top: 34px;
`;

export const Purple = styled.View``;

export const Card = styled.View`
    background: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 15px 12.5px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -10px;
`;

export const PackageHeader = styled.Text`
    margin-left: 4.88px;
    color: #7d40e7;
    font-weight: bold;
    font-size: 14px;
`;

export const Information = styled.View`
    margin-top: 15px;
`;

export const InformationHeader = styled.Text`
    color: #999999;
    font-weight: bold;
    font-size: 14px;
`;

export const InformationData = styled.Text`
    margin-top: 5px;
    color: #666666;
    font-size: 14px;
`;

export const Date = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Buttons = styled.View`
    background: #f8f9fd;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 14px 25px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
`;

export const MiddleButton = styled.View`
    align-items: center;
    border-color: #0000001a;
    border-left-width: 1px;
    border-right-width: 1px;
    padding: 0 20px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    text-align: center;
    border-left-color: black;
    color: #999999;
`;
