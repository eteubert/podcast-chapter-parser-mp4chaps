var npt = require("normalplaytime");

var pattern = /^([\d\.:]+)\s(.*)$/;

var parse = function(text) {

    return text.trim().split(/(\r?\n)/).reduce(function (all, chapter) {

        var matches = chapter.match(pattern);

        if (matches) {
            var time = npt.parse(matches[1]);
            var title = matches[2].trim();
            var linkMatch = title.match(/<([^>]+)>/);
            var link;

            if (linkMatch) {
                link = linkMatch[1];
                
                var linkStart = title.indexOf('<');
                var linkEnd = title.indexOf('>');
                
                var beforeLink = title.substr(0, linkStart).trim();
                var afterLink  = title.substr(linkEnd + 1).trim();

                // build new title without link
                title = (beforeLink + ' ' + afterLink).trim();
            }

            if (time !== null) {
                var chapter = {
                    title: title,
                    start: time
                };

                if (link) {
                    chapter.url = link;
                }

                all.push(chapter);
            }
        }

        return all;
    }, []);

};

module.exports = {
    parse: parse
};
