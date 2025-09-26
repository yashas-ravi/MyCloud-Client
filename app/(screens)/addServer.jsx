import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton";
import CustomInputField from "../../components/CustomInputField";
import { icons } from '../../constants';

const AddServer = () => {
    const [loading, setLoading] = useState(false);
    const [passwordPage, setPasswordPage] = useState(false);
    const [namingPage, setNamingPage] = useState(false);
    const [address, setAddress] = useState("127.23.34.567");

  const handleAddressStep=()=>{
    setPasswordPage(true);
  }
  const handlePasswordStep=()=>{
    setNamingPage(true);
  }
  const handleNamingStep=()=>{

  }

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
                        tintColor="#56cfe1"
                    />
                </TouchableOpacity>
                <Text className="text-primary font-mbold text-2xl absolute left-20 right-20 text-center">Add Server</Text>
            </View>
           
            <View className="bg-gray-200 p-4 items-center justify-start h-full w-full rounded-t-3xl pt-[5vh]">
                {loading?<Text className="font-msemibold text-primary text-xl mt-[10vh]">Loading...</Text>:!passwordPage?<View className="items-center justify-start h-full gap-y-5">
                <Text className="text-xl font-msemibold text-black text-center">Enter MyCloud Server Address Here</Text>
                <CustomInputField
                extraStyle="mt-4"
                value={address}
                handleChangeText={setAddress}
                />
                <CustomButton 
                title="continue"
                icon={icons.rightArrow}
                handlePress={handleAddressStep}
                iconStyle="w-6 h-6"
                extraStyle="mt-5"
                />
                <Text className="font-mregular text-black mt-4 text-center">Go to your MyCloud Server and Enter the Server Address Shown there.</Text>
                </View>:!namingPage?<View className="items-center justify-start h-full gap-y-5">
                <Text className="text-xl font-msemibold text-black text-center">Enter password for <Text className="text-xl font-msemibold text-secondary text-center">{address}</Text></Text>
                <CustomInputField
                extraStyle="mt-4"
                value={address}
                handleChangeText={setAddress}
                />
                <CustomButton 
                title="continue"
                icon={icons.rightArrow}
                handlePress={handlePasswordStep}
                iconStyle="w-6 h-6"
                extraStyle="mt-5"
                />
                <Text className="font-mregular text-black mt-4 text-center">Enter your server password you created for MyCloud Server after installation.</Text>
                </View>:<View className="items-center justify-start h-full gap-y-5">
                <Text className="text-xl font-msemibold text-black text-center">Give Name to this Server</Text>
                <CustomInputField
                extraStyle="mt-4"
                value={address}
                handleChangeText={setAddress}
                />
                <CustomButton 
                title="connnect"
                icon={icons.rightArrow}
                handlePress={handleNamingStep}
                iconStyle="w-6 h-6"
                extraStyle="mt-5"
                />
                <Text className="font-mregular text-black mt-4 text-center">Give any name that you can easily recognise this server.</Text>
                </View>
                }
            </View>
        </View>
         <StatusBar style='dark'/>
    </SafeAreaView>
  )
}

export default AddServer;