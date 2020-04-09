import React, {useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Backgroud from '~/components/Background';

import api from '~/services/api';

import {
    Container,
    ImageView,
    Image,
    Warn,
    WarnText,
    SubmitButton,
    SubmitText,
} from './styles';

export default function ConfirmDelivery(data) {
    const profile = useSelector((state) => state.user.profile);
    const {info} = data.navigation.state.params;
    const {image} = data.navigation.state.params;
    const [file, setFile] = useState();
    function handleAddImage() {
        data.navigation.navigate('Camera', {info});
    }

    async function handleSubmit() {
        if (!image) {
            Alert.alert(
                'Atenção!',
                'Tire uma foto da assinatura do destinatário para confirmar a entrega'
            );
        } else {
            try {
                const imageData = new FormData();

                imageData.append('file', {
                    uri: image.uri,
                    name: image.uri,
                    type: 'image/jpg',
                });

                const response = await api.post('files', imageData);

                const {id} = response.data;
                setFile(id);

                await api.delete(`deliveryman/${profile.id}/${info.id}`, {
                    signature_id: file,
                });

                Alert.alert('Sucesso!', 'Encomenda finalizada!');
                data.navigation.navigate('Deliveries');
            } catch (err) {
                Alert.alert('Erro!', 'Falha ao confirmar a entrega');
            }
        }
    }

    return (
        <Backgroud>
            <Container>
                <ImageView>
                    {image ? (
                        <Warn onPress={handleAddImage}>
                            <Image
                                source={{
                                    uri: image.uri,
                                }}
                            />
                        </Warn>
                    ) : (
                        <Warn onPress={handleAddImage}>
                            <WarnText>
                                Aperte aqui para inserir uma imagem de
                                assinatura
                            </WarnText>
                            <Icon name="camera-alt" size={50} color="#fff" />
                        </Warn>
                    )}
                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Enviar</SubmitText>
                    </SubmitButton>
                </ImageView>
            </Container>
        </Backgroud>
    );
}

ConfirmDelivery.navigationOptions = ({navigation}) => ({
    title: 'Confirmar entrega',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details');
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
