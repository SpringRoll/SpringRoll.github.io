<template>
  <div class="time-stamp">
    {{minute}}:{{second}}:{{mili}}
  </div>
</template>

<script>
import { EventBus } from '@/class/EventBus';
import TimeStampMixin from '@/mixins/TimeStamp';
export default {
  props: {
    input: {
      type: Number,
      required: true,
      default: 0.0
    }
  },
  mixins: [TimeStampMixin],
  watch: {
    input() {
      this.updateTime(this.input);
    }
  },
  mounted() {
    EventBus.$on('time_get', this.emitTime);
  },
  destroyed() {
    EventBus.$off('time_get', this.emitTime);
  }
};
</script>

