import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Avatar = styled.Image`
    margin-top: 68px;
    margin-bottom: 40px;
    height: 137px;
    width: 137px;
    border-radius: 68.5px;
    align-self: center;
`;

export const Information = styled.View`
    padding: 0 36px;
    margin-bottom: 15px;
`;

export const Header = styled.Text`
    color: #666666;
    font-size: 12px;
`;

export const Data = styled.Text`
    color: #444444;
    font-size: 22px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    margin: 30px 36px;
    background: #e74040;
    height: 45px;
    border-radius: 4px;
    align-items: center;
    padding: 12px 0;
`;

export const Text = styled.Text`
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;
