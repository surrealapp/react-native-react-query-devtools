import React from "react";
import { Query } from "@tanstack/react-query";
interface Props {
    setSelectedQuery: React.Dispatch<React.SetStateAction<Query | undefined>>;
    selectedQuery: Query | undefined;
}
export default function QueryInformation({ selectedQuery, setSelectedQuery, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
