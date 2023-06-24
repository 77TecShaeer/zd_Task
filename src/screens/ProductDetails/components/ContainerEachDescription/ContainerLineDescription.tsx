import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../../../components/AppText/AppText';
import {styles} from './ContainerLineDescription.styles';

const ContainerLineDescription: React.FC<{
  label?: React.ReactNode;
  children: string | string[];
  boldThisValue?: boolean;
}> = ({label, children, boldThisValue}) => {
  return (
    <View style={styles.container}>
      <AppText fontSize={14} style={styles.label}>
        {label}
      </AppText>

      <AppText
        // eslint-disable-next-line react-native/no-inline-styles
        style={{...styles.value, fontWeight: boldThisValue ? '600' : 'normal'}}>
        {children}
      </AppText>
    </View>
  );
};

export default ContainerLineDescription;
