import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Top,
    PackageName,
    Status,
    Graphical,
    Textual,
    Text,
    StatusIcon,
    Line,
    Details,
    Info,
    InfoDetails,
    InfoHeader,
    SeeMore,
    SeeMoreText,
} from './styles';

export default function Pack() {
    return (
        <Container>
            <Top>
                <Icon name="local-shipping" size={25} color="#7D40E7" />
                <PackageName>Nome da entrega</PackageName>
            </Top>
            <Status>
                <Graphical>
                    <StatusIcon />
                    <Line />
                    <StatusIcon />
                    <Line />
                    <StatusIcon />
                </Graphical>
                <Textual>
                    <Text>Aguardando {'\n'} Retirada</Text>
                    <Text>Retirada</Text>
                    <Text>Entregue</Text>
                </Textual>
            </Status>
            <Details>
                <Info>
                    <InfoHeader>Data</InfoHeader>
                    <InfoDetails>07/04/2020</InfoDetails>
                </Info>
                <Info>
                    <InfoHeader>Cidade</InfoHeader>
                    <InfoDetails>Rio do Sul</InfoDetails>
                </Info>
                <Info>
                    <SeeMore>
                        <SeeMoreText>Ver detalhes</SeeMoreText>
                    </SeeMore>
                </Info>
            </Details>
        </Container>
    );
}
