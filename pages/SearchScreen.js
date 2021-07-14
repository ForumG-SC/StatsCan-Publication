// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,FlatList,StyleSheet,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';

const SearchScreen = ({navigation}) => {
 const [count, setCount] = useState(0);
   const [name, setName] = useState(i18n.t('name'));
   let indicator=0;
   console.log('indicator global:'+global.indicator);

    const [criteria, onChangeCriteria] = React.useState("Criteria here");
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
       <View style={{flex: 1, padding: 16}}>
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
             {i18n.t('search')}
           </Text>
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <TextInput style={styles.criteria} onChangeText={onChangeCriteria}  value={criteria}   />
              <Button style={{height:10}} title="Search" onPress={() => Alert.alert('Simple Button pressed')} />
           </View>

          <Text
                       style={{
                         fontSize: 25,
                         textAlign: 'left',
                         marginBottom: 16,
                       }}>
                       Result:
                     </Text>
           <FlatList style={{width:'100%',
          // borderWidth:1,borderColor:'lightgray'
           }}
                   data={[
                     {key: 'Ontario shool stay closed',url:'https://www.statcan.gc.ca/',thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png'},
                     {key: 'COVID-19 update',url:'https://twitter.com/StatCan_eng?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',thumbnailUrl:'http://images.all-free-download.com/images/graphiclarge/url_37031.jpg'},
                     {key: 'Juladsgasdfasdfasdfasdfadsfie',url:'https://www.google.com/',thumbnailUrl:'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/Emacs-icon.png'},
                   ]}
                   renderItem={({item}) =>
                   <TouchableOpacity onPress={() => navigation.navigate('BrowseSearch', { url:item.url}  )}>
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
   criteria: {
       height: 30,width:300,
       margin: 12,paddingLeft:8,
       borderWidth: 1,borderRadius:20,
     },
 });

export default SearchScreen;
