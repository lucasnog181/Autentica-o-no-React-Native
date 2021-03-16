import React from "react";
import SingIn from "../pages/SingIn/index";

import { createStackNavigator } from "@react-navigation/stack";

const AuhtStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuhtStack.Navigator>
        <AuhtStack.Screen name="SingIn" component={SingIn} />
    </AuhtStack.Navigator>
);


export default AuthRoutes;