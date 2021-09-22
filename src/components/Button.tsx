import  React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';
import { AddUserButton, ButtonText } from './styles/ComponentsStyles';

//type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({title, ...rest }: ButtonProps){
    return(
        <>
          <AddUserButton activeOpacity={0.6} {...rest} >
            <ButtonText>{title}</ButtonText>
          </ AddUserButton>
        </>
    )
}
