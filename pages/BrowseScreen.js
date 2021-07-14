import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,ActivityIndicator,TouchableOpacity,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
const  displaySpinner=()=> {
              return (
                <View>
                  <ActivityIndicator size="large" style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 20 }}  />
                </View>
              );
            }
const BrowseScreen = ({route,navigation}) => {
   const { url} = route.params;console.log('url:============'+url);

  return (
    <SafeAreaView style={{flex: 1}}>

           <WebView
                   source={{ uri: url }}
                   style={{ marginTop: 20 }}
                   renderLoading={() => { return displaySpinner(); }}
                 />
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}><Text>Recommend</Text></TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}><Text>Favorite</Text></TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}><Text>Go back</Text></TouchableOpacity>
         </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    textTransform: 'lowercase', // Notice this updates the default style
  },

})
export default BrowseScreen;

/*
 <WebView
                  originWhitelist={['*']}
                  source={{ html: '<h1>Hello web browser</h1>' }}
                  style={{ marginTop: 20 }}
                />*/
/*
<WebView
                     incognito={true} useWebKit={true}

                     containerStyle={{ flex: 1}}

                     scrollEnabled={true}
                     source={{ uri: url }}

                     domStorageEnabled={true}
                     scalesPageToFit={true}
                     startInLoadingState={true}

                     automaticallyAdjustsScrollViewInsets={false}

                   />*/
