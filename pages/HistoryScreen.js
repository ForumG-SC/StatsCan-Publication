// Refresh Previous Screen after Going Back in React Navigation
// https://aboutreact.com/refresh-previous-screen-react-navigation/

import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const HistoryScreen = ({navigation}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Interval to update count
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Subscribe for the focus Listener
    const unsubscribe = navigation.addListener('focus', () => {
      setCount(0);
    });

    return () => {
      // Clear setInterval in case of screen unmount
      clearTimeout(interval);
      // Unsubscribe for the focus Listener
      unsubscribe;
    };
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16,borderBottomColor:'lightgray',borderBottomWidth: 2}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the History Page of the app
          </Text>
          <Text style={{textAlign: 'center', paddingVertical: 10}}>
            Counter will reset when you came back from Second Screen
          </Text>
          <Text>Count: {count}</Text>
          <Button
            title="Go to Browse Sreen"
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;