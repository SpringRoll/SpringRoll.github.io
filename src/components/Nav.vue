<template>
  <div class="nav">
    <router-link class="nav__link" to="/"><img class="nav__logo" src="@/assets/logo.png" alt="SpringRoll Logo">
      <span>Springroll.io</span>
    </router-link>
    |
    <a class="nav__link" href="https://github.com/SpringRoll" target="_blank">Github</a>
    |
    <router-link class="nav__link" to="/examples">Examples</router-link>
    |
    <a class="nav__link" href="https://github.com/SpringRoll/SpringRoll/wiki" target="_blank">Wiki</a>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  height: 3rem;
  background-color: #393f4d;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__logo {
    height: 2.25rem;
    padding: 0 0.75rem 0 0.5rem;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>



