import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    TouchableOpacity 
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/GameLogo.svg';

const OnBoardingScreen =({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{marginTop:15}}>
          <Text style={styles.textStyle}> GAME STORE </Text>
        </View>
  
        <View style = {styles.container}>
        <GamingImg width={250} height={250} style ={{color: 'red'}}/>
        </View>
  
        <TouchableOpacity 
        style={styles.buttonstyle}
        onPress = {() => navigation.navigate('Login')}
        >
          <Text style={{color: 'white',fontSize: 15,fontFamily:'Baskerville-Bold'}}>
            Let's Go
          </Text>
          <MaterialIcons name ="arrow-forward" size={30} color = "white"/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonstyle: {
      borderRadius: 15,
      backgroundColor: '#D820D8',
      justifyContent: 'space-between',
      padding: 20,
      width: "90%",
      flexDirection: 'row',
      marginBottom: 20
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'red'
    }
  });

export default OnBoardingScreen
