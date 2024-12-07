import { Mutation } from "@tanstack/react-query";
interface Props {
    selectedMutation: Mutation<unknown, Error, void, unknown> | undefined;
}
export default function MutationDetails({ selectedMutation }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
