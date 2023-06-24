import React from 'react';
import {View} from 'react-native';
import AppImage, {FastImageSource} from '../AppImage/AppImage';
import {styles} from './AppAvatar.styles';

interface AppAvatarProps {
  source: FastImageSource;
}

const AppAvatar: React.FC<AppAvatarProps> = ({source}) => {
  return (
    <View style={styles.container}>
      <AppImage source={source} style={styles.avatar} />
    </View>
  );
};

export default AppAvatar;
