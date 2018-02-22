/**
 * A service that contains emojis.
 * @final
 */
class EmojiService {
  constructor() {
    this.emoji_ = [
      '😀',
      '😁',
      '😂',
      '😀',
      '😁',
      '😂',
      '😀',
      '😁',
      '😂',
      '😀',
      '😁',
      '😂',
      '😀',
      '😁',
      '😂',
      '😀',
      '😁',
      '😂',
      '🚀',
      '🚁',
      '🚓',
      '🚀',
      '🚁',
      '🚓',
      '🚀',
      '🚁',
      '🚓',
      '🚀',
      '🚁',
      '🚓',
      '🚀',
      '🚁',
      '🚓',
      '🚀',
      '🚁',
      '🚓',
      '🦁',
      '🦄',
      '🦇',
      '🦁',
      '🦄',
      '🦇',
      '🦁',
      '🦄',
      '🦇',
      '🦁',
      '🦄',
      '🦇',
      '🦁',
      '🦄',
      '🦇',
      '🦁',
      '🦄',
      '🦇',
    ];
  }

  getEmoji() {
    return this.emoji_.slice();
  }
}

angular.module('mainApp.services.emoji', [])
    .service('emojiService', EmojiService);
