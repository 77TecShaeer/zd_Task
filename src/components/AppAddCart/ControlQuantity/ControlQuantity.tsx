import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../AppText/AppText';
import {styles} from './ControlQuantity.styles';

export const CartQuantity: React.FC<{}> = React.memo(() => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
        <AppText color="#522973">+</AppText>
      </TouchableOpacity>

      <AppText style={styles.quantityText}>{quantity}</AppText>

      <TouchableOpacity onPress={handleDecrement} style={styles.quantityButton}>
        <AppText color="#522973">-</AppText>
      </TouchableOpacity>
    </View>
  );
});
