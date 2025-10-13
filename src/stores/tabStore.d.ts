export declare const useTabStore: import("pinia").StoreDefinition<"adminTabStore", {
    tabs: {
        name: string;
        value: string;
    }[];
    activeTab: string;
}, {
    getTabs: (state: {
        tabs: {
            name: string;
            value: string;
        }[];
        activeTab: string;
    } & import("pinia").PiniaCustomStateProperties<{
        tabs: {
            name: string;
            value: string;
        }[];
        activeTab: string;
    }>) => {
        name: string;
        value: string;
    }[];
    getActiveTav: (state: {
        tabs: {
            name: string;
            value: string;
        }[];
        activeTab: string;
    } & import("pinia").PiniaCustomStateProperties<{
        tabs: {
            name: string;
            value: string;
        }[];
        activeTab: string;
    }>) => string;
}, {
    setActiveTab(tab: string): void;
}>;
