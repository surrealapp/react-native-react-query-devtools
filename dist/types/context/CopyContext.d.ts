export type ClipboardFunction = (text: string) => Promise<boolean>;
interface CopyContextType {
    onCopy?: ClipboardFunction;
}
export declare const CopyContext: import("react").Context<CopyContextType>;
export declare const useCopy: () => CopyContextType;
export {};
