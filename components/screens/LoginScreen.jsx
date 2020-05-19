import React, { useState } from 'react';
import { View, Text, Icon, Item, Input, Content, Button, Left, Right, Form } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithFacebook, signInWithGoogle } from '../../utils/oath';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginScreen = (props) => {

    const validationSchema = Yup.object({
        email: Yup.string().email("Email format is incorrect").required("Email is required"),
        password: Yup.string().required("Password is required")
    });

    const doLogin = (values) => {
        console.log(values);
    };

    return (
        <View>
            <View style={styles.manLoginContainer}>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={doLogin}>
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <View>                                
                                <Item>
                                    <Icon name='ios-mail' />
                                    <Input placeholder='Email' 
                                        value={values.email} 
                                        onChangeText={handleChange("email")}/>
                                    {errors.email &&
                                        <Text style={styles.errorText}>{errors.email}</Text>
                                    }      
                                </Item>
                                <Item>
                                    <Icon name='ios-key' />
                                    <Input secureTextEntry={true} 
                                        placeholder='Password'
                                        onChangeText={handleChange("password")}/>
                                    {errors.password &&
                                        <Text style={styles.errorText}>{errors.password}</Text>
                                    } 
                                </Item>
                                <Button style={styles.loginButton} onPress={handleSubmit}>
                                    <Text style={styles.loginButtonText}>Sign In</Text>
                                </Button>
                        </View> )}
                </Formik>
            </View>
            <View style={styles.authLoginContainer}>
                <View style={styles.loginButtonContainer}>
                        <TouchableOpacity
                            style={styles.fbButton}
                            onPress={signInWithFacebook}
                        >
                            <Icon type="FontAwesome" name="facebook-f" size={20} style={styles.facebookIcon}>
                                <Text style={styles.facebookText}>  Sign in with Facebook</Text>
                            </Icon>                            
                        </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={signInWithGoogle}
                >
                    <Icon type="FontAwesome" name="google" size={20} style={styles.googleIcon}>
                    <Text style={styles.googleText}>  Sign in with Google</Text>
                    </Icon>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    manLoginContainer: {
        paddingHorizontal: 30,
        marginBottom: 30,
        marginTop: 30
    },
    authLoginContainer: {
        borderTopWidth: 1,
        paddingHorizontal: 30
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#5fb0f4'
    },
    errorText: { 
        fontSize: 10, 
        color: 'red' 
    },
    loginButtonText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20
    },
    loginButtonContainer: {
        marginVertical: 20
    },
    facebookIcon: {
        color: 'white'
    },
    facebookText: {
        color: 'white',
        fontSize: 20
    },
    fbButton: {
        backgroundColor: "#3f5c9a",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        width: "100%",
        height: 60,
        borderColor: "#3f5c9a",
        borderWidth: 1
    },
    googleButton: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 60,
        borderColor: "#3f5c9a",
        borderWidth: 1
    },
    googleText: {
        fontSize: 20
    },
})

export default LoginScreen;