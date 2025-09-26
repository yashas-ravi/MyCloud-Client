import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";
import { icons } from '../../constants';

const AddServer = () => {
  return (
    <SafeAreaView className="bg-white h-full">
        <View className="h-full items-start justify-start bg-white">
            <View className="w-full h-[8vh] flex-row items-center p-4">
                <TouchableOpacity
                onPress={()=>router.back()}
                >
                    <Image 
                        source={icons.leftArrow}
                        resizeMode='contain'
                        className="w-8 h-8"
                        tintColor="#B33791"
                    />
                </TouchableOpacity>
                <Text className="text-primary font-mbold text-2xl absolute left-20 right-20 text-center">Add Server</Text>
            </View>
            <View className="bg-gray-200 p-4 items-center justify-start h-full rounded-t-3xl pt-[5vh]">
                <Text className="text-xl font-msemibold text-black text-center">Enter MyCloud Server Address Here</Text>
                <CustomInputField
                extraStyle="mt-4"
                />
                <CustomButton 
                title="Connect"
                icon={icons.rightArrow}
                iconStyle="w-6 h-6"
                extraStyle="mt-5"
                />
                <Text className="font-mregular text-black mt-4 text-center">Go to your MyCloud Server and Enter the Server Address Shown there</Text>
            </View>
        </View>
         <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default AddServer;