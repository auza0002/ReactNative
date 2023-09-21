import { View } from 'react-native';
import { Button, Text, Dialog, Avatar, useTheme } from '@rneui/themed';
import { useStyles } from '../themes/Theme';
import { useState } from 'react';

const MyButton = (props) => (
  <Button
    buttonStyle={{ backgroundColor: 'rgba(200, 39, 39, 1)' }}
    containerStyle={{
      width: 200,
      marginHorizontal: 50,
      marginVertical: 10,
    }}
    {...props}
  />
);

export default function HomeScreen({ route, navigation }) {
  const styles = useStyles();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  function toggleDialog() {
    setIsVisible(false);
  }
  return (
    <View style={styles.container}>
      <View>
        <Avatar size={64} rounded icon={{ name: 'heartbeat', type: 'font-awesome' }} containerStyle={{ backgroundColor: '#eb1561', margin: 10 }} />
        <Avatar size={64} rounded title="SG" containerStyle={{ backgroundColor: '#3d4db7', margin: 10 }} />
      </View>
      <MyButton
        title="Click Me"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <View>
        <Text style={styles.txt}>Some text in a text component</Text>
      </View>
      <Dialog isVisible={isVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
    </View>
  );
}
