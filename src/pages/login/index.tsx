import {useEffect, useState} from 'react';
import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LoginStepper from '../../components/login/stepper';
import logo from '../../../logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  const handleChange = (text: string) => {
    setEmail(text);
  };

  const handleClick = () => {
    setStep(step+1);
  }

  // useEffect(() => {
  //   if (email === 'eloy') {
  //     setStep(step + 1);
  //   }
  // }, [email]);

  return (
    <View style={style.container}>
      <Image style={style.logo} source={logo}/>
      <View  style={style.content}> 
        {step === 0 && (
          <LoginStepper
            placeholder={email}
            onChange={handleChange}
            onClick={handleClick}
            buttonLabel={'rola'}
          />
        )}
        {step === 1 && (
          <LoginStepper
            placeholder={email}
            onChange={handleChange}
            onClick={handleClick}
            buttonLabel={'rola 1'}
          />
        )}
      </View>
     
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    marginTop: 120,
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
    marginTop: 10,

  }
});
