import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import { Root, Container, Header, } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as Facebook from 'expo-facebook';
import TabbedFooter from './components/TabbedFooter';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    await Facebook.initializeAsync("854476641733349", "Who Is Calling Me?");
    this.setState({ loading: false });
  }
render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <Root style={styles.rootContainer}>
          <Container style={styles.container}>
            <TabbedFooter />
          </Container>          
        </Root>
      );
    }
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  container: {
    backgroundColor:'#f3f3f3'
  }
});
