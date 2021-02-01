<template>
  <div id="app">
    <el-button type="primary">TEST</el-button>
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

<style lang="scss" scoped></style>
