import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: 'Hello World'};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
          <Button title='This is my button' onPress={this.handlerPress}/>
      </View>
    );
  }

  handlerPress = () => {
    this.setState({text: 'Button has been clicked'});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
