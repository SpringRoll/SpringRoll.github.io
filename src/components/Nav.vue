<template>
  <v-list dense class="nav__list">
    <v-list-tile v-for="route of routes" :key="route.path">
      <v-list-tile-action>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link class="title nav__link" v-bind:to="route.path">
          {{ route.title }}
        </router-link>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>{{'code' }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <a class="title nav__link" href="https://github.com/SpringRoll" target="_blank">Github</a>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>{{'info' }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <a class="title nav__link" href="https://github.com/SpringRoll/SpringRoll/wiki" target="_blank">Wiki</a>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { routes } from '@/router';
export default {
  data() {
    return {
      routes
    };
  }
};
</script>


<style lang="scss" scoped>
.nav {
  &__link {
    text-decoration: none;
    font-family: inherit;
    color: rgba(0, 0, 0, 0.54);
    font-weight: bold;
  }

  &__list {
    margin-top: 4rem;
  }
}
</style>
