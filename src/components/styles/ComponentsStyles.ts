import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';

//Buttons

export const AddUserButton = styled(TouchableOpacity)`
  background-color: #3366ff;
  padding: 12px;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px; 
  border-color: #dcdcdc;
  align-items: center;
  margin-top: 30px;

  /* Text {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  } */
`;

export const ButtonText = styled(Text)`
  color: #dcdcdc;
  font-size: 15px;
  font-weight: bold;
`;


