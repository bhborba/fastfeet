import React from 'react';
import {format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
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

export default function Pack({data, navigation}) {
    function convertDate(date) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatedDate = format(
            utcToZonedTime(date, timezone),
            'dd/MM/yyyy'
        );

        return formatedDate;
    }
    return (
        <Container>
            <Top>
                <Icon name="local-shipping" size={25} color="#7D40E7" />
                <PackageName>{data.product}</PackageName>
            </Top>
            <Status>
                <Graphical>
                    <StatusIcon done />
                    <Line />
                    <StatusIcon done={data.start_date} />
                    <Line />
                    <StatusIcon done={data.end_date} />
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
                    <InfoDetails>{convertDate(data.created_at)}</InfoDetails>
                </Info>
                <Info>
                    <InfoHeader>Cidade</InfoHeader>
                    <InfoDetails>{data.recipient.city}</InfoDetails>
                </Info>
                <Info>
                    <SeeMore
                        onPress={() => navigation.navigate('Details', {data})}>
                        <SeeMoreText>Ver detalhes</SeeMoreText>
                    </SeeMore>
                </Info>
            </Details>
        </Container>
    );
}
