<template>
  <div class="container">
    <simple-box></simple-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  private text = "this is a demo for create component";
}
</script>

<style lang="less">
</style>