import React, { useState } from 'react'
import { TouchableOpacity,View,StyleSheet, Text,TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
const Account = () => {
  const [input, setInput] = useState({
    secureTextEntry: true
  })
    const updateSecureTextEntry = () => {
      setInput({
        ...input,
        secureTextEntry: !input.secureTextEntry
      })
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome ! </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.icons}>
            <FontAwesome name="user-o" size={20}/>
            <TextInput placeholder="example@gmail.com" autoCapitalize='none' style={styles.text_input}/>
            <Feather name="check-circle" color="green" size={20} />
          </View>
          <Text style={[styles.text_footer, {marginTop :30}]}>Password</Text>
          <View style={styles.icons}>
            <Feather name="lock" size={20}/>
            <TextInput placeholder="Your password" secureTextEntry={input.secureTextEntry} autoCapitalize='none' style={styles.text_input}/>
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {input.secureTextEntry ? 
            <Feather name="eye-off" color="green" size={20} />
            : <Feather name="eye" color="green" size={20} />
              }
            </TouchableOpacity>
          </View>
              <View style={styles.button}>
              <TouchableOpacity style={[styles.signIn,{
                  borderWidth: 1,
                  borderColor: "#009387",
                  backgroundColor:"#009387"
                }]} onPress={() => console.log("sign in")}>
                  <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.signIn,{
                  borderWidth: 1,
                  borderColor: "#009387",
                  marginTop: 25
                }]}>
                  <Text style={[styles.textSign, {color:'#009387'}]}>Sign Up</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:"#009387"
  },
  header : {
    flex: 1, 
    paddingBottom:50,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },
  text_header : {
    fontSize:30,
    color: "#fff",
    fontWeight: 'bold'
  },
  footer : {
  flex: 3,
  backgroundColor: "#fff",
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  paddingVertical: 30,
  paddingHorizontal: 20
  },
  text_footer : {
    fontSize: 18
  },
  icons : {
    flexDirection:'row',
    marginTop : 10,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  text_input : {
    flex:1,
    paddingLeft: 10
  },
  button : {
    alignItems: "center",
    marginTop: 50
  },
  signIn : {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems:"center",
    borderRadius: 10
  },
  textSign : {
    fontSize: 18,
    fontWeight: 'bold'
  }

})

export default Account