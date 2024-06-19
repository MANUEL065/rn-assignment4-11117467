import { useState } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput,} from 'react-native';



export default function Login({navigation}) {
    const [name, setName] = useState('Eric Atsu')
    const [email, setEmail] = useState('eric@gmail.com');

  
    const handleLogin = () => {
        navigation.navigate("Home", {name, email});
    };
 
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.subContainer}>
            <Text style={styles.group1Header}>Jobizz</Text>
            <Text style={styles.group2Header}>Welcome Back 👋</Text>
            <Text style={styles.group3Header}>Let’s log in. Apply to jobs!</Text>
          </View>
  <View style={styles.infoContainer}>
<View style={styles.name}>
    <View style={styles.nameContainer}>
    <TextInput placeholder='Name' style={styles.text} value={name} onChangeText={setName}></TextInput>
    </View>
    </View>
    <View style={styles.email}>
    <View style={styles.emailContainer}> 
    <TextInput placeholder='Email' style={styles.text} value={email} onChangeText={setEmail}></TextInput>
    </View>
</View>
     <TouchableOpacity style={styles.loginContainer} onPress={() =>  navigation.navigate("Home", {name: "Manuel Mensah", email: "Manuel@gmail.com"})}>
       <Text style={styles.Logins}>Log in</Text>
     </TouchableOpacity>
</View>
       <View style={styles.lineContainer}>
        <View style={styles.line1}></View>
        <Text style={styles.textLine}>Or continue with</Text>
        <View style={styles.line2}></View>
       </View>

       <View style={styles.logoContainer}>
            <View style={styles.appleBox}>    
                    <View style={styles.appleCircle}>
      <TouchableOpacity><Image source={require("../assets/apple.png")} style={styles.appleLogo}/></TouchableOpacity>
        </View>
        </View>
        <View style={styles.googleBox}>       
                  <View style={styles.googleCircle}>
          <TouchableOpacity><Image source={require("../assets/Google.png")} style={styles.googleLogo} /></TouchableOpacity>
             </View>
             </View>
            < View style={styles.facebookBox}>
                    <View style={styles.facebookCircle}>
         <TouchableOpacity><Image source={require("../assets/facebook.png")} style={styles.facebookLogo} /></TouchableOpacity>
               </View>
               </View>
               </View> 
       <View> 
        <Text style={styles.textFooter}>Haven’t an account? <Text style={{color: "#356899"}}>Register</Text></Text>
       </View>
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
     container: {
        backgroundColor: '#FAFAFD',
        flex: 1,
     },
     group1Header: {
        fontFamily: 'Poppins',
        color: '#356899',
        fontWeight: '600',
        lineHeight: '32px',
        fontSize: '22px',
        marginTop: 50,
        marginLeft: 30,
     },
     group2Header: {
         fontFamily: "Poppins",
         fontWeight: "600",
         lineHeight: "336px",
         textAlign: "left",
         fontSize: "24px",
         letterSpacing: "-0.015em",
         marginLeft: 30,
         marginTop: 10,
         lineHeight: "33.6px",
         width: "207px",
         height: "34px",
     },
    group3Header: {
        fontFamily: "Poppins",
        fontSize: "14px",
        lineHeight: "22.4px",
        textAlign: "left",
        marginLeft: 30,
        marginTop: 10,
        color: "#787878"
    }
,
name: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 327,
    height: 52,
    borderRadius: 10,
    top: 70,
    left: 33,
    
},
nameContainer: {
    border: 1,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    width: 327,
    height: 52,
    borderRadius: 10,
    flexDirection: "row",

},
 email: {
 flexDirection: "row",
justifyContent: "space-between",
   width: 327,
   height: 54,
   top: 80,
   left: 33,
   borderColor: "#000",
   borderRadius: 10,
   marginTop: 10,
 },

 emailContainer: {
    borderColor: "#AFB0B6",
    borderWidth: 1,
    width: 327,
    height: 52,
    borderRadius: 10,
    flexDirection: "row",
 },

text: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: "21px",
    fontSize: "16px",
    textAlign: "left",
    padding: 10,
    width: "43px",
    height: "21px",
  
},
infoContainer: {
    width: 338,
    height: 208,
  
},

loginContainer:{
    width: '327px',
    height: '56px',
    top: 103,
    left: 33,
    marginTop: 10,
    borderRadius: 5,
    padding: 16,
    backgroundColor: "#356899"

    
},
Logins:{
    width: "47px",
    height: "24px",
    fontWeight: 500,
    textAlign: "center",
    lineHeight: 24,
    fontSize: "16px",
    color: "#fff"
},

lineContainer: {
    width: "327px",
    height: "16px",
    top: 160,
    
},
line1: {
  width: 110,
  top: 10,
  left: 20,
  boder: 0.5,
  borderWidth: 0.4,
  borderColor: "#AFB0B6"
},

line2:
{
width: 110,
top: -8,
left: 283,
boder: 0.4,
borderWidth: 0.5,
 borderColor: "#AFB0B6"
},

textLine: {
    fontFamily: "Circular Std",
    fontSize: 13,
    fontWeight: 400,
    textAlign: "center",
    color: "#AFB0B6"
},


logoContainer: {
    width: 216,
    height: 56,
    top: 230,
    left: 79
 },
 appleBox: {
    width: 56,
    height: 56,
    top: "588px",
    left: 1
 },

appleCircle: {
   width: 56,
   height:56,
   top:"588px",
   left: 5,
   padding: 10,
   borderRadius: 60,
   backgroundColor: "#FFFFFF",
   
},
appleLogo: {
  width: 25.12,
height: 31.01,
top: -0,
left: 5.43
},
googleBox:{
   width: 56,
   height: 56,
   left: 102,
   top: -55,
},
googleCircle: {
   width: 56,
   height: 56,
   top: "588px",
   backgroundColor: "#FFFFFF",
   borderRadius: 60,
   padding: 10
},
googleLogo: {
   top: 2.33,
   left: 5.33,
},
facebookBox: {
   width: 56,
   height: 56,
   top: -110,
   left: 190
},

 facebookCircle: {
    width: 56,
   height: 56,
   borderRadius: 60,
   backgroundColor: "#FFFFFF",
   padding: 10
 },
 facebookLogo: {
    width: 28.5,
    height: 30.35,
    top: 1.82,
    left: 5.75,

 },

textFooter: {
  width: 188,
  height: 18,
  top: 300,
  left:120,
  fontFamily:"Circular Std",
  fontWeight: 400,
  textAlign: "center",
  lineHeight: 17.71
},


})


