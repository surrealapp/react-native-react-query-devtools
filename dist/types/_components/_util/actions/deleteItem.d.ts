import { Query, QueryClient } from "@tanstack/react-query";
interface Props {
    queryClient: QueryClient;
    activeQuery: Query;
    dataPath: Array<string> | undefined;
}
export default function deleteItem({ activeQuery, dataPath, queryClient, }: Props): void;
export {};
