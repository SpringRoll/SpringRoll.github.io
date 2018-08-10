<template>
  <div class="main">
    <img class="main__logo" src="@/assets/logo.png" alt="SpringRoll Logo">
    <h1 class="main__title">SpringRoll</h1>
    <div class="main__about font-31">
      Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. Asymmetrical viral letterpress, McSweeney's seitan 3 wolf moon drinking vinegar sartorial pour-over messenger bag photo booth umami next level craft beer.
    </div>
    <!-- <Game/> -->
  </div>
</template>

<style lang="scss">
@import "~@/scss/mixins";
@import "~@/scss/fonts";
@import "~@/scss/colors";

.main {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 11.5rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 3rem 7rem 0;
  }

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
    @media screen and (max-width: 768px) {
      background-image: none;
    }
  }

  &::after {
    background-image: url("~@/assets/svg/wave2.svg");
    @media screen and (max-width: 768px) {
      background-image: none;
    }
  }

  &__logo {
    height: 11.8rem;
    margin-bottom: 0.8rem;
    width: 11.8rem;
  }

  &__title {
    @extend .font-66;
    @extend .font-aleo;
    color: $primary;
  }

  &__about {
    @extend .font-light;
    color: $secondary;
    margin-top: 5.3rem;
    max-width: 96rem;

    text-align: center;
  }
}
</style>
