<template>
  <div class="viewMain">
    <a-tabs v-model:activeKey="activeKey" type="card" @change="handleChangeTab">
      <a-tab-pane
        :key="tabData[0].key"
        :tab="tabData[0].name"
        :forceRender="true"
      >
        <TabClone :data="tabData[0].TabClone" :parentKey="activeKey" @TabCloneActive="handleGetBtnStatus" />
      </a-tab-pane>
      <a-tab-pane
        :key="tabData[1].key"
        :tab="tabData[1].name"
        :forceRender="true"
      >
        <TabClone :data="tabData[1].TabClone" :parentKey="activeKey"  @TabCloneActive="handleGetBtnStatus"/>
      </a-tab-pane>
      <a-tab-pane
        :key="tabData[2].key"
        :tab="tabData[2].name"
        :forceRender="true"
      >
        <TabClone :data="tabData[2].TabClone" :parentKey="activeKey"  @TabCloneActive="handleGetBtnStatus"/>
      </a-tab-pane>
      <template #rightExtra>
        <a-button shape="circle" :icon="h(CaretUpOutlined)" />
        <a-button shape="circle" :icon="h(CaretDownOutlined)" />
      </template>
    </a-tabs>
  </div>
</template>
<script setup>
import { ref, h, onMounted, watchEffect } from "vue";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons-vue";
import { tabData } from "./data";
import TabClone from "./tabClone.vue";

const activeKey = ref("1");
const TabCloneData = ref();
const TabCloneKey = ref();
// const collapseStatus = ref(tabData.)

const getTabData = (key) => {
  const thisTab = tabData.find((item) => item.key === key)
  return thisTab?.TabClone
}
const handleChangeTab = (key) => {
    TabCloneData.value = getTabData(key)
}
const handleTabData = () => {
  const indexTab = tabData.findIndex((item) => item.key === activeKey.value)
  const indexTabClone = tabData[indexTab].TabClone.findIndex((item) => item.isActive === true)
  return {
    indexTab, indexTabClone
  }
}
const handleGetBtnStatus = (key) => {
    TabCloneKey.value = key
}
onMounted(() => {
    TabCloneData.value = getTabParentData(tabData[0].key)
})
</script>
<style>
.viewMain {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
.btnUp {
  margin-right: 10px !important;
}
.btnDown {
  margin-right: 10px !important;
}
</style>
