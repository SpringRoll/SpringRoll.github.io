<template>
  <div class="main">
    <img src="@/assets/logo.png" alt="SpringRoll Logo">
    <h1 class="logo">SpringRoll</h1>

    <Game/>
  </div>
</template>

<script>
import Game from '@/components/Game';
export default {
  components: {
    Game
  }
};
</script>



<style lang="scss">
@import "~@/scss/mixins";
@import "~@/scss/fonts";
.logo {
  margin-top: 1.5rem;
  border-bottom: 0.3rem solid #000;
  width: 25rem;
  text-align: center;
  @extend .font-aleo;
  @extend .font-66;
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
