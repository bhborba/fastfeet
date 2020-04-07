import styled from 'styled-components/native';

export const Container = styled.View`
    background: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    border-radius: 4px;

    margin-bottom: 28.5px;
`;

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 13px 14.5px;
`;

export const PackageName = styled.Text`
    font-size: 14px;
    color: #7d40e7;
    margin-left: 10px;
`;

export const Status = styled.View`
    padding: 0 20px;
    display: flex;
`;

export const Graphical = styled.View`
    padding: 0 15px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const StatusIcon = styled.View`
    background: #7d40e7;
    border: #7d40e7;
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
`;

export const Textual = styled.View`
    margin-top: 9px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.Text`
    color: #999999;
    font-size: 8px;
    text-align: center;
`;

export const Line = styled.View`
    display: flex;
    flex: 1;
    background: #7d40e7;
    height: 1px;
`;

export const Details = styled.View`
    margin-top: 10px;
    background: #f8f9fd;
    flex: 1;
    padding: 19.5px 21.5px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Info = styled.View``;

export const InfoHeader = styled.Text`
    color: #999999;
    font-size: 8px;
    font-weight: bold;
`;

export const InfoDetails = styled.Text`
    color: #444444;
    font-size: 12px;
    font-weight: bold;
`;

export const SeeMore = styled.TouchableOpacity``;

export const SeeMoreText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #7d40e7;
`;
