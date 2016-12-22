var npt = require("normalplaytime");

var pattern = /^([\d\.:]+)\s(.*)$/;

var parse = function(text) {

    return text.trim().split(/(\r?\n)/).reduce(function (all, chapter) {

        var matches = chapter.match(pattern);

        if (matches) {
            var time = npt.parse(matches[1]);

            if (time !== null) {
                all.push({
                    title: matches[2].trim(),
                    start: time
                });
            }
        }

        return all;
    }, []);

};

module.exports = {
    parse: parse
};
