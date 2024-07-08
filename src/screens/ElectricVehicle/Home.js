import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Home Screen</Text>
      <Button
        title="לחץ לפתיחת קריאה"
        onPress={() => navigation.navigate('form')}
      />
    </View>
  );
}
