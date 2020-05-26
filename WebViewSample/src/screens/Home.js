import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
  const [links, setLinks] = useState([
    {title: 'Jscrambler Blog', link: 'https://blog.jscrambler.com'},
    {title: 'My Portfolio', link: 'https://amanhimself.dev'},
  ]);

  const handleButtonPress = (item) => {
    const {title, link} = item;
    navigation.navigate('Browser', {title, link});
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {links.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(item)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#356bca',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
