import React, {memo, useState, useEffect} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {styles} from './Input.styles';
import {images} from '../../core/images';

type Props = {
  placeHolder: string;
};

const Input = (props: Props) => {
  const [input, setInput] = useState<any>('');
  const [secureEntry, setSecureEntry] = useState<boolean>(
    props.placeHolder === 'Password',
  );

  useEffect(() => {
    setSecureEntry(props.placeHolder === 'Password');
  }, [props.placeHolder]);

  const toggleIcon = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={{width: '95%', flexDirection: 'row'}}>
        <TextInput
          style={
            secureEntry || props.placeHolder === 'Password'
              ? styles.passwordInput
              : styles.textInput
          }
          placeholder={props.placeHolder}
          onChangeText={newText => setInput(newText)}
          defaultValue={input}
          secureTextEntry={secureEntry}
          placeholderTextColor={'grey'}
        />
        {props.placeHolder === 'Password' && (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={toggleIcon}>
            <Image
              style={styles.eyeIcon}
              source={secureEntry ? images.hide : images.show}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(Input);
