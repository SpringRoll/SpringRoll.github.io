<template>
  <iframe :src="base + 'game'" frameborder="0" />
</template>

<script>

import Iframe from '@/mixins/Iframe';
export default {
  mixins: [Iframe]
};

</script>

