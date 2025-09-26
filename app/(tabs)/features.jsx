import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton";
import FeaturesMenu from '../../components/FeaturesMenu';
import { icons } from '../../constants/index';

const Features = () => {
  return (
    <SafeAreaView className="bg-white h-full">
        <View className="h-[15vh] bg-white items-center justify-center flex-row gap-x-4">
            <Image 
            source={icons.currentServer}
            resizeMode='contain'
            className="w-7 h-7"
            />
            <View className="bg-primary/10 p-2 rounded-md h-[40px] min-w-[150px] items-center justify-center">
                 <Text className="font-mmedium text-black text-xl">Yashas-arch</Text>
            </View>
           <CustomButton
            title="Change"
            extraStyle="h-[40px]"
           />
        </View>
        <View className="bg-gray-200 h-full rounded-t-3xl pt-7 p-4 gap-y-4">
            <FeaturesMenu
               title="File System"
               icon={icons.folder}
            />
            <FeaturesMenu
               title="Live Stream"
               icon={icons.live}
            />
        </View> 
        <StatusBar style='inverted'/>
    </SafeAreaView>
    )
}

export default Features