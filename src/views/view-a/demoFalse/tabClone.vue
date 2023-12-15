<template>
  <div class="viewClone">
    <a-tabs
      v-model:activeKey="activeKey"
      @change="handleChangeTabClone"
      centered
    >
      <a-tab-pane :key="props.dataTabClone[0].key" tab="Tab 1.1">
        <Collapse :dataCollapse="props.dataTabClone[0].keyCollapse" :tabParent="keyTabParent" :tabChild="keyTabChild"  @keyCollapse="dataKeyCollapse"/>
      </a-tab-pane>
      <a-tab-pane :key="props.dataTabClone[1].key" tab="Tab 1.2"
        ><Collapse :dataCollapse="props.dataTabClone[1].keyCollapse" :tabParent="keyTabParent" :tabChild="keyTabChild"  @keyCollapse="dataKeyCollapse"
      /></a-tab-pane>
      <a-tab-pane :key="props.dataTabClone[2].key" tab="Tab 1.3" 
        ><Collapse :dataCollapse="props.dataTabClone[2].keyCollapse" :tabParent="keyTabParent" :tabChild="keyTabChild"  @keyCollapse="dataKeyCollapse"
      /></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup>
import { ref, defineProps,defineEmits, onMounted } from "vue";
import Collapse from "./collapse.vue";
const activeKey = ref(props.dataTabClone[0].key);

const props = defineProps(["dataTabClone", "KeyTab"]);
const emit = defineEmits(["keyTabClone","keyCollapsse"]);

const keyTabParent = ref()
const keyTabChild = ref()
keyTabParent.value = props.KeyTab

const handleChangeTabClone = (key) => {
  keyTabChild.value = key
  emit("keyTabClone", key);
};


const dataKeyCollapse = (v) => {
emit("keyCollapsse",v)
}

onMounted(() => {
emit("keyTabClone",activeKey.value)
});

</script>
<style>
.viewClone {
  max-width: 1080px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
