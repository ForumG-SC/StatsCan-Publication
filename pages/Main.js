// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image,SafeAreaView,StyleSheet,Text,Modal,Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer,getFocusedRouteNameFromRoute,} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import '../settings.js';
import i18n from'../resources.js';

import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import SettingScreen from './SettingScreen';
import HistoryScreen from './HistoryScreen';
import SearchScreen from './SearchScreen';

const Tab = createMaterialTopTabNavigator();
export default function Main() {
     return (
      <Tab.Navigator
        initialRouteName={"HomeScreen"}
         tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: 'darkblue',
          inactiveTintColor: 'lightskyblue',
          style: {
            backgroundColor: 'white',
          },
          labelStyle: {
            textAlign: 'center',fontSize:16,textTransform: 'capitalize',
          },
          indicatorStyle: {
            borderBottomColor: 'darkblue',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: i18n.t('home'),
            tabBarIcon: ({color, size}) => (
              <Feather name="home" size={24} style={{marginLeft: 2,color:'blue'}}/>
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            tabBarLabel: i18n.t('favorites'),
            tabBarIcon: ({color, size}) => (
               <Feather name="file-text" size={24} style={{marginLeft: 2,color:'blue'}}/>
            ),
          }}
        />
        <Tab.Screen
                        name="SearchScreen"
                        component={SearchScreen}
                        options={{
                          tabBarLabel:i18n.t('search'),
                          tabBarIcon: ({color, size}) => (
                             <Feather name="search" size={24} style={{marginLeft: 2,color:'blue'}}/>
                          ),
                        }}
                      />
        <Tab.Screen
                        name="SettingScreen"
                        component={SettingScreen}
                        options={{
                          tabBarLabel:i18n.t('settings'),
                          tabBarIcon: ({color, size}) => (
                             <Feather name="settings" size={24} style={{marginLeft: 2,color:'blue'}}/>
                          ),
                        }}
                      />
      </Tab.Navigator>
    );
}


