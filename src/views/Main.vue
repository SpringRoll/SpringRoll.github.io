<template>
  <div class="main">
    <img class="main__logo" src="@/assets/logo.png" alt="SpringRoll Logo">
    <h1 class="main__title">SpringRoll</h1>
    <div class="main__about">
      Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. Asymmetrical viral letterpress, McSweeney's seitan 3 wolf moon drinking vinegar sartorial pour-over messenger bag photo booth umami next level craft beer.
    </div>
    <!-- <Game/> -->
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
@import "~@/scss/colors";

.main {
  margin-top: 11.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  &::before,
  &::after {
    background-size: cover;
    bottom: 0;
    content: " ";
    height: 35rem;
    opacity: 0.4;
    position: absolute;
    width: 100%;
  }

  &::before {
    background-image: url("~@/assets/svg/wave1.svg");
  }

  &::after {
    background-image: url("~@/assets/svg/wave2.svg");
  }

  &__logo {
    width: 11.8rem;
    height: 11.8rem;
    margin-bottom: 0.8rem;
  }

  &__title {
    color: $primary;
    @extend .font-aleo;
    @extend .font-66;
  }

  &__about {
    width: 66rem;
    height: 15rem;
    margin-top: 5.3rem;
    @extend .font-21;
    @extend .font-light;
  }
}
</style>
