import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #dcdcdc;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 70px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #101010;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #1f1e2589;
  color: #e6ffee;

  font-size: 18px;
  padding: ${Platform.OS === 'ios' ? '15px' : '11px'};
  margin-top: 30px;
  border-radius: 10px;
`;

export const DeleteUserButton = styled.TouchableOpacity`
  background-color: #ff0000;
  padding: 4px;
  border-radius: 5px;
  align-items: center;
`;

export const DeleteButtonText = styled.Text`
  color: #fff;
  font-size: 5px;
  font-weight: bold;
`;