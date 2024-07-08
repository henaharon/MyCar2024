import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FlatListZone = ({data}) => {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#3953F2" : "#DFF6FC";
    const color = item.id === selectedId ? "#ffffff" : "#000000";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        inverted={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListZone;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  title: {
    fontSize: 18,
  },
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
});
