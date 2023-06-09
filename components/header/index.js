import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../GlobalStyle';
import { AreaView, InputArea, LabelInput } from '../InputField';

export default function Header() {
 return (
   <View style={styles.container}>
    <Text style={[ GlobalStyles.FontLight, styles.labelHeader]}>VANY ÓTICAS</Text>
    <AreaView>
        <InputArea>
            <LabelInput>Pesquisar</LabelInput>
        </InputArea>
    </AreaView>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: 120
    },
    labelHeader: {
        color: '#fff',
        width: '50%',
        marginTop: '2%',
        marginLeft: '2%',
        fontSize: 42,
        fontWeight: '900'
    }
})