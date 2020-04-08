import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {RNCamera} from 'react-native-camera';

export default function Camera(data) {
    const {info} = data.navigation.state.params;
    const ref = useRef();

    async function takePicture() {
        if (ref) {
            const options = {
                quality: 0.5,

                pauseAfterCapture: true,
            };
            const image = await ref.current.takePictureAsync(options);

            data.navigation.navigate('ConfirmDelivery', {image});
        }
    }

    return (
        <View style={styles.container}>
            <RNCamera
                ref={ref}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text style={styles.buttonText}>Capturar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    buttonText: {
        fontSize: 14,
    },
});
