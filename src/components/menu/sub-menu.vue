<template>
  <div class="c-sub-menu" :class="{'is-actived':isSelected}">
   <q-btn flat :icon-right="icon">
     <slot  name="label" ></slot>
      <q-popover :anchor="anchor" :self="self">
        <slot>
        </slot>
      </q-popover>
   </q-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { QBtn,QPopover } from "quasar-framework/src/components";
@Component({
  components:{
    QBtn,
    QPopover
  }
})
export default class CSubMenu extends Vue {
  private level = 0;
  private root;
  private menu;

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
    return this.menu&&this.menu.selected === this
  }

  get anchor(){
    return this.level===0?'bottom left':'top right'
  }

  get self(){
    return 'top left'
  }

  get icon(){
    return this.level===0?'keyboard_arrow_down':'keyboard_arrow_right'
  }
}
</script>

<style lang="less" scoped>
.c-sub-menu {
  .q-btn{
    width:100%;
    min-width:100px;
  }
}
</style>
