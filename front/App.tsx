import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigations/root/RootNavigator.tsx";

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

export default App;
