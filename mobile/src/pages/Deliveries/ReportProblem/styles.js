import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #7d40e7;
`;

export const Form = styled.View`
    padding: 34px 20px;
    margin-top: 34px;
`;

export const Input = styled.TextInput`
    background: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;
    height: 300px;
    padding: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 20px;
    background: black;
    border-radius: 4px;
    align-items: center;
    padding: 12px 0;
    height: 45px;
`;

export const Text = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`;
