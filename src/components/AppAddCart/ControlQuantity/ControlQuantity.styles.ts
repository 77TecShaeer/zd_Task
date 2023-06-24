import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#EDEBF2',
    marginRight: 10,
    flex: 4,
    marginHorizontal: 8,
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 1000,
    maxHeight: 51,
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantityText: {
    textAlign: 'center',
    flex: 1,
  },
  quantityButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
});
