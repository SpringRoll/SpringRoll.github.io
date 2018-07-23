<template>
  <iframe class="game" :src="base + 'game/index.html'" frameborder="0" />
</template>

<script>

import Iframe from '@/mixins/Iframe';
export default {
  mixins: [Iframe]
};

</script>


<style lang="scss" scoped>
.game {
  width: 40rem;
  height: 30rem;
}
</style>

