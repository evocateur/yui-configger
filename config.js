module.exports = {
    root : {
        demand      : true,
        alias       : "r",
        description : "Root directory to read YUI modules from"
    },
    tmpl : {
        alias       : "t",
        description : "YUI config file to use as template",
        "default"   : "_config-template.js"
    },
    output : {
        alias       : "o",
        description : "Output file for generated config (defaults to stdout)"
    },
    filter : {
        alias       : "f",
        description : "File-name filter (regex)",
        "default"   : "."
    },
    key : {
        alias       : "k",
        description : "Key in config to replace with module metadata",
        "default"   : "configger"
    }

};