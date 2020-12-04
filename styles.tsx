// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Message = styled.Text`
  color: ${(props: { success: boolean; }) => props.success ? 'green' : 'red'};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  border-color: white;
  border-width: 1px;
  padding: 10px 5px;
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
`;

export const Decimal = styled.Text`
  color: ${(props: {success: boolean}) => props.success ? '#1bfa1b' : 'red'};
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;