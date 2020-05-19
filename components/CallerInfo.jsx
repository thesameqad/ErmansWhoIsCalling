import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, CardItem, Left, Body, Button, Image, Thumbnail, Icon, Container, Content } from 'native-base';

export default function CallerInfo(props) {
    return (
        <Container style={{ height:'100%', width: '90%'}}>
           <Content contentContainerStyle={{backgroundColor:'#f3f3f3'}}>
                <Card style={{ flex: 0 }}>
                    <CardItem bordered>
                        <Left>
                            <Body>
                                <Text style={styles.title}>Phone Info</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text style={styles.labelText}>Name</Text>
                            <Text style={styles.valueText}>{props.caller.callerName}</Text>

                            <Text style={styles.labelText}>Country Code</Text>
                            <Text style={styles.valueText}>{props.caller.countryCode}</Text>

                            <Text style={styles.labelText}>National Phone Number Format</Text>
                            <Text style={styles.valueText}>{props.caller.nationalFormat}</Text>

                            <Text style={styles.labelText}>Exact Phone Number</Text>
                            <Text style={styles.valueText}>{props.caller.phoneNumber}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainColor: {
        color: '#5fb0f4'
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    valueText: {
        fontSize: 18
    },
    title: {
        fontSize: 30,
        color: '#5fb0f4'
    }
});