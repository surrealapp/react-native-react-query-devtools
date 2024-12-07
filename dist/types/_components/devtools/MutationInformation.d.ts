import { Mutation } from "@tanstack/react-query";
interface Props {
    selectedMutation: Mutation<unknown, Error, void, unknown> | undefined;
}
export default function MutationInformation({ selectedMutation }: Props): import("react/jsx-runtime").JSX.Element;
export {};
