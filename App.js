import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';

const App = () => {
  const [offsetState, setOffSetState] = useState('');
  const count = useRef(null);
  console.log('offsetState', offsetState);

  const DATAS = [
    {
      id: 1,
      text: 'Tâches à faire',
      color:
        Number(offsetState) >= 0 && Number(offsetState) < 293.3333435058594
          ? 'white'
          : 'red',
    },
    {
      id: 2,
      text: 'Usages',
      color:
        Number(offsetState) >= 293.3333435058594 &&
        Number(offsetState) < 435.80950927734375
          ? 'white'
          : 'blue',
    },
    {
      id: 3,
      text: 'Module de prévention',
      color:
        Number(offsetState) >= 689.90478515625 &&
        Number(offsetState) < 834.2857055664062
          ? 'white'
          : 'yellow',
    },
    {
      id: 4,
      text: 'Dejà fait',
      color:
        Number(offsetState) >= 1075.4285888671875 &&
        Number(offsetState) < 1300.5714111328125
          ? 'white'
          : 'green',
    },
  ];

  const handleBtn = item => {
    console.log('item', typeof item.id);
    if (item.id == 1) {
      count.current?.scrollTo({
        y: 0,
        animated: true,
      });
    } else if (item.id == 2) {
      count.current?.scrollTo({
        y: 400,
        animated: true,
      });
    } else if (item.id == 3) {
      count.current?.scrollTo({
        y: 800,
        animated: true,
      });
    } else {
      count.current?.scrollTo({
        y: 1300,
        animated: true,
      });
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleBtn(item)}
        style={{
          backgroundColor: item.color,
          width: 80,
          height: 50,
        }}
      />
    );
  };

  return (
    <View>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <FlatList
          horizontal={true}
          data={DATAS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{textAlign: 'center'}}>BLOC</Text>
        <ScrollView
          ref={count}
          contentContainerStyle={{height: '250%'}}
          onScroll={e => {
            setOffSetState(e.nativeEvent.contentOffset.y);
          }}>
          <View style={{backgroundColor: 'red', width: '100%', height: 380}} />
          <View
            style={{
              backgroundColor: 'yellow',
              width: '100%',
              height: 350,
              marginTop: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'blue',
              width: '100%',
              height: 350,
              marginTop: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'orange',
              width: '100%',
              height: 350,
              marginTop: 50,
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default App;
