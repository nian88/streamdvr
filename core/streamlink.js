const basicsite = require("./basicsite");

class Streamlink extends basicsite.Basicsite {
    constructor(siteName, tui, siteUrl, noHLS, cmdback) {
        super(siteName, tui, siteUrl, noHLS, "streamlink --stream-url ", cmdback);
        this.siteType = "streamlink";
    }
}

exports.Streamlink = Streamlink;

