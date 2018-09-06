<template>
  <div class="simple-box">
    {{text}}
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SimpleBox extends Vue {
  private text = "this is a demo for create component";
}
</script>

<style lang="less" scoped>
.simple-box {
  background: red;
}
</style>
