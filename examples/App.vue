<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link to="/simple-box">SimpleBox</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class extends Vue {
}
</script>

<style lang="less" scoped>
</style>