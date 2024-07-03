import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';
import { GradientButton } from './GradientButton';

const clear = 'נקה';
const confirm = 'אישור ושליחה';
const yourSignature = 'החתימה שלך';

const Signature = () => {
    const signatureRef = useRef(null);

    const handleOK = signature => {
        console.log(signature);
    };

    const handleClear = () => {
        signatureRef.current.clearSignature();
    };

    const handleConfirm = () => {
        signatureRef.current.readSignature();
    };

    return (
        <View style={styles.container}>
            <View style={styles.signatureWrapper}>
                <SignatureCanvas
                    ref={signatureRef}
                    onOK={handleOK}
                    webStyle={styles.webStyle}
                    style={styles.signatureContainer}
                />
                <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                    <Text style={styles.clearButtonText}>{clear}</Text>
                </TouchableOpacity>
            </View>
            <GradientButton title={confirm} onPress={handleConfirm} />
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    signatureWrapper: {
        position: 'relative',
        width: windowWidth * 0.9,
        height: windowHeight * 0.3,
        borderColor: '#e6e6e9',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    signatureContainer: {
        width: '100%',
        height: '100%',
    },
    clearButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 3, 
    },
    clearButtonText: {
        color: 'red',
        fontSize: 16,
    },
    webStyle: `
    .m-signature-pad {
      box-shadow: none; 
      border: none;
    } 
    .m-signature-pad--footer {
      display: none; 
      margin: 0px;
    }
    .m-signature-pad--body canvas {
      stroke-width: 4px;
      border-radius: 10px;
    }
  `,
});

export default Signature;
