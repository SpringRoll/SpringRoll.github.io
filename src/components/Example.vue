<template>
  <div class="example__component">
    <h2 class="font-28 font-semi-bold">{{title}}</h2>
    <div class="example__slots">
      <div class="example__column">
        <slot name="example"></slot>
      </div>
      <div class="example__column --row">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['title']
};
</script>

<style lang="scss">
.example {
  &__column {
    display: flex;
    flex-direction: column;
    height: 26.4rem;
    margin-right: 10.3rem;
    margin-right: 10.9rem;
    width: 37.8rem;

    @media screen and (max-width: 786px) {
      &.--row {
        margin-top: 3rem;
      }
    }
  }

  &__slots {
    display: flex;
    width: 100%;

    @media screen and (max-width: 786px) {
      flex-direction: column;
    }
  }
}
</style>


