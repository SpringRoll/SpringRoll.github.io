<template>
<div class="time-stamp-input">
  <div class="time-stamp-input__container">
    <span> <span class="time-stamp-input__name">{{name}}</span> Time:</span>
    <div class="time-stamp">
      <input class="time-stamp-input__input" v-model="minute" type="number" @blur="blur" min="0" max="59" step="1"/>
      :
      <input class="time-stamp-input__input"  v-model="second" type="number" @blur="blur" min="0" max="59" step="1"/>
      :
      <input class="time-stamp-input__input" v-model="mili" type="number" @blur="blur" min="0" max="99" step="1"/>
    </div>
  </div>
    <v-btn color="accent" @click="getTime" class="time-stamp-input__button font-16 font-semi-bold --capital">Use Current Time</v-btn>
</div>
</template>

<script>
import TimeStampMixin from '@/mixins/TimeStamp';
import { EventBus } from '@/class/EventBus';
export default {
  mixins: [TimeStampMixin],
  props: {
    name: String,
    default: Number
  },
  watch: {
    default() {
      this.updateTime(this.default || 0);
    }
  },
  methods: {
    blur() {
      this.calculateTime();
      this.$emit('time', this.time);
    },
    getTime() {
      EventBus.$once('time_current', this.updateTime);
      EventBus.$emit('time_get');
      this.$emit('time', this.time);
    }
  },
};
</script>
<style lang="scss">
.time-stamp-input {
  width: 25.2rem;

  &__input {
    &[type="number"] {
      width: 2rem;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;

      &:hover,
      &:focus {
        -moz-appearance: number-input;
      }
    }
  }

  &__name {
    text-transform: capitalize;
  }

  &__button {
    width: 100%;
    margin: 0 !important;
  }

  &__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 1.8rem;
  }
}
</style>

