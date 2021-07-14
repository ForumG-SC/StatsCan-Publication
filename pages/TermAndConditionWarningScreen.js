// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,StyleSheet,CheckBox,Image} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';

const TermAndConditionWarningScreen = ({navigation}) => {
   return (
      <SafeAreaView style={{flex: 1,alignItems: 'center',
                                                  justifyContent: 'center',}}>

             <View
                       style={{
                         flex: 1,
                         alignItems: 'center',
                         justifyContent: 'center',
                       }}>
                                   <Text
                                     style={{
                                       fontSize: 20,
                                       textAlign: 'center',
                                       marginBottom: 16,color:'blue',fontWeight:'bold'
                                     }}>
                                      {i18n.t('termandConditionWarning')}
                                   </Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around',width:'90%'}}>
                        <Button style={styles.btnNext} onPress={() =>{i18n.toogle(); navigation.navigate('TermAndCondition');}}
                                   title="English"
                                 />

                       <Button style={styles.btnNext}
                         onPress={() => navigation.navigate('TermAndCondition')}
                         title="Français"
                       />
                       </View>
                     </View>
      </SafeAreaView>
    );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",color:'blue',
  },
  label: {
    margin: 8,color:'blue',fontWeight:'500',
  },
    topBar: {
      backgroundColor: "royalblue",
      height: 50,
      flexDirection:'row',
      justifyContent:'space-around',
    },
      image: {
        maxWidth: 320,
        minWidth: 250,
        height: 40,
        backgroundColor:'white'
      },
  btnNext: {
    width:100,

    },
});
export default TermAndConditionWarningScreen;