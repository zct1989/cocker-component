<template>
  <div class="c-menu-item" :class="{'is-actived':this.menu&&this.menu.selected===this}">
   <q-btn flat v-close-overlay @click="onClickItem">
     <slot></slot>
  </q-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { QBtn,QPopover } from "quasar-framework/src/components";
import { CloseOverlay } from "quasar-framework/src/directives";
@Component({
  components:{
    QPopover
  },
  directives:{
    CloseOverlay
  }
})
export default class CMenuItem extends Vue {
  private level = 0;
  private root = null;
  private menu = null;
  
  private getCurrentLevel(){
    let target = this.$parent
    while(target&&target.$parent&&target.$options){
      if(target.$options.name === 'CSubMenu'){
        this.level++
        this.root = target
      }
      if(target.$options.name === 'CMenu'){
        this.menu = target
        break;
      }
      target = target.$parent
    }

    this.root = this.root || this
  }

  private mounted(){
    this.getCurrentLevel()
  }

  get isSelected(){
    console.log(this.menu)
   return  this.menu&&this.menu.selected === this
  }

  private onClickItem(){
    this.menu.setSelected(this.root)
  }
}
</script>

<style lang="less" scoped>
.c-menu-item {
  .q-btn{
    width:100%;
    min-width:100px;
  }
}
</style>
