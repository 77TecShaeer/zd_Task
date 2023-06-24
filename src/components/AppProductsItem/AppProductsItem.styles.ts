import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  flex: {
    flex: 1,
  },
  containerName: {
    marginHorizontal: 4,
  },
  discounted: {
    textDecorationLine: 'line-through',
    color: 'black',
  },
  sale: {
    color: '#DA2121',
  },
  separator: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
