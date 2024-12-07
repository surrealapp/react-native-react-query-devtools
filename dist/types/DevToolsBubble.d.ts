import { ViewStyle, StyleProp } from "react-native";
import { ClipboardFunction } from "./context/CopyContext";
interface DevToolsBubbleProps {
    bubbleStyle?: StyleProp<ViewStyle>;
    onCopy?: ClipboardFunction;
}
export declare function DevToolsBubble({ bubbleStyle, onCopy }: DevToolsBubbleProps): import("react/jsx-runtime").JSX.Element;
export {};
