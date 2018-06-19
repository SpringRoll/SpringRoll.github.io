<template>
  <div class="main">
    <img src="@/assets/logo.png" alt="SpringRoll Logo">
    <h1 class="logo">SpringRoll</h1>

    <div class="nav">
      <router-link class="link" :to="{name: 'examples'}">Examples</router-link>
      <router-link class="link" :to="{name: 'docs'}">Docs</router-link>
      <a class="link" href="https://github.com/SpringRoll" target="_blank">Github</a>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.logo {
  margin-top: 1.5rem;
  border-bottom: 0.3rem solid #000;
  width: 25rem;
  text-align: center;
}
.link {
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
}

.nav {
  margin-top: 1rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>



