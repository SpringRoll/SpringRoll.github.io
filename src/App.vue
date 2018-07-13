<template>
  <v-app>
    <v-toolbar app :clipped-left="clipped">
      <v-btn to="/" flat>LOGO</v-btn>
      <v-btn to="examples-home" flat>Examples</v-btn>
      <v-btn flat>Docs</v-btn>
      <v-btn href="https://github.com/SpringRoll/SpringRoll" target="_blank" flat>Github</v-btn>
      <v-btn flat>Wiki</v-btn>
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
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  }
};
</script>
