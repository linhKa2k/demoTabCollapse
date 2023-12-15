<template>
  <div class="viewClone">
    <a-tabs
      v-model:activeKey="activeKey"
      centered
      type="card"
      @change="handleChangeTab"
    >
      <a-tab-pane
        :key="props.data[0].key"
        :tab="props.data[0].name"
        :forceRender="true"
      >
        <Collapse />
      </a-tab-pane>
      <a-tab-pane
        :key="props.data[1].key"
        :tab="props.data[1].name"
        :forceRender="true"
      >
        <Collapse />
      </a-tab-pane>
      <a-tab-pane
        :key="props.data[2].key"
        :tab="props.data[2].name"
        :forceRender="true"
      >
        <Collapse />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup>
import { ref, onMounted, watchEffect, defineEmits, defineProps } from "vue";
import { tabData } from "./data";
import Collapse from "./collapse.vue";

const emits = defineEmits(["douBtnStatus", "TabCloneActive"]);
const props = defineProps(["data", "parentKey"]);

const activeKey = ref(props.data[0].key);
const collapseKey = ref([])

const handleTabValue = () => {
  const indexTab = tabData.findIndex((item) => item.key === props.parentKey)
  const indexTabClone = tabData[indexTab].TabClone.findIndex((item) => item.isActive === true)
  const handleChangeBtnStatus = (val) => {
    tabData[indexTab].TabClone[indexTabClone].statusBtn = val
  }
  const handleChangeCollapseKey = (val) => {
    tabData[indexTab].TabClone[indexTabClone].activeKey = val
  }
  const handleGetCollapseStatus = () => {
    collapseStatus.value = tabData[indexTab].TabClone[indexTabClone].statusBtn
    collapseKey.value = tabData[indexTab].TabClone[indexTabClone].activeKey
  } 
  return {
    handleChangeBtnStatus, handleGetCollapseStatus, handleChangeCollapseKey
  }
}

</script>
<style>
.viewClone {
  max-width: 1080px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
