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
export default class FoodScreen extends React.Component {
  hs = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  constructor() {
    super();
    this.state = {
      fat: '',
      sugar: '',
      protein: '',
      Fquality: '',
      CIE: '',
      warning: '',
    };
  }
  getResult = () => {
    var fat = this.state.fat;
    var sugar = this.state.sugar;
    var protein = this.state.protein;
    if (sugar > '3' || fat > '3' || fat > protein || sugar > protein) {
      this.setState({
        Fquality: 'this Food is not healthy ',
        CIE: 'NO!',
        warning: '',
      });
    }
    if (sugar > '3' && fat > '3') {
      this.setState({
        Fquality: ' this food is not  healthy',
        CIE: 'NO!',
        warning: '',
      });
    }
    if (sugar === fat && fat === protein && protein === sugar) {
      this.setState({
        Fquality: 'BEST',
        CIE: 'YES!! because food have equally energies',
        warning: '',
      });
    }
    if (fat === '' || sugar === '' || protein === '') {
      this.setState({
        warning: 'please define a value',
        Fquality: 'loading....',
        CIE: 'loading...',
      });
    }
    if (fat === '0' && sugar === '0' && protein === '0') {
      this.setState({
        warning: 'please define 1 to 9',
        Fquality: 'loading....',
        CIE: 'loading...',
      });
    }
    if (protein > sugar && protein > fat) {
      this.setState({
        Fquality: 'best & eatable',
        warning: '',
        CIE: 'YES!! because protein is bigger than sugar & fat',
      });
    }
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Welcome to food checker',
            style: { fontSize: 16, color: '#ffffff', backgroundColor: 'red' },
          }}
        />

        <TouchableOpacity onPress={this.hs}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../93634.png')}
          />
        </TouchableOpacity>
        <Text style={styles.TEXT}>enter fat:-</Text>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            this.setState({
              fat: text,
            });
          }}
          value={this.state.fat}
        />
        <Text style={{ marginTop: -20, marginLeft: 200 }}>gram</Text>
        <Text style={styles.TEXT}>enter protein:-</Text>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            this.setState({
              protein: text,
            });
          }}
          value={this.state.protein}
        />
        <Text style={{ marginTop: -20, marginLeft: 200 }}>gram</Text>
        <Text style={styles.TEXT}>enter Sugar:-</Text>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            this.setState({
              sugar: text,
              Fquality: 'loading...',
            });
          }}
          value={this.state.sugar}
        />
        <Text style={{ marginTop: -20, marginLeft: 200 }}>gram</Text>
        <TouchableOpacity style={styles.button} onPress={this.getResult}>
          <Text>OK</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 28, textAlign: 'center', color: 'red' }}>
          {this.state.warning}
        </Text>
        <Text style={styles.outputText}>
          Food quality:-{this.state.Fquality}
        </Text>

        <Text style={styles.outputText}>can I eat:-{this.state.CIE}</Text>

        <Text>**Note:-- define only single number 1 to 9</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    borderColor: 'red',
    width: 160,
    height: 30,
    borderWidth: 3,
    marginLeft: 90,
    textAlign: 'center',
    marginTop: 10,
  },
  TEXT: {
    textAlign: 'center',
    color: 'yellow',
    marginTop: 3,
    fontSize: 17,
  },
  button: {
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'orange',
    width: 60,
    marginLeft: 140,
    marginTop: 10,
  },
  outputText: {
    color: 'red',
    fontSize: 21,
 
  },
});
