import React, { useState } from 'react';
import { View, Text, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { signInWithFacebook, signInWithGoogle } from '../../utils/oath';
const RegisterScreen = (props) => {    
    return (
        <View>
            <Text>
                Register screen
                </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: "#3f5c9a",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 60,
                    borderColor: "#3f5c9a",
                    borderWidth: 1
                }}
                onPress={signInWithFacebook}
            >

                <Icon type="FontAwesome" name="facebook-f" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: "#3f5c9a",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 60,
                    borderColor: "#3f5c9a",
                    borderWidth: 1
                }}
                onPress={signInWithGoogle}
            >

                <Icon type="FontAwesome" name="google" size={20} color="white" />
            </TouchableOpacity>

        </View>
    );
}

export default RegisterScreen;