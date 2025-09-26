import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Alert, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsList from "../../components/SettingsList";
import { icons } from "../../constants/index";
import { useGlobalContext } from "../../context/GlobalProvider";

const settings = () => {

  const { setUserName} = useGlobalContext();

  const handleResetApp =async()=>{
    try{
        await AsyncStorage.removeItem("user");
        setUserName(null);
        Alert.alert("App Reset Done");
        router.replace('/');
    }catch(e){
       Alert.alert("Can't Reset App",e);
       console.log(e);
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
     <ScrollView className="h-full bg-white p-4">
      <View className="h-[15vh] items-center justify-center">
        <Text className="text-xl font-msemibold text-primary">MyCloud Client</Text>
        <Text className="text-sm font-mmedium text-black">version: 1.0.0</Text>
        <TouchableOpacity 
        onPress={()=>Linking.openURL('https://github.com/yashas-ravi')}
        className="mt-3">
          <Text className="text-secondary ">Star us on {' '}
          <Image 
            source={icons.github}
            resizeMode="contain"
            className="w-4 h-4"
          />
          {'  '}Github</Text>
        </TouchableOpacity>
      </View>
      <View>
          <Text className="text-2xl text-black font-msemibold mt-4">General</Text>
          <SettingsList
            title="Change UserName"
            icon={icons.profile}
          />
          <SettingsList
            title="Reset App"
            icon={icons.reset}
            handlePress={handleResetApp}
          />
          <Text className="text-2xl text-black font-msemibold mt-4">Storage</Text>
          <SettingsList
            title="Downloads"
            icon={icons.storage}
          />
          <Text className="text-2xl text-black font-msemibold mt-4">App</Text>
           <SettingsList
            title="About"
            icon={icons.about}
            handlePress={()=>Linking.openURL('https://github.com/yashas-ravi/MyCloud')}
          />
          <SettingsList
            title="Feedback"
            icon={icons.feedback}
            handlePress={()=>Linking.openURL('https://yashas-ravi.github.io/portfolio/#contact')}
          />
          <SettingsList
            title="Help & Support"
            icon={icons.help}
            handlePress={()=>Linking.openURL('https://yashas-ravi.github.io/portfolio/#contact')}
          />
          <SettingsList
            title="Legal"
            icon={icons.legal}
          />
          <SettingsList
            title="Report"
            icon={icons.report}
            handlePress={()=>Linking.openURL('https://yashas-ravi.github.io/portfolio/#contact')}
          />
       </View>
      </ScrollView>
      <StatusBar style="dark"/>
    </SafeAreaView>
  )
}

export default settings