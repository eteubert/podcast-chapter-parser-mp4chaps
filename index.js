var npt = require("normalplaytime");

const pattern = /^([\d\.:]+)\s(.*)$/

const parse = function(text) {

    return text.trim().split(/(\r?\n)/).reduce((all, chapter) => {

        let matches = chapter.match(pattern);

        if (matches) {
            let time = npt.parse(matches[1]);

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
