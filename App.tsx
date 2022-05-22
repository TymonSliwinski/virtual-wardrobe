import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { UserContext } from './userContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [userValue, setUserValue] = useState(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <UserContext.Provider value={{userValue, setUserValue}}>
            <Navigation colorScheme={colorScheme} />
          </UserContext.Provider>
          <StatusBar />
        </SafeAreaProvider>
    );
  }
}
