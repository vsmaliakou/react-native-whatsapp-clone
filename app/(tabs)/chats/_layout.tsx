import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerLargeTitle: true,
          headerBlurEffect: "regular",
          headerTransparent: true,
          headerSearchBarOptions: { placeholder: "Search" },
          headerLargeStyle: { backgroundColor: "#ffffff" },
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                color={Colors.primary}
                size={30}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity>
                <Ionicons
                  name="camera-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>

              <Link href="/(modals)/new-chat" asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="add-circle"
                    color={Colors.primary}
                    size={30}
                  />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                paddingBottom: 4,
                alignItems: "center",
                width: 220,
              }}
            >
              <Image
                source={{
                  uri: "https://hips.hearstapps.com/hmg-prod/images/famous-hispanic-people-danny-trejo-1598643850.jpg?crop=0.901xw:0.768xh;0,0.0101xh&resize=980:*",
                }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />

              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Vitali Smaliakou
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity>
                <Ionicons
                  name="videocam-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="call-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
