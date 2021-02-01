<template>
  <div id="app">
    <div class="main"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Button } from 'element-ui';

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  margin: 0 auto;
  width: 800px;
}
@media only screen and (min-width: 1000px) {
  .main {
    width: 960px;
  }
}
@media only screen and (min-width: 1200px) {
  .main {
    width: 1000px;
  }
}
@media only screen and (min-width: 1400px) {
  .main {
    width: 1200px;
  }
}
</style>
