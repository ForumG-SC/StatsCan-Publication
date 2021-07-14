import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,StyleSheet,CheckBox,Image} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';

const LanguageScreen = ({navigation}) => {
   return (
      <SafeAreaView style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
           <View  style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                <Text style={{fontSize: 20,textAlign: 'center',marginBottom: 16,color:'blue',fontWeight:'bold'}}>{i18n.t('chooseLanguage')}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',width:'90%'}}>
                     <Button style={styles.btnNext} onPress={() =>{i18n.toogle(); navigation.navigate('TermAndCondition');}} title="English" />
                     <Button style={styles.btnNext} onPress={() => navigation.navigate('TermAndCondition')} title="Français"  />
                </View>
           </View>
      </SafeAreaView>
    );

};
const styles = StyleSheet.create({
  btnNext: {
    width:100,

    },
});
export default LanguageScreen;