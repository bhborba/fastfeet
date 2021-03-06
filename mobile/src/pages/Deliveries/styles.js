import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    margin-top: 30px;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    border-radius: 50px;
    width: 68px;
    height: 68px;
`;

export const UserMessage = styled.View`
    flex-direction: column;
    margin-left: 12px;
`;

export const Welcome = styled.Text`
    color: #666666;
    font-size: 12px;
`;

export const UserName = styled.Text`
    color: #444444;
    font-weight: bold;
    font-size: 22px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Content = styled.View`
    margin-top: 22.5px;
`;

export const ContentHeader = styled.View`
    padding: 0 20px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const Deliver = styled.Text`
    color: #444444;
    font-size: 22px;
    font-weight: bold;
`;

export const Filter = styled.View`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

export const Pending = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const PendingText = styled.Text`
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    text-decoration-color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
    color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
    font-weight: bold;
`;

export const Delivered = styled.TouchableOpacity``;

export const DeliveredText = styled.Text`
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    text-decoration-color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
    color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
    font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 20},
})`
    margin-bottom: 100px;
`;
