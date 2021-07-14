// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, {useEffect, useState} from 'react';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import {Button, View, Text, SafeAreaView,StyleSheet,CheckBox,Image,BackHandler} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';

const TermAndConditionScreen = ({navigation}) => {
 const [isSelected, setSelection] = useState(false);
 const route = useRoute();
 useFocusEffect(
     React.useCallback(() => {
           const onBackPress = () => {
             if (route.name === 'TermAndCondition') {
               return true;
             } else {
               return false;
             }
           };

       BackHandler.addEventListener('hardwareBackPress', onBackPress);

       return () =>
         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
     }, [route]),
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
              marginBottom: 16,color:'blue',fontWeight:'bold'
            }}>
             {i18n.t('termAndCondition')}
          </Text>
           <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Do you agree?</Text>
           </View>
           <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around' }}>
          {
          isSelected?
          <Button
            onPress={() => navigation.navigate('Main')}
            title="Continue"
          />:
          <Button
                      onPress={() => BackHandler.exitApp()}
                      title="Exit"
                    />
           }
          </View>
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
});
export default TermAndConditionScreen;