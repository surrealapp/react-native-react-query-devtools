import { Query, QueryKey } from "@tanstack/react-query";
interface Props {
    query: Query<unknown, Error, unknown, QueryKey> | undefined;
}
export default function QueryDetails({ query }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
