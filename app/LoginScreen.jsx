import { Image,StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function SigninButton(){
    return (
      <View style={{ flexDirection: 'row',marginTop:20}}>
        <View style={{height:70,flex:1,justifyContent:'center',paddingLeft:30,}}>
          <Text style={{fontSize:20,color:'#0000',marginLeft: 40,fontWeight:'600'}}>Sign In</Text>
        </View>
        <View style={{height:70,flex:1,justifyContent:'center',alignItems:'flex-end'}}>
          <View style={{width:50,height:50,backgroundColor:'#367cfe',marginRight: 40,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
          <Icon size={30} color={'white'} name={'arrow-forward'} type='ionicon'/>
  
          </View>
        </View>
      </View>
    )
  }
  function Bottomsection(){
    return (
      <View style={{ flexDirection: 'row',marginTop:100}}>
        <View style={{height:70,flex:2,justifyContent:'center',paddingLeft:30,}}>
          <Text style={{fontSize:16,color:'#0000',marginLeft: 40,fontWeight:'600'}}>
            Sign Up</Text>
        </View>
        <View style={{height:70,flex:2,justifyContent:'center',alignItems:'flex-end',}}>
          <Text style={{fontSize:16,color:'#0000',marginRight:40,}}>Forget Password</Text>
        </View>
      </View>
    )
  }
function LoginField(){
    return (
      <View style={{marginTop: 100}}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

        
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height:70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
          }}>
       <TextInput placeholder='Enter Your Email' placeholderTextColor={'#000'}
       style={{
        fontSize: 18
       }}/>
      </View>
      <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height:70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 10,
          
          }}>
       <TextInput placeholder='Enter Your Password' placeholderTextColor={'#000'}
       style={{
        fontSize: 18
       }}/>
      </View>
      </KeyboardAwareScrollView>
      <SigninButton />
      <Bottomsection />
      </View>
      
    );
  

}
export const Login = () => {
  return (
    <View style={sty.container}>
            
            <Image style={{
              width:'100%',
              height: '100%',
            position:'absolute'
            }}source={
                require('../assets/images/images.png')
 
            }resizeMode='cover'/>
            <Text style={{fontSize: 40,color:'white',fontWeight:'600',marginTop: 100,marginLeft: 20,}}>{'Welcome\nBack'}</Text>
           
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
            <LoginField />
            </KeyboardAwareScrollView>

            
            
        </View>
  )
}

export default Login

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    }
});