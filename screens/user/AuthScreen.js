import React, {useReducer, useCallback, useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../store/actions/auth.action';
import Input from '../../components/Input';
import Colors from '../../constants/colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
  
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
  
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
  
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
    }
  
    return state;
  }

  


const AuthScreen = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    useEffect(() => {
      if (error) {
        Alert.alert("Ha ocurrido un error", error, [{ text: 'Ok' }]);
      }
    }, [error]);
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: '',
        },
        inputValidities: {
          email: false,
          password: false,
        },
        formIsValid: false,
      });
    
      const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
          type: FORM_INPUT_UPDATE,
          input: inputIdentifier,
          value: inputValue,
          isValid: inputValidity,
        });
      }, [dispatchFormState]);

      const onLoginHandler = async () => {
        try {
          await dispatch(login(formState.inputValues.email, formState.inputValues.password));
        } catch (err) {
          setError(err.message);
        }
      }

      const onSignupHandler = async () => {
        try {
          await dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } catch (err) {

          setError(err.message);
        }
      }


    return (
        <>
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View style={styles.container}>
                
                <View>
                <Input
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Por favor ingrese un email válido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <Input
                    id="password"
                    label="Clave"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize="none"
                    errorText="Por favor ingrese una clave de al menos 6 caracteres"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                </View>
                <View style={styles.footer}>
                <View style={styles.button}>
                    <Button title="ACCEDER" color={Colors.buttonPrimary} onPress={onLoginHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="REGISTRARSE" color={Colors.buttonSecondary}  onPress={onSignupHandler} />
                </View>
                </View>
            </View>   
        </KeyboardAvoidingView>
        
        </>
    )
}

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
      },
      container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
      },
      footer: {
        marginTop: 24,
      },
      button: {
        marginBottom: 8,
      },
});

export default AuthScreen;