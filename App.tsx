import './global.css';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import VCard from './card';
import { withUniwind } from 'uniwind';

const CSafeAreaView = withUniwind(SafeAreaView);

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const rotate = useSharedValue(0);

  const rotateAni1 = useAnimatedStyle(() => {
    return {
      display: rotate.value > 90 ? 'none' : 'flex',
      transform: [
        {
          rotateY: `${interpolate(rotate.value, [0, 90], [0, 90], 'clamp')}deg`,
        },
      ],
    };
  });

  const rotateAni2 = useAnimatedStyle(() => {
    return {
      display: rotate.value < 90 ? 'none' : 'flex',
      transform: [
        {
          rotateY: `${interpolate(
            rotate.value,
            [90, 180],
            [90, 0],
            'clamp',
          )}deg`,
        },
      ],
    };
  });

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CSafeAreaView edges={['top', 'bottom']} className="p-3 gap-10">
        <View className="h-52 w-full">
          <View className="absolute h-full w-full">
            <VCard
              style={rotateAni1}
              onPress={() => {
                rotate.set(withTiming(180, { duration: 1000 }));
              }}
            >
              <Text className="text-4xl font-bold">Heading1</Text>
            </VCard>
          </View>
          <View className="absolute h-full w-full">
            <VCard
              className="self-end"
              name="arrow-left-circle"
              style={rotateAni2}
              onPress={() => {
                rotate.set(withTiming(0, { duration: 1000 }));
              }}
            >
              <Text className="text-xl">Heading4</Text>
            </VCard>
          </View>
        </View>
      </CSafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
