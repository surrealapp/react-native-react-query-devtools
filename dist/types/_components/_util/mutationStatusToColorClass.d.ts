import { Mutation } from "@tanstack/react-query";
export declare const getMutationStatusColors: ({ status, isPaused, }: {
    status: Mutation["state"]["status"];
    isPaused: boolean;
}) => {
    backgroundColor: string;
    textColor: string;
};
