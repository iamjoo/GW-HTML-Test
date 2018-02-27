const EMOJI_MAP_ARRAY =
    [['faces', ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺', '🙂']], ['animals', ['🐕', '🐩', '🐺', '🐱', '🐈', '🐯', '🐅', '🐆', '🐴', '🐎', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🐘', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🐻', '🐨', '🐼', '🐾', '🐔', '🐓', '🐣', '🐤', '🐥']], ['vehicles', ['🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🛴', '🛵', '🚏', '🛣', '🛤']]];


/**
 * A service that contains emojis.
 * @final
 */
class EmojiService {
  constructor() {
    this.emojiMap_ = new Map(EMOJI_MAP_ARRAY);
  }

  getEmojiMap() {
    return new Map(this.emojiMap_);
  }
}

angular.module('mainApp.services.emoji', [])
    .service('emojiService', EmojiService);
