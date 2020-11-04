import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class OP extends React.Component {
  hs = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  constructor() {
    super();
    this.state = {
      rating: '',
      sellerrating: '',
      allbuy: '',
      getquality: '',
      productis: '',
      warning: '',
     shouldbuy:''
    };
    console.log(this.state.youbuy)
  }
  getdata = () => {
    var allrating = this.state.rating;
    var buy = this.state.allbuy
    var allsellerrating = this.state.sellerrating;
    if (allrating <= '3.5' && allrating >= '2.5') {
      this.setState({ getquality: 'not worth of purchase' });
    }
    if (allrating <= '2.5' && allrating >= '1') {
      this.setState({ getquality: 'bad quality' });
    }
    if (allrating > '3.5' && allrating < '4.5') {
      this.setState({ getquality: 'good product' });
    }
    if (allrating === '4.5') {
      this.setState({ getquality: 'better product' });
    }
    if (allrating === '5') {
      this.setState({ getquality: 'best product' });
    }
    if (
      allrating > '5' ||
      allrating < '1' ||
      allsellerrating > '5' ||
      allsellerrating < '1'
    ) {
      this.setState({
           warning:'please define only 1 to 5* rating',
        getquality: 'undefined',
        productis: 'undefined',
      });
    }
    if (allsellerrating <= '4.5' && allsellerrating > '3.5') {
      this.setState({ productis: ' 80% chances real' });
    }
    if (allsellerrating <= '3.5' && allsellerrating >= '1') {
      this.setState({ productis: '30% chances real' });
    }
    if (allsellerrating === '5') {
      this.setState({ productis: '99% chances real great' });
    }
    if(buy<='100' || buy<='99' && allsellerrating<='3.5' && allrating<='3.5'){
      this.setState({shouldbuy:'NO'})
    }else{
      this.setState({shouldbuy:'YES'})
    }
    
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'online products tester',
            style: { backgroundColor: 'red', fontSize: 18, color: '#ffffff' },
          }}
        />
        <TouchableOpacity onPress={this.hs}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../93634.png')}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: '#FFFF00' }}>
          enter product rating:-
        </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            this.setState({
              rating: text,
            });
          }}
          value={this.state.rating}
        />
        <Text style={{ textAlign: 'center', color: '#FFFF00' }}>
          enter Seller rating:-
        </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            this.setState({
              sellerrating: text,
            });
          }}
        />
        <Text style={{ textAlign: 'center', color: '#FFFF00' }}>
          total purcahsing product:-
        </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            this.setState({
              allbuy: text,
            });
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.getdata}>
          <Text style={{ color: 'white' }}>lets check</Text>
        </TouchableOpacity>
        <Text style={{ fontSize:20, textAlign: 'center', color: 'red' }}>
          {this.state.warning}
        </Text>

        <Text style={styles.outputs}>
          product quality:-{this.state.getquality}
        </Text>
        <Text style={styles.outputs}>
          The product is:-{this.state.productis}
        </Text>
        <Text style={styles.outputs}>should you buy:-{this.state.shouldbuy}</Text>
        <Text>
          *Note:-if you define a letter value So the app not working define only
          number value.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    width: 190,
    height: 30,
    borderBottomColor: 'white',
    borderLeftColor: 'blue',
    borderWidth: 3,
    borderRightColor: 'blue',
    borderTopColor: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    borderColor: 'blue',
    alignSelf: 'center',
    width: 80,
    backgroundColor: 'green',
    textAlign: 'center',
    borderRadius: 30,
  },
  outputs: {
    color: 'blue',
    fontSize: 20,
 
  },
});
