import { Query, QueryKey } from "@tanstack/react-query";
type Props = {
    editable?: boolean;
    label: string;
    value: any;
    defaultExpanded?: Array<string>;
    activeQuery?: Query<unknown, Error, unknown, QueryKey> | undefined;
    dataPath?: Array<string>;
    itemsDeletable?: boolean;
};
export default function Explorer({ editable, label, value, defaultExpanded, activeQuery, dataPath, itemsDeletable, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
