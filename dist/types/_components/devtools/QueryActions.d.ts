import { Query, QueryKey } from "@tanstack/react-query";
import React from "react";
interface Props {
    setSelectedQuery: React.Dispatch<React.SetStateAction<Query<unknown, Error, unknown, QueryKey> | undefined>>;
    query: Query<unknown, Error, unknown, QueryKey> | undefined;
}
export default function QueryActions({ query, setSelectedQuery }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
