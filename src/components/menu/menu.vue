<template>
  <div class="c-menu">
    <div :class="{row:horizontal,col:!horizontal}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { QCheckbox } from "quasar-framework/src/components";
@Component({
  components:{
    QCheckbox
  }
})
export default class CMenu extends Vue {
  @Prop({
    default:true
  })
  horizontal

  public selected = null

  public setSelected(node){
    this.selected = node
  }
}
</script>

<style lang="less" scoped>
.c-menu {
  
}
</style>

<style lang="less">
.c-menu {
  ul,li{
    list-style :none;
  }
}
</style>
