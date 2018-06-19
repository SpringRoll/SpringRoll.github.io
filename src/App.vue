<template>
  <v-app custome>
    <v-navigation-drawer v-model="isOpen" app v-bind:temporary="true">
      <Nav/>
    </v-navigation-drawer>
    <Toolbar @nav="isOpen = !isOpen" />
    <Content/>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav';
import Toolbar from '@/components/Toolbar';
import Footer from '@/components/Footer';
import Content from '@/components/Content';

export default {
  name: 'app',
  components: {
    Nav,
    Toolbar,
    Footer,
    Content
  },

  data() {
    return {
      isOpen: false
    };
  }
}
</script>

<style lang="scss">
@import '@/scss/_main.scss';

.site-title {
  margin-left: 1rem;
}
</style>

