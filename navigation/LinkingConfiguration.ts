/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    HomeTab: {
                        screens: {
                            HomeTabScreen: "one",
                        },
                    },
                    SummaryTab: {
                        screens: {
                            SummaryTabScreen: "two",
                        },
                    },
                    AddTab: {
                        screens: {
                            AddTabScreen: "three",
                        },
                    },
                    DiscoverTab: {
                        screens: {
                            DiscoverTabScreen: "four",
                        },
                    },
                    ProfileTab: {
                        screens: {
                            ProfileTabScreen: "five",
                        },
                    },
                },
            },
            Modal: "modal",
            NotFound: "*",
        },
    },
};

export default linking;
