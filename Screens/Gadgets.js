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
export default class GadgetsScreen extends React.Component {
  hs = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  constructor() {
    super();
    this.state = {
      mfg: '',
      proversion: '',
      proQuality: '',
      isi: '',
      warning: '',
      buy: '',
    };
  }
  getoutput = () => {
    var mfg = this.state.mfg;
    var isi = this.state.isi;
    if (isi == 'no' || isi === 'NO' || isi === 'No' || isi === 'nO') {
      this.setState({ proQuality: 'Fake product' });
    }
    if (isi === 'yes') {
      this.setState({ proQuality: 'Real product' });
    }
    if (mfg < '2019') {
      this.setState({ proversion: 'old' });
    }

    if (mfg === '' || isi === '') {
      this.setState({
        proQuality: 'enter Value !!',
        proversion: 'enter value!!',
        buy: 'enter value!!',
      });
    }
    if (mfg === '2020') {
      this.setState({ proversion: 'NEW ' });
    }
    if (mfg > '2020') {
      this.setState({ warning: 'this year is not comed' });
    }
    if (mfg === '2019') {
      this.setState({ proversion: 'a year old ' });
    }
    if (mfg === '2020' || mfg === '2019' && isi === 'yes') {
      this.setState({ buy: 'yes you buy it' });
    }
    if (mfg <= '2021' && isi === 'no') {
      this.setState({ buy: 'No its fake' });
    }
    if (mfg <= '2018' && isi === 'yes') {
      this.setState({ buy: 'you can to find other ' });
    }
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Test your gadget',
            style: {
              color: 'white',
              fontSize: 20,
              fontFamily: 'Times New Roman',
            },
          }}
        />
        <TouchableOpacity onPress={this.hs}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../93634.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
         
            color: 'yellow',
            marginTop: 20,
            fontSize: 20,
          }}>
          Enter magnifacture date (year):-
        </Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            this.setState({
              mfg: text,
            });
          }}
          value={this.state.mfg}
        />
        <Text
          style={{
            textAlign: 'center',
            color: 'yellow',
     
            fontSize: 20,
          }}>
          match ISI mark to this image:- enter (YES/NO)---
        </Text>
        <Image style={styles.img} source={require('../isi.png')} />
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            this.setState({
              isi: text,
            });
          }}
          value={this.state.isi}
        />

        <TouchableOpacity style={styles.button} onPress={this.getoutput}>
          <Text style={{ color: '#ffffff' }}>OK Check!!</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'fantasy',
            textAlign: 'center',
            color: 'red',
            fontSize: 24,
          }}>
          {this.state.warning}
        </Text>
        <Text style={styles.outputs}>
          Product quality:-{this.state.proQuality}
        </Text>
        <Text style={styles.outputs}>
          product version:-{this.state.proversion}
        </Text>
        <Text style={styles.outputs}>Can I buy:-{this.state.buy}</Text>
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
    marginTop: 25,
  },
  img: {
    width: 110,
    height: 80,
    marginLeft: 100,
  },
  outputs: {
    color: 'red',
    fontFamily: 'horoscape',
    fontSize: 23,
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
    marginLeft: 120,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'green',

   
    width: 80,
  },
});
