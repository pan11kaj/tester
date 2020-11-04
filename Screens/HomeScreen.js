import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
export default class HomeScreen extends React.Component {
 
  
  switchtoFoodScreen = () => {
    this.props.navigation.navigate('FoodScreen');
   
  };
  switchtoOP = () => {
    this.props.navigation.navigate('OP');

  };
  switchtoGadgets = () => {
    this.props.navigation.navigate('GadgetsScreen');
 
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Product Tester',
         style:{color:'#ffffff',backgroundColor:'red',fontSize:20} 
          }}
        />
        <Image />
        <Text style={styles.headtext}>select your product category:- </Text>
        <TouchableOpacity
          style={styles.buton}
          onPress={this.switchtoFoodScreen}>
          <Text style={styles.text}>Foods </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton} onPress={this.switchtoGadgets}>
          <Text style={styles.text}>Gadgtes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton} onPress={this.switchtoOP}>
          <Text style={styles.text}>Online products </Text>
        </TouchableOpacity>
        <Text
          style={{  textAlign: 'center', marginTop: 20 }}>
          about this app:-
        </Text>
        <Text style={{ fontFamily: 'monospace' }}>
          this app check your product real or fake many peoples buy a fake
          product and not find reality so we made this app its has 3 category
          foods Gadgtes and Online product check and give a reality to user.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buton: {
    flex: 1,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 90,
    width: 200,
    marginLeft: 60,
    marginTop: 20,
    justifyContent:'center'
  },
  text: {
    fontSize: 26,
    color: 'blue',
  },
  headtext: {
    textAlign: 'center',
    fontSize: 20,
   
  },
});
