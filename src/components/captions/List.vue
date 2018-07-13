
<script>
export default {
  name: 'List',
  props: ['files'],
  methods: {
    select(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="scss" scoped>
$itemColor: #d9534f;
$fontColor: #000;
$background: #eee;

.list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #ccc;
  border-radius: 0.3rem;
  background: $background;
  overflow-y: auto;
  width: 100%;
  flex-grow: 1;
  min-height: 15rem;
}

.item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: 3rem;
  margin: 0.1rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $fontColor;
}

.empty {
  align-self: center;
  text-align: center;
  width: 100%;
}
</style>


<template>
  <div class="list">
    <div class="empty" v-if="0 >= files.length">Add Project</div>
    <v-btn v-on:click="$emit('select', file)" class="btn secondary item" v-else v-for="file of files" :key="file.name">
      <span class="item__text">{{file.name}}</span>
    </v-btn>
  </div>
</template>

