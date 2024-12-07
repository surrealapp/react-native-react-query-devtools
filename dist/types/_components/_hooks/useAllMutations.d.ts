import { Mutation } from "@tanstack/react-query";
declare function useAllMutations(): {
    mutations: Mutation<unknown, Error, void, unknown>[];
};
export default useAllMutations;
