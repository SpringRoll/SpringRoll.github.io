<template>
  <div class="app">
    <Nav/>
    <transition name="page-transition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
export default {
  name: 'app',
  components: {
    Nav
  },
}
</script>

<style lang="scss">
@import '@/scss/_main.scss';
$nav-padding: calc(50% - 10.5rem);
$nav-top-main: 40%;
$nav-top: 0;
.app {
  // position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: #fff;
  height: 100%;
  width: 100%;

  background: rgb(57, 63, 77);
  background: linear-gradient(
    180deg,
    rgba(57, 63, 77, 1) 19%,
    rgba(89, 95, 113, 1) 50%,
    rgba(132, 134, 139, 1) 69%,
    rgba(255, 255, 255, 1) 100%
  );
}

// @keyframes fade-out {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(50%);
//     opacity: 0;
//   }
// }

// @keyframes fade-in {
//   from {
//     transform: translateX(150%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// .page-transition- {
//   &enter-active {
//     position: absolute;
//     animation: fade-in 2s;
//   }
//   &leave-active {
//     position: absolute;
//     animation: fade-out 2s;
//   }
// }
</style>

