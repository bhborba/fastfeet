import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #7d40e7;
`;

export const Header = styled.Text`
    padding: 34px 20px;
    margin-top: 34px;
    text-align: center;
    margin-bottom: -32px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 20},
})``;

export const Problem = styled.View`
    background: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;
    margin-bottom: 16px;

    padding: 19px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ProblemDescription = styled.Text`
    color: #999999;
    font-size: 16px;
`;

export const ProblemDate = styled.Text`
    color: #c1c1c1;
    font-size: 12px;
`;
