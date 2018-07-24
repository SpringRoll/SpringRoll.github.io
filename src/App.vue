<template>
  <v-app>
    <v-toolbar app class="nav__bar">
      <v-btn flat active-class="nav__active" class="nav__button --logo" to="/"><img class=" nav__logo" src="@/assets/logo.png" alt="logo"></v-btn>
      <v-btn flat active-class="nav__active" class="nav__button nav__text font-21" to="/examples">Examples</v-btn>
      <v-btn flat active-class="nav__active" class="nav__button nav__text font-21" to="/docs">Docs</v-btn>
      <v-btn flat active-class="nav__active" class="nav__button nav__text font-21" href="https://github.com/SpringRoll/SpringRoll" target="_blank">Github</v-btn>
      <v-btn flat active-class="nav__active" class="nav__button nav__text font-21" href="https://github.com/SpringRoll/SpringRoll/wiki" target="_blank">Wiki</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  }
};
</script>


<style lang="scss">
@import "~@/scss/colors";
@import "~@/scss/fonts";
.nav {
  &__bar {
    .v-toolbar__content {
      padding-left: 0;
    }
  }
  &__text {
    @extend .font-21;
    @extend .font;
    text-transform: capitalize;
  }

  &__button {
    height: 100% !important;
    margin: 0 !important;
  }

  &__logo {
    width: 2.8rem;
    height: 2.8rem;
  }

  &__active.nav__text {
    border-bottom: 0.2rem solid $accent;
    @extend .font-semi-bold;
  }
}
</style>

