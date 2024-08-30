import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/app/ctx';
import { Text } from 'react-native';

export default function AppLayout() {
  const { isLoading, session } = useSession();
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    return <Redirect href={{pathname: '/signin'}} />;
  }

  return <Stack/>
}