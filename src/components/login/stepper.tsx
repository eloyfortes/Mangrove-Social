import * as React from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

import { Input } from 'react-native-elements';

interface ILoginStepperProps {
  placeholder: string;
  buttonLabel: string;
  onClick: () => void;
  onChange: (value: string) => void;
}

const LoginStepper: React.FC<ILoginStepperProps> = ({
  placeholder,
  buttonLabel,
  onChange,
  onClick,
}) => {
  const handleChange = (text: string) => {
    onChange(text);
  };

  return (
    <>
      <TextInput
        style={style.input}
        onChangeText={handleChange}
        value={placeholder}
      />
      <Input
        placeholder='INPUT WITH CUSTOM ICON'
      />
      <View style={style.button}>
      <Button  title={buttonLabel} onPress={onClick}/>

      </View>
    </>
  );
};

const style = StyleSheet.create({

  content: {
    marginTop: 120,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black'
  },
  logo: {
   
    flexDirection: "row",
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100
  },
  button: {
    marginTop: 15,
    
  }
});

export default LoginStepper;
