# Podcast Chapter Parser for mp4chaps

Podcast Chapter Parser for mp4chaps

## Installation

```bash
npm install podcast-chapter-parser-mp4chaps
```

## Example

```js
var MP4Chaps = require('podcast-chapter-parser-mp4chaps');

var chapters = MP4Chaps.parse("1.2 Intro\n20 Say Hello");
// =>
// [
//     { start: 1200, title: "Intro" },
//     { start: 2000, title: "Say Hello" }
// ]
```

## Development

```
npm install
npm test
```
