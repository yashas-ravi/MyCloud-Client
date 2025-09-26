import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from "../../constants/index";
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const {isLoading, userName} = useGlobalContext();
  if(isLoading){
    <SafeAreaView className="bg-grey h-full items-center justify-center">
        <Text className="text-xl font-mmedium text-primary">Loading...</Text>
    </SafeAreaView>
  }
  if(userName===null)
    {
      return <Redirect href="/" />;
    }
  else{
    return (
      <SafeAreaView className="h-full bg-primary">
         <LinearGradient
            colors={['#FFFFFF', '#56cfe1']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0, y: 0 }} 
            className="w-full items-start justify-start h-full px-4"
         >
          <View className="w-full mt-[5vh] flex-row items-center justify-between">
            <Text className="font-mbold text-grey text-3xl">Hello, {userName}</Text>
            <TouchableOpacity
            onPress={()=>router.navigate('/addServer')}
            >
              <Image 
              source={icons.addServer}
              resizeMode='contain'
              className="w-8 h-7"
              tintColor="#33415c"
            />
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-x-[50px] w-full h-[12vh] items-center justify-center mt-[2vh]">
            <View className="bg-sky-100/50 h-[10vh] w-[15vh] rounded-md items-center p-2">
              <Text className="font-msemibold text-secondary/50 text-lg">Total</Text>
              <Text className="font-mbold text-secondary/50 text-3xl">5</Text>
            </View>
            <View className="bg-sky-100/50 h-[10vh] w-[15vh] rounded-md items-center p-2">
              <Text className="font-msemibold text-secondary/50 text-lg">Online</Text>
              <Text className="font-mbold text-secondary/50 text-3xl">2</Text>
            </View>
          </View>
          <View className="w-full flex-row items-center justify-start mt-[5vh] gap-x-4">
            <Image 
            source={icons.currentServer}
            resizeMode='contain'
            className="w-8 h-7"
            tintColor="#0077b6"
            />
            <Text className="font-mbold text-secondary text-2xl">Yashas Linux</Text>
          </View>
         </LinearGradient>
         <StatusBar style='light' />
      </SafeAreaView>
  )
 }
}

export default Home;