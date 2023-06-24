import React from 'react';
import {View, Text} from 'react-native';

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({error}) => {
  return (
    <View>
      <Text>Error: {error}</Text>
    </View>
  );
};

export default ErrorComponent;
