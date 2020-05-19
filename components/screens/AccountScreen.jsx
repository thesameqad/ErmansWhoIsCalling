import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Left, Right } from 'native-base';
import MainHeader from '../MainHeader';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AccountStack() {
    return (
        <Stack.Navigator
            initialRouteName="Account">
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
}

const AccountScreen = (props) => {
    return (
        <Container style={styles.container}>
            <MainHeader />
            <Content contentContainerStyle={styles.content}>
                <List style={styles.menu}>
                    <ListItem itemDivider>
                        <Text>Account</Text>
                    </ListItem>
                    <ListItem onPress={() => props.navigation.navigate('Login')}>
                        <Left>
                            <Text>Sign in</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => props.navigation.navigate('Register')}>
                        <Left>
                            <Text>Register</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Support</Text>
                    </ListItem>
                    <ListItem>
                        <Text>FAQ</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Give us Feedback</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Legal</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Terms and Conditions</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Privacy Policy</Text>
                    </ListItem>
                </List>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>
                        Developed by Antony Erman (Yermolayev)
                        </Text>
                    <Text style={styles.bottomText}>
                        Thank of blame only him:)
                        </Text>
                </View>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3f3'
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    menu: {
        backgroundColor: 'white'
    },
    bottomText: {
        color: '#9b9b9b'
    },
    bottom: {
        marginVertical: 20,
        marginLeft: 10
    }
});

export default AccountStack;