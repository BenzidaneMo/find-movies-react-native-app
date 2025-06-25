import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const ImageTabsBackground = ({focused, icon, title}: {focused: boolean, icon: {uri: string}, title: string}) => {
    if (!focused) return (
        <View
            className='size-full overflow-hidden mt-4 justify-center items-center rounded-full'>
                <Image source={icon} tintColor={focused ? '#151312' : '#403A74'}
                className='size-5' />
                
        </View>
    )
    return (
        <ImageBackground
            source={images.highlight}
            className='flex flex-row flex-1 w-full min-w-[112px] min-h-[52px] overflow-hidden gap-2 mt-4 justify-center items-center rounded-full'>
                <Image source={icon} tintColor={focused ? '#151312' : '#403A74'}
                className='size-5' />
                <Text className={`${focused ? 'text-secondary' : 'text-dark-100'} text-base font-semibold`}>{title}</Text>
        </ImageBackground>
    )
}

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#0f0d23',
            borderRadius: 50,
            marginBottom: 30,
            marginHorizontal: 20,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#403A74'
        },
        tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            
        }
    }}>
      <Tabs.Screen name="index" 
        options={{ title: "Home", 
            headerShown: false ,
            tabBarIcon: ({focused}) => (
                <>
                    <ImageTabsBackground focused={focused} icon={icons.home} title="Home" />
                </>
            )}} />
      <Tabs.Screen name="search" 
        options={{ title: "Search",
        headerShown: false,
        tabBarIcon: ({focused}) => (
            <>
                <ImageTabsBackground focused={focused} icon={icons.search} title="Search" />
            </>
        )}} />
      <Tabs.Screen name="saved" 
        options={{ title: "Saved",
        headerShown: false,
        tabBarIcon: ({focused}) => (
            <>
                <ImageTabsBackground focused={focused} icon={icons.save} title="Saved" />
            </>
        )}} />
      <Tabs.Screen name="profile" 
        options={{ title: "Profile",
        headerShown: false,
        tabBarIcon: ({focused}) => (
            <>
                <ImageTabsBackground focused={focused} icon={icons.person} title="Profile" />
            </>
        )}} />
    </Tabs>
  )
}

export default _layout