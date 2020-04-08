import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';

import api from '~/services/api';

import {
    Container,
    Header,
    List,
    Problem,
    ProblemDescription,
    ProblemDate,
} from './styles';

export default function ListProblems(data) {
    const {info} = data.navigation.state.params;
    const [problems, setProblems] = useState([]);

    function convertDate(date) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatedDate = format(
            utcToZonedTime(date, timezone),
            'dd/MM/yyyy'
        );

        return formatedDate;
    }

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get(`delivery/${info.id}/problems`);

            setProblems(response.data);
        }

        loadProblems();
    }, []);
    return (
        <Container>
            <Header>{info.product}</Header>

            <List
                data={problems}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                    <Problem>
                        <ProblemDescription>
                            {item.description}
                        </ProblemDescription>
                        <ProblemDate>
                            {convertDate(item.created_at)}
                        </ProblemDate>
                    </Problem>
                )}
            />
        </Container>
    );
}

ListProblems.navigationOptions = ({navigation}) => ({
    title: 'Visualizar problemas',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details');
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
