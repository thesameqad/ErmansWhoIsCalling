import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Container, Icon, Input, Item, Toast, Content} from 'native-base';
import {TwilioService} from '../services/TwilioServiceClass';
import CallerInfo from '../CallerInfo';

const MainScreen = () => 
{
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPhoneFound, setIsPhoneFound] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const defaultCaller = {
    callerName:"Anton Y",
    callerType:"Personal",
    countryCode: "US",
    nationalFormat: "3127148503",
    phoneNumber:"3127148503"
  };
  const [callerInfo, setCallerInfo] = useState(defaultCaller);
  const doSearch = () => {
    if(!phoneRegExp.test(phoneNumber))
    {
      setIsPhoneValid(true);
      return;
    } else {
      setIsPhoneValid(false);
    }
    setIsLoading(true);
    TwilioService.getCallerNameByPhoneNumber(phoneNumber)
      .then((req) => {
        if(req.status == '200')
        {
          setIsPhoneFound(true);
          setCallerInfo({
            callerName:req.data.callerName["caller_name"],
            callerType:req.data.callerName["caller_type"],
            countryCode:req.data.countryCode,
            nationalFormat: req.data.nationalFormat,
            phoneNumber: req.data.phoneNumber
          })
          console.log('callerName:', req.data.callerName);
        }
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        setIsPhoneFound(false);
        if(error.response) {
          if(error.response.status == '404') {
            Toast.show({
              text: 'Phone Number not found. Try again',
              buttonText: 'Okay',
              duration: 5000,
              position: 'top',
              type: 'warning'
            })
          } else {
            Toast.show({
              text: 'Oops, something unexpected happend',
              buttonText: 'Okay',
              duration: 5000,
              position: 'top',
              type: 'danger'
            })
          }
          
        }            
      });
  }
  return (
    <Content>
      <View style={styles.container}>
          <View style={styles.mainPane}>
            <Image source={require('../../assets/logo.png')} />
            {isLoading ?
              <View style={styles.loadingPane}>
                <Image source ={require('../../assets/loading-transparent.gif')} />
              </View>
            : 
              <View>
                <Item rounded style={styles.searchBox}>            
                  <Input 
                    onSubmitEditing={doSearch} 
                    placeholderTextColor='#5fb0f4' 
                    placeholder='ex. 9127530000' 
                    value={phoneNumber}
                    onChangeText={(phone) => setPhoneNumber(phone)} />                
                  <Icon type="FontAwesome" 
                    style={styles.mainColor} 
                    name="times" 
                    onPress={() => setPhoneNumber('')} />
                  <Icon type="FontAwesome" style={styles.mainColor} name="search" onPress={doSearch} />
                </Item>
                {isPhoneValid && <Text style={styles.validationError}>Please, enter a valid phone number</Text>}
                {isPhoneFound &&
                  <View style={styles.bottomPane}>
                    <CallerInfo caller={callerInfo} />
                  </View>
                }
              </View>
            }
          </View>
      </View>
    </Content>
 )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingPane: {
      width:'100%',
      flexDirection:'row',
      justifyContent: 'center',
    },
    bottomPane: {
      width:'100%',
      paddingTop:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainPane: {
      paddingTop:30
    },
    searchBox: {
        marginLeft: 20,
        marginRight: 20
    },
    mainColor: {
      color: '#5fb0f4'
    },
    validationError : {
      color: 'red',
      marginLeft: 20,
      fontSize:20
    }
  });

export default MainScreen;