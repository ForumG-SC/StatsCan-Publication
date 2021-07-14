import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,FlatList,StyleSheet,Image,TouchableOpacity} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(i18n.t('name'));
  let indicator=0;
  console.log('indicator global:'+global.indicator);
  React.useEffect(
      () => navigation.addListener('focus', () =>{
      global.indicator++;
           indicator=global.indicator;
          setCount(global.indicator);
          setName(i18n.t('name'));
      } ),
      []
    );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16,backgroundColor:'white',borderBottomColor:'lightgray',borderBottomWidth: 2,}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',backgroundColor:'white'
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            {i18n.t('home')}
          </Text>
          <FlatList style={{width:'100%',
         // borderWidth:1,borderColor:'lightgray'
          }}
                  data={[
                    {key: 'Ontario shool stay closed',url:'https://www.statcan.gc.ca/eng/dai/statcanplus',thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png'},
                    {key: 'COVID-19 update',url:'https://twitter.com/StatCan_eng?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',thumbnailUrl:'http://images.all-free-download.com/images/graphiclarge/url_37031.jpg'},
                    {key: 'TSX tops 30000',thumbnailUrl:'https://cdn.onlinewebfonts.com/svg/img_311588.png',url:'https://www.cbc.ca/news/thenational'},
                    {key: 'Liberals call on not allow free vote',url:'https://www.msn.com/',thumbnailUrl:'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/Emacs-icon.png'},
                    {key: 'What to Stream on Netflix Canada in June',url:'https://www.google.com/',thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png'},
                    {key: 'The 15-Minute Retirement Plan',url:'https://www12.statcan.gc.ca/census-recensement/index-eng.cfm',thumbnailUrl:'http://images.all-free-download.com/images/graphiclarge/url_37031.jpg'},
                    {key: 'Shocking levels of mercury found leaking from Greenlands ice sheet',url:'https://www.google.com/',thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png'},
                    {key: 'ELOGHOMES LOG HOME SPOTLIGHT MODELS',url:'https://www.google.com/',thumbnailUrl:'https://cdn.onlinewebfonts.com/svg/img_311588.png'},
                    {key: 'Jzdfgsdfgsdfgsfimmy',url:'https://www.google.com/',thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png'},
                    {key: 'Juladsgasdfasdfasdfasdfadsfie',url:'https://www.google.com/',thumbnailUrl:'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/Emacs-icon.png'},
                  ]}
                  renderItem={({item}) =>
                  <TouchableOpacity onPress={() => navigation.navigate('Browse',{url:item.url})}>
                  <View style={{flexDirection:'row',marginBottom:10}}>
                     <Text style={styles.item}>{item.key}</Text>
                     <Image
                             style={styles.tinyLogo}
                             source={{
                                       uri: item.thumbnailUrl
                                     }}
                           />
                  </View>
                  </TouchableOpacity>
                  }
                />

        </View>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width:'80%'
  },
  tinyLogo: {
      width: 50,
      height: 50,
    },
});
export default HomeScreen;

