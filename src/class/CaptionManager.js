import { EventBus } from './EventBus';
export class CaptionManager {

  constructor() {
    this.data = {};
    this.activeCaption = undefined;
    this.activeIndex = 0;
    EventBus.$on('caption_update', this.updateActiveCaption.bind(this));
    EventBus.$on('caption_reset', this.resetCaptions.bind(this));
    EventBus.$on('caption_add', this.addCaption.bind(this));
    EventBus.$on('caption_add_index', this.addIndex.bind(this));
    EventBus.$on('caption_get', this.emitData.bind(this));
    EventBus.$on('file_selected', this.fileChanged.bind(this));
    EventBus.$on('caption_move_index', this.moveIndex.bind(this));
    EventBus.$on('caption_remove_index', this.removeAtIndex.bind(this));
    EventBus.$on('time_current', this.onTimeChange.bind(this));
  }

  onTimeChange() {

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
      this.emitCurrent();
    }
  }

  addCaption(key = this.activeCaption) {
    if ('string' !== typeof key || !key) {
      return;
    }

    this.data[key] = [this.template];

    this.activeCaption = key;
    this.activeIndex = 0;

    this.emitCurrent();
    this.emitData();
  }

  addIndex() {
    this.data[this.activeCaption].push(this.template);
    this.activeIndex++;
    this.emitCurrent();
    this.emitData();
  }

  updateActiveCaption({ content, start, end }) {
    const current = this.currentCaptionIndex;

    this.data[this.activeCaption][this.activeIndex] = {
      content: content || current.content,
      end: 'number' === typeof end ? end : current.end,
      start: 'number' === typeof start ? start : current.start,
    };

    this.emitCurrent();
  }

  resetCaptions() {
    this.data = {};
    this.activeCaption = undefined;
  }

  moveIndex($event) {
    if ('number' === typeof $event) {
      const newIndex = this.activeIndex + $event;
      if (0 > newIndex) {
        this.activeIndex = 0;
      } else if (newIndex > this.lastIndex) {
        this.activeIndex = this.lastIndex;
      } else {
        this.activeIndex = newIndex;
      }
      this.emitCurrent();
    }
  }

  removeAtIndex($event = this.activeIndex) {
    if ('undefined' === typeof this.currentCaption[$event]) {
      return;
    }

    this.currentCaption.splice($event, 1);

    if (0 < this.activeIndex) {
      this.activeIndex--;
    }

    this.emitCurrent();
    this.emitData();
  }

  emitCurrent() {
    EventBus.$emit('caption_changed', {name: this.activeCaption, index: this.activeIndex, data: this.currentCaptionIndex, lastIndex: this.lastIndex });
  }

  emitData() {
    EventBus.$emit('caption_data', this.data);
  }

  get lastIndex() {
    return this.currentCaption.length - 1 || 0;
  }

  get currentCaption() {
    return this.data[this.activeCaption];
  }

  get currentCaptionIndex() {
    return this.data[this.activeCaption][this.activeIndex];
  }

  set currentCaption(newArray) {
    if (Array.isArray(newArray)) {
      this.data[this.activeCaption] = newArray;
    }
  }

  get template() {
    return {
      start: 0,
      end: 0,
      content: ' '
    };
  }
}