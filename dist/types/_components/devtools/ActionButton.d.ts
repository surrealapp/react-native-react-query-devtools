declare const buttonColors: {
    btnRefetch: string;
    btnInvalidate: string;
    btnReset: string;
    btnRemove: string;
    btnTriggerLoading: string;
    btnTriggerLoadiError: string;
};
declare const textColorMappings: {
    btnRefetch: string;
    btnInvalidate: string;
    btnReset: string;
    btnRemove: string;
    btnTriggerLoading: string;
    btnTriggerLoadiError: string;
};
interface Props {
    onClick: () => void;
    text: string;
    bgColorClass: keyof typeof buttonColors;
    textColorClass: keyof typeof textColorMappings;
    disabled: boolean;
}
export default function ActionButton({ onClick, text, textColorClass, bgColorClass, disabled, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
