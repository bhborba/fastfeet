import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: green;
    flex: 1;
    padding: 0 20px;
`;

export const ImageView = styled.View`
    padding: 0 20px;
    flex: 1;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Image = styled.Image`
    width: 335px;
    height: 444px;
`;

export const Warn = styled.TouchableOpacity`
    padding: 20px;
    width: 335px;
    height: 444px;

    align-items: center;
`;

export const WarnText = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
    background: #7d40e7;
    height: 45px;
    align-items: center;
    border-radius: 4px;
    padding: 12px 0;
`;

export const SubmitText = styled.Text`
    color: #ffffff;
    font-weight: bold;
`;
