<template>
  <div class="game__container">
    <iframe class="game" :src="base + 'game/index.html'" frameborder="0" />
  </div>
</template>

<script>

import Iframe from '@/mixins/Iframe';
export default {
  mixins: [Iframe]
};

</script>


<style lang="scss">
.game {
  height: 52rem;
  width: 65rem;

  &__container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
}
</style>

