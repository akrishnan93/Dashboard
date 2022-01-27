import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import React from 'react';
import DeprecatedStyleSheetPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedStyleSheetPropType';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style = {styles.inputContainer}>
        <TextInput
            placeholder="Email"
            // value = {}
            // onChangeText = {text => }
            style = {styles.input}
            />

        <TextInput
            placeholder="Password"
            // value = {}
            // onChangeText = {text => }
            style = {styles.input}
            secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: "center",
    }
});
