import React from 'react';
import { Button,StyleSheet,Text,View,Image } from 'react-native';

function App(): JSX.Element{
    return (
        <View style={sty.container}>
            <Image source={
                require('./assets/images.png')
 
            }/>
            <Text style={sty.heading}>Hello World!</Text>
            <Button title="Click Me" onPress={() => alert('Button Pressed')} />
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default App;