const mainNavigation = {
    HOME: 'Home',
    FEED: 'Feed',
    CALENDAR: 'Calendar',
} as const;

const authNavigations = {
    AUTH: 'Auth',
    LOGIN: 'Login',
    SIGN_IN: 'SignIn',
} as const;

const mapNavigations = {
    MAP_HOME: 'MapHome',
    ADD_POST: 'AddPost',
} as const;

export {mainNavigation, authNavigations, mapNavigations};
