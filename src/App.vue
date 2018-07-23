<template>
  <v-app>
    <v-toolbar app :clipped-left="clipped">
      <v-btn to="/"><img class="logo" src="@/assets/logo.png" alt="logo"></v-btn>
      <v-btn to="/examples" flat>Examples</v-btn>
      <v-btn flat to="/docs">Docs</v-btn>
      <v-btn href="https://github.com/SpringRoll/SpringRoll" target="_blank" flat>Github</v-btn>
      <v-btn href="https://github.com/SpringRoll/SpringRoll/wiki" target="_blank" flat>Wiki</v-btn>
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


<style lang="scss" scoped>
.logo {
  width: 2.25rem;
  height: 2.25rem;
}
</style>

