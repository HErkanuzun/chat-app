// Header.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // veya 'path/to/styles.js'

const Header = () => {
  return (
    <View style={styles.headerStyles.container}>
      <Text style={styles.headerStyles.text}>Header Component</Text>
    </View>
  );
};

export default Header;
