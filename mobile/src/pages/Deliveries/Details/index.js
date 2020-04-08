import React from 'react';
import {format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Backround from '~/components/Background';

import {
    Container,
    CardList,
    Purple,
    Card,
    Header,
    PackageHeader,
    Information,
    InformationHeader,
    InformationData,
    Date,
    Buttons,
    Button,
    MiddleButton,
    ButtonText,
} from './styles';

export default function Details(data) {
    const info = data.navigation.state.params.data;

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
            <CardList>
                <Card>
                    <Header>
                        <Icon name="local-shipping" size={25} color="#7D40E7" />
                        <PackageHeader>Informações da Entrega</PackageHeader>
                    </Header>
                    <Information>
                        <InformationHeader>DESTINATÁRIO</InformationHeader>
                        <InformationData>{info.product}</InformationData>
                    </Information>
                    <Information>
                        <InformationHeader>
                            ENDEREÇO DE ENTREGA
                        </InformationHeader>
                        <InformationData>
                            {info.recipient.street}, {info.recipient.number},{' '}
                            {info.recipient.city} - {info.recipient.state}
                        </InformationData>
                    </Information>
                    <Information>
                        <InformationHeader>PRODUTO</InformationHeader>
                        <InformationData>{info.product}</InformationData>
                    </Information>
                </Card>

                <Card>
                    <Header>
                        <Icon name="event" size={25} color="#7D40E7" />
                        <PackageHeader>Situação da entrega</PackageHeader>
                    </Header>
                    <Information>
                        <InformationHeader>STATUS</InformationHeader>
                        <InformationData>
                            {info.end_date ? 'Entregue' : 'Pendente'}
                        </InformationData>
                    </Information>
                    <Date>
                        <Information>
                            <InformationHeader>
                                DATA DE RETIRADA
                            </InformationHeader>
                            <InformationData>
                                {info.start_date
                                    ? convertDate(info.start_date)
                                    : '-- / -- / --'}
                            </InformationData>
                        </Information>
                        <Information>
                            <InformationHeader>
                                DATA DE ENTREGA
                            </InformationHeader>
                            <InformationData>
                                {info.end_date
                                    ? convertDate(info.end_date)
                                    : '-- / -- / --'}
                            </InformationData>
                        </Information>
                    </Date>
                </Card>

                <Buttons>
                    <Button
                        onPress={() =>
                            data.navigation.navigate('ReportProblem', {info})
                        }>
                        <Icon name="highlight-off" size={25} color="#E74040" />
                        <ButtonText>Informar{'\n'}Problema</ButtonText>
                    </Button>

                    <MiddleButton>
                        <Button
                            onPress={() =>
                                data.navigation.navigate('ListProblems', {info})
                            }>
                            <Icon
                                name="info-outline"
                                size={25}
                                color="#E7BA40"
                            />
                            <ButtonText>Visualizar{'\n'}Problemas</ButtonText>
                        </Button>
                    </MiddleButton>

                    <Button>
                        <Icon name="alarm-on" size={25} color="#7D40E7" />
                        <ButtonText>Confirmar{'\n'}entrega</ButtonText>
                    </Button>
                </Buttons>
            </CardList>
        </Container>
    );
}

Details.navigationOptions = ({navigation}) => ({
    title: 'Detalhes da encomenda',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Deliveries');
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
