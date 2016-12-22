var assert = require("assert");
var MP4Chaps = require('../index.js');

const intro_chapter = {
  start: 1200,
  title: "Intro"
};

describe('MP4Chaps', function() {
  describe('#parse()', function() {
    
    it('should return empty list for invalid strings', function() {
      assert.deepEqual([], MP4Chaps.parse("abc"));
    });

    it('should return json with start and title', function() {
      assert.deepEqual([intro_chapter], MP4Chaps.parse("1.2 Intro"));
    });

    it('should ignore trailing and leading whitespace in file', function() {
      assert.deepEqual([intro_chapter], MP4Chaps.parse(" 1.2 Intro "));
    });

    it('should ignore trailing and leading whitespace around chapter', function() {
      assert.deepEqual([intro_chapter], MP4Chaps.parse(" 1.2   Intro   \n Blorg"));
    });

    it('should remove BOM', function() {
      assert.deepEqual([intro_chapter], MP4Chaps.parse(String.fromCharCode(0xFEFF) + "1.2 Intro"));
    });

    it('should skip invalid chapters', function() {
      assert.deepEqual([intro_chapter], MP4Chaps.parse("1.2 Intro\nBlorg"));
    });

    it('should skip chapters with invalid timecode', function() {
      assert.deepEqual([], MP4Chaps.parse("1.2.3.4.5 Intro"));
    });

    it('should keep intro at 0 milliseconds', function() {
      assert.deepEqual([{ start: 0, title: "Intro" }], MP4Chaps.parse("00:00:00.000 Intro"));
    });

  });
});
