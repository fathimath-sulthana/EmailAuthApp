import { View, Text ,Button,TextInput, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
const Login = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const SignUp =()=>{
    if(email !='' && password !=''){
      auth().createUserWithEmailAndPassword(email,password).then((res) =>{
        console.log(res)
        Alert.alert("created user successfully, you can login now");
      }).catch((error) =>{
        console.log("error_+++++++++++++++++++++++",error)
        Alert.alert(error.message)
      })
    }
    else{
      Alert.alert("Both fields are mandatory")
    }
  }

  const Login =() =>{
    auth().signInWithEmailAndPassword(email,password).then((res) =>{
            console.log("response",res);
            navigation.navigate("Home")
    })
    .catch((error) =>{
      console.log("error",error)
      Alert.alert(error.message);
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter email'
      value={email}
      keyboardType='email-address'
      onChangeText={setEmail}
      style={styles.inputContainer}
      />
       <TextInput
      placeholder='Enter password'
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
      style={styles.inputContainer}
      />
     <TouchableHighlight style={styles.button} onPress={SignUp}>
      <Text style={styles.text}> Sign Up</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.button} onPress={Login}>
      <Text style={styles.text}> Login</Text>
     </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    width:320,
    borderWidth:3,
    borderColor:'lightblue',
    padding:20,
    marginTop:10,
    borderRadius:10
  },
  button:{
    width: 150,
    height:30,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'lightblue',
    borderRadius:10
     },
     text:{
      fontSize:12,
      marginTop:7
     }
})
export default Login