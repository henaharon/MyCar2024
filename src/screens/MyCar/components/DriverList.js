// import React from 'react';
// import { View, Image, StyleSheet, FlatList } from 'react-native';
// import { ListItem } from 'react-native-elements';

// const drivers = [
//   { id: '1', name: 'Driver 1', image: require('../../../assets/driver1.jpg') },
//   { id: '2', name: 'Driver 2', image: require('../../../assets/driver2.jpg') },
//   // Add more drivers as needed
// ];

// const DriverList = () => {
//   return (
//     <FlatList
//       data={drivers}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <ListItem bottomDivider>
//           <Image source={item.image} style={styles.driverImage} />
//           <ListItem.Content>
//             <ListItem.Title>{item.name}</ListItem.Title>
//           </ListItem.Content>
//         </ListItem>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   driverImage: {
//     width: 50,
//     height: 50,
//   },
// });

// export default DriverList;
