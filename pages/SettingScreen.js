// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import React, {useEffect, useState} from 'react';
import {Button, View, Text, SafeAreaView,Switch,TouchableOpacity,ScrollView} from 'react-native';
import '../settings.js';
import i18n from'../resources.js';
import RadioButton from 'expo-radio-button'
const SettingScreen = ({navigation}) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [name, setName] = useState(i18n.t('settings'));
  const [datefilter, setDatefilter] = useState("option 1")
  const [locationfilter, setLocationfilter] = useState("option 1")
  const [sorting, setSorting] = useState("option 1")
  const toggleSwitch = () => {
       setIsEnglish(previousState => !previousState);
      // i18n.locale.isEnglish=!resources.isEnglish;
        i18n.toogle();
        setName(i18n.t('settings'));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 16,borderBottomColor:'lightgray',borderBottomWidth: 2}}>
         <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16,
                    }}>
                    {name}
                  </Text>
         <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnglish ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnglish}
              />



        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>

<View style={{flexDirection:'column'}}>
<View>
<Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              marginBottom: 16,
            }}>
            Filtering by date
          </Text>
 <View style={{justifyContent:'flex-start',marginLeft:40}}>
<RadioButton value="option 1"
        containerStyle={{}}
        selected={datefilter} onSelected={(value) => setDatefilter(value)}
        radioBackground="darkgreen" >
        <Text>Today</Text>
      </RadioButton>
      <RadioButton value="option 2" selected={datefilter} onSelected={(value) => setDatefilter(value)} radioBackground="green" >
        <Text>Last week</Text>
      </RadioButton>
       <RadioButton value="option 3" selected={datefilter} onSelected={(value) => setDatefilter(value)} radioBackground="green" >
              <Text>Last month</Text>
            </RadioButton>
        <RadioButton value="option 4" selected={datefilter} onSelected={(value) => setDatefilter(value)} radioBackground="green" >
               <TouchableOpacity><Text>Specify date</Text></TouchableOpacity>

             </RadioButton>
</View>
</View>
<View>
<Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              marginBottom: 16,marginTop:16,
            }}>
            Filtering by location
          </Text>
 <View style={{justifyContent:'flex-start',marginLeft:40}}>
<RadioButton value="option 1"
        containerStyle={{ }}
        selected={locationfilter} onSelected={(value) => setLocationfilter(value)}
        radioBackground="black" >
        <Text>Canada</Text>
      </RadioButton>
      <RadioButton value="option 2" selected={locationfilter} onSelected={(value) => setLocationfilter(value)} radioBackground="green" >
        <Text>World</Text>
      </RadioButton>
       <RadioButton value="option 3" selected={locationfilter} onSelected={(value) => setLocationfilter(value)} radioBackground="green" >
              <Text>Province</Text>
            </RadioButton>
        <RadioButton value="option 4" selected={locationfilter} onSelected={(value) => setLocationfilter(value)} radioBackground="green" >
               <Text>City</Text>

             </RadioButton>
</View>
</View>
</View>



<Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              marginBottom: 16,marginTop:16,
            }}>
            Sorting by
          </Text>
 <View style={{justifyContent:'flex-start',marginLeft:40}}>
<RadioButton value="option 1"
        containerStyle={{ }}
        selected={sorting} onSelected={(value) => setSorting(value)}
        radioBackground="black" >
        <Text>Ascending</Text>
      </RadioButton>
      <RadioButton value="option 2" selected={sorting} onSelected={(value) => setSorting(value)} radioBackground="green" >
        <Text>Descending</Text>
      </RadioButton>
</View>





<View style={{justifyContent:'center',alignSelf:'center'}}>
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title={"Go to Home Stack"}
          />
        </View>
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;