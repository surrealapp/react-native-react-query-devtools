import React from "react";
import { Mutation } from "@tanstack/react-query";
interface Props {
    mutation: Mutation<unknown, Error, void, unknown>;
    setSelected: React.Dispatch<React.SetStateAction<Mutation | undefined>>;
    selected: Mutation | undefined;
}
export default function MutationButton({ mutation, setSelected, selected, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
