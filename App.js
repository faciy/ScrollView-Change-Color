import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';

const App = () => {
  const [offsetState, setOffSetState] = useState('');
  const count = useRef(null);
  console.log('offsetState', offsetState);

  const handleBtn = () => {
    count.current?.scrollTo({
      y: 400,
      animated: true,
    });
  };

  const handleTwo = () => {
    count.current?.scrollTo({
      y: 800,
      animated: true,
    });
  };

  const handleThree = () => {
    count.current?.scrollTo({
      y: 1300,
      animated: true,
    });
  };

  const handleOne = () => {
    count.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={handleOne}
          style={{
            backgroundColor:
              Number(offsetState) >= 0 &&
              Number(offsetState) < 293.3333435058594
                ? 'white'
                : 'red',
            width: 80,
            height: 50,
          }}
        />
        <TouchableOpacity
          onPress={handleBtn}
          style={{
            backgroundColor:
              Number(offsetState) >= 293.3333435058594 &&
              Number(offsetState) < 435.80950927734375
                ? 'white'
                : 'red',
            width: 80,
            height: 50,
          }}
        />
        <TouchableOpacity
          onPress={handleTwo}
          style={{
            backgroundColor:
              Number(offsetState) >= 689.90478515625 &&
              Number(offsetState) < 834.2857055664062
                ? 'white'
                : 'red',
            width: 80,
            height: 50,
          }}
        />
        <TouchableOpacity
          onPress={handleThree}
          style={{
            backgroundColor:
              Number(offsetState) >= 1075.4285888671875 &&
              Number(offsetState) < 1300.5714111328125
                ? 'white'
                : 'red',
            width: 80,
            height: 50,
          }}
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
