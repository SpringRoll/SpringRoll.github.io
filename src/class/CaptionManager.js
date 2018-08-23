import { EventBus } from './EventBus';
export class CaptionManager {

  constructor() {
    this.data = {};
    this.activeCaption = undefined;
    this.activeIndex = 0;
    EventBus.$on('caption_update', this.updateActiveCaption.bind(this));
    EventBus.$on('caption_reset', this.resetCaptions.bind(this));
    EventBus.$on('caption_add', this.addCaption.bind(this));
    EventBus.$on('caption_get', this.getCaptions.bind(this));
    EventBus.$on('file_selected', this.fileChanged.bind(this));
  }

  fileChanged($event) {
    const name = $event.file.name.replace(/.(ogg|mp3|mpeg)$/, '').trim();
    if (!name || name === this.activeCaption) {
      return;
    }

    if (!Array.isArray(this.data[name])) {
      this.addCaption(name);
    } else {
      this.activeCaption = name;
      this.activeIndex = 0;
    }
    this.emitCurrent();
  }

  getCaptions() {
    EventBus.$emit('caption_data', this.data);
  }

  addCaption(key = this.activeCaption) {
    if ('string' !== typeof key || !key) {
      return;
    }

    this.data[key] = [{
      start: 0,
      end: 0,
      content: ' '
    }];

    this.activeCaption = key;
    this.activeIndex = 0;
  }

  updateActiveCaption({ content, start, end }) {
    const current = this.data[this.activeCaption][this.activeIndex];

    this.data[this.activeCaption][this.activeIndex] = {
      content: content || current.content,
      end: end || current.end,
      start: start || current.start,
    };

    this.emitCurrent();
  }

  resetCaptions() {
    this.data = {};
    this.activeCaption = undefined;
  }

  emitCurrent() {
    EventBus.$emit('caption_changed', {name: this.activeCaption, index: this.activeIndex, data: this.data[this.activeCaption][this.activeIndex], lastIndex: this.data[this.activeCaption].length });
  }
}