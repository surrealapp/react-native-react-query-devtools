import { QueryKey, Query } from "@tanstack/react-query";
type QueryStatus = "fetching" | "inactive" | "paused" | "stale" | "fresh";
export declare function getQueryStatusLabel(query: Query<unknown, Error, unknown, QueryKey>): QueryStatus;
export {};
