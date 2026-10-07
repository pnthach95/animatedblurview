import { Pressable, type StyleProp, View, type ViewStyle } from 'react-native';
import Animated, { type AnimatedStyle } from 'react-native-reanimated';
import {
  MaterialDesignIcons,
  type MaterialDesignIconsIconName,
} from '@react-native-vector-icons/material-design-icons';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { withUniwind } from 'uniwind';

type Props = React.PropsWithChildren<{
  className?: string;
  name?: MaterialDesignIconsIconName;
  onPress?: () => void;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
}>;

const CBlurView = withUniwind(BlurView);

const VCard = ({
  children,
  className,
  style,
  onPress,
  name = 'arrow-right-circle',
}: Props) => {
  return (
    <Animated.View
      className="h-52 w-full justify-between overflow-hidden rounded-xl bg-surface p-4 shadow-2xl"
      style={style}
    >
      <View className="absolute -top-115 size-150 self-center rounded-full bg-primary/60" />
      {/* <View className="absolute -top-135 size-150 self-center rounded-full bg-teal-800" /> */}
      <CBlurView
        blurAmount={200}
        blurType="regular"
        className="absolute top-0 right-0 bottom-0 left-0"
      />
      {children}
      <Pressable className={className} onPress={onPress}>
        <MaterialDesignIcons name={name} size={50} />
      </Pressable>
    </Animated.View>
  );
};

export default VCard;
