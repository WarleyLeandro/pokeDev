import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../../screens/Home"
import Info from "../../screens/Info"

const { Navigator, Screen } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "PokeDev",
          headerTintColor: "#F4F5F8",
          headerStyle: {
            backgroundColor: "#144FA1",  

          },
          headerTitleAlign: "center",
        }}
      />

      <Screen
        name="Info"
        component={Info}
        options={{
          title: "PokeDev",
          headerTintColor: "#F4F5F8",
          headerStyle: {
            backgroundColor: "#144FA1",
          },
          headerTitleAlign: "center",
          
        }}
      />
    </Navigator>
  );
}
