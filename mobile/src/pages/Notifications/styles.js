import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.Text`
    text-align: center;
    font-size: 21px;
    font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 20},
})``;

export const Notification = styled.View`
    background: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;
    margin-bottom: 16px;

    padding: 20px;
`;

export const NotificationDescription = styled.Text`
    color: ${(props) => (props.unread ? 'black' : '#999999')};
    font-size: 16px;
`;

export const Bottom = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const NotificationDate = styled.Text`
    color: ${(props) => (props.unread ? 'black' : '#999999')};
    font-size: 12px;
`;

export const MarkAsRead = styled.TouchableOpacity``;

export const MarkAsReadText = styled.Text`
    color: ${(props) => (props.disabled ? '#999999' : 'black')};
    font-size: 13px;
    font-weight: bold;
`;
