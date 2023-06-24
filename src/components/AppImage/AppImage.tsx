import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';

export type FastImageSource = number | Source;

interface AppImageProps extends Omit<FastImageProps, 'onError'> {
  LoadingComponent?: React.ComponentType;
  ErrorComponent?: React.ComponentType<{error: Error}>;
  onError?: (error: Error) => void;
  source: FastImageSource;
}

const AppImage: React.FC<AppImageProps> = ({
  source,
  style,
  LoadingComponent,
  ErrorComponent,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const handleLoadStart = () => {
    setIsLoading(true);
    setError(undefined);
  };

  const handleError = () => {
    setIsLoading(false);
    const errorMessage = 'Image failed to load';
    const errorObj = new Error(errorMessage);
    setError(errorObj);
    if (onError) {
      onError(errorObj);
    }
  };

  const renderLoadingComponent = () => {
    if (LoadingComponent) {
      return <LoadingComponent />;
    }
    return (
      <View style={[styles.loadingContainer, style]}>
        <ActivityIndicator />
      </View>
    );
  };

  const renderErrorComponent = () => {
    if (ErrorComponent && error) {
      return <ErrorComponent error={error} />;
    }
    return null;
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading && renderLoadingComponent()}
      {error && renderErrorComponent()}
      <FastImage
        source={source as FastImageSource}
        style={style}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppImage;
