import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTransparent: true,
          headerSearchBarOptions: { placeholder: "Search" },
          headerLargeStyle: { backgroundColor: Colors.background },
        }}
      />
    </Stack>
  );
};

export default Layout;
