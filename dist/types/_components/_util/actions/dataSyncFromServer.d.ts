import { Query, useQueryClient } from "@tanstack/react-query";
interface Props {
    queryClient: ReturnType<typeof useQueryClient>;
    query: Query;
}
export default function dataSyncFromServer({ query, queryClient }: Props): void;
export {};
