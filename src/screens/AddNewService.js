import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AddNewService = ({ navigation }) => {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState(0);

  const addNewService = async () => {
    try {
      // Thêm dịch vụ mới vào Firestore
      await firestore().collection('services').add({
        name: serviceName,
        price: price,
        // Thêm các trường khác tùy thuộc vào yêu cầu của bạn
      });

      console.log('Dịch vụ đã được thêm thành công vào Firestore');
      // Hiển thị thông báo thành công
      alert('Dịch vụ đã được thêm thành công vào Firestore');

      // Sau khi thêm thành công, chuyển đến màn hình "Admin"
      navigation.navigate('Admin');
    } catch (error) {
      console.error('Lỗi khi thêm dịch vụ vào Firestore:', error);

      // Hiển thị thông báo lỗi
      alert('Lỗi khi thêm dịch vụ vào Firestore');
    }
  };

  return (
    <View style={{justifyContent:'center', margin:10, borderRadius:20}}>
        <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Service name * </Text>
        <TextInput
            style={{margin: 10, borderRadius:10}}
            label="Input service name"
            value={serviceName}
            underlineColor='transparent'
            onChangeText={(text) => setServiceName(text)}
        />
         <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Price * </Text>
        <TextInput
         style={{margin: 10, borderRadius:10}}
            label="input price service"
            value={price}
            underlineColor='transparent'
            onChangeText={price => setPrice(price)}

        />
       
        <View style={{justifyContent: 'center', padding: 10 }}>
            <Pressable 
            onPress={addNewService}
            style={{backgroundColor: "red", 
            alignItems:'center',
            padding: 15, 
            borderRadius:10, 
            
           }}
            >
              <Text  style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Add</Text>
            </Pressable>
        </View>
       
             
    </View>
);
};

const styles = StyleSheet.create({})

export default AddNewService;
