<template>
  <div id="app">
    <div class="main">
      <div class="header clear">
        <div class="logo float-left">DAVID SAMA</div>
      </div>
    </div>
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: -5px auto;
  padding: 5px 0;
  width: 800px;
  //box-shadow: 0 0 30px rgba(48, 48, 48, 0.8), 0 0 3px rgba(48, 48, 48, 0.8);
  background: #0004;

  .header {
    height: 60px;
    border-bottom: 1px solid #9ab;

    .logo {
      padding-left: 20px;
      line-height: 60px;
      color: #666;
      text-shadow: 1px 1px 2px #fff;
      font-size: 50px;
      font-weight: bold;
      font-style: italic;
      font-family: monospace;
      word-spacing: -18px;
    }
  }
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
