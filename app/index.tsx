import React from 'react';
import { Button,StyleSheet,Text,View,Image,TextInput } from 'react-native';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import Login from './LoginScreen';
import Signup from './SignupScreen';






function App(): JSX.Element{
    return (
        <View style={sty.container}>
            
            <Signup />

            
            
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    }
});

export default App;