import React from 'react';
import {QueryClientProvider} from "@tanstack/react-query";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigations/root/RootNavigator.tsx";
import queryClient from "./src/api/queryClient.ts";

function App(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default App;
