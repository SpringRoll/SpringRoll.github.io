import { EventBus } from '../class/EventBus';
export default {
  data() {
    return {
      minute: '00',
      second: '00',
      mili: '00',
      time: 0.0
    };
  },
  methods: {
    updateTime(time) {
      if (time !== this.time) {
        this.time = time;
        this.minute = this.format((this.time / 60) | 0, 59);
        this.second = this.format(this.time % 60 | 0, 59);
        this.mili = this.format(((this.time % 1) * 100) | 0, 99);
      }
    },
    calculateTime() {
      this.clean();
      this.formatAll();
      const minute = Number(this.minute) * 60;
      const seconds = Number(this.second);
      const miliSeconds = Number(this.mili) / 100;

      this.time = minute + seconds + miliSeconds;
    },
    clean() {
      const sanitize = /^\D/g;
      this.minute = this.minute
        .toString()
        .replace(sanitize, '')
        .slice(0, 2);
      this.second = this.second
        .toString()
        .replace(sanitize, '')
        .slice(0, 2);
      this.mili = this.mili
        .toString()
        .replace(sanitize, '')
        .slice(0, 2);
    },
    emitTime() {
      EventBus.$emit('time_current', this.time);
    },
    formatAll() {
      this.minute = this.format(this.minute, 59);
      this.second = this.format(this.second, 59);
      this.mili = this.format(this.mili, 99);
    },
    format(value, max) {
      value = Number(value) | 0;
      if (value > max) {
        return max;
      }
      if (/^\d$/.test(value)) {
        return '0' + value;
      }

      return value;
    }
  }
};
