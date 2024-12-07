import { Query } from "@tanstack/react-query";
import React from "react";
interface Props {
    query: Query;
    setSelected: React.Dispatch<React.SetStateAction<Query | undefined>>;
    selected: Query | undefined;
}
export default function QueryButton({ query, setSelected, selected }: Props): import("react/jsx-runtime").JSX.Element;
export {};
