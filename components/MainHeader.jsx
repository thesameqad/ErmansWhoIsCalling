import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Body, Header, View } from 'native-base';

const MainHeader = () => {
    return (
        <Header style={styles.header}>
            <Body>
                <View style={styles.image}>
                    <Text style={styles.text}>Who is calling me?</Text>                    
                </View>
                
            </Body>
        </Header>
    );
}

const styles = StyleSheet.create({ 
    header: {
        backgroundColor: '#f3f3f3'
    },
    image: {
        marginVertical: 40,
        marginHorizontal: 30
    },
    text: {
        color: '#5fb0f4',
        fontSize: 30
    }
})

export default MainHeader;