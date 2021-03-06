({
    baseUrl: "../",
    name: "almond",
    out: "../dist/converse-no-dependencies.min.js",
    include: ["converse"],
    exclude: [
        "awesomplete",
        "backbone.browserStorage",
        "backbone.overview",
        "moment",
        "strophe",
        "strophe.rsm",
        "strophe.ping",
        "otr",
        "lodash",
        "lodash.converter",
        "lodash.noconflict",
        "es6-promise"
    ],
    paths: {
        "backbone.vdomview":        "builds/backbone.vdomview",
        "converse-bookmarks":       "builds/converse-bookmarks",
        "converse-chatboxes":       "builds/converse-chatboxes",
        "converse-chatview":        "builds/converse-chatview",
        "converse-controlbox":      "builds/converse-controlbox",
        "converse-core":            "builds/converse-core",
        "converse-disco":           "builds/converse-disco",
        "converse-dragresize":      "builds/converse-dragresize",
        "converse-embedded":        "builds/converse-embedded",
        "converse-fullscreen":      "builds/converse-fullscreen",
        "converse-headline":        "builds/converse-headline",
        "converse-mam":             "builds/converse-mam",
        "converse-minimize":        "builds/converse-minimize",
        "converse-muc":             "builds/converse-muc",
        "converse-notification":    "builds/converse-notification",
        "converse-otr":             "builds/converse-otr",
        "converse-ping":            "builds/converse-ping",
        "converse-profile":         "builds/converse-profile",
        "converse-register":        "builds/converse-register",
        "converse-roomslist":       "builds/converse-roomslist",
        "converse-rosterview":      "builds/converse-rosterview",
        "converse-singleton":       "builds/converse-singleton",
        "converse-vcard":           "builds/converse-vcard",
        "form-utils":               "builds/utils/form",
        "i18n":                     "builds/i18n",
        "utils":                    "builds/utils/core",
        "muc-utils":                "builds/utils/muc"
    },
    wrap: {
        startFile: "start.frag",
        endFile: "end-no-dependencies.frag"
    },
    mainConfigFile: "config.js"
});
