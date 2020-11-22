import * as React from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


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
    <Icon name="ios-person" size={30} color="#4F8EF7" />
    <View>
      {/* <Input
        placeholder='INPUT WITH ICON'
        leftIcon={{ type: 'font-awesome', name: 'inbox' }}
      /> */}
    </View>
      <TextInput
        style={style.input}
        onChangeText={handleChange}
        value={placeholder}
      />
      <View style={style.button}>
        <Button title={buttonLabel} onPress={onClick} />
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
    borderColor: 'black',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },
  button: {
    marginTop: 15,
  },
});

export default LoginStepper;
