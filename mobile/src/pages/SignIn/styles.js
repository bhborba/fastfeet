import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    background: #7d40e7;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    padding: 0 30px;
    align-self: stretch;
    margin-top: 50px;
`;

export const Input = styled.TextInput`
    background: #ffffff;
    height: 45px;
    border-radius: 4px;
    padding: 13px 20px;
    margin-bottom: 15.5px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background: #82bf18;
    height: 45px;
    border-radius: 4px;
    align-items: center;
    padding: 12px 0;
`;

export const Text = styled.Text`
    color: #ffffff;
    font-weight: bold;
`;
