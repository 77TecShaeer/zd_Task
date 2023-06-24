import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  itemImage: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.9,
    marginVertical: 16,
    paddingHorizontal: '5%',
    borderRadius: 9,
  },
  detailsContainer: {
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  descriptionContainer: {
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
});
