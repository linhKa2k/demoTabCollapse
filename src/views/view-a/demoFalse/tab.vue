<template>
  <div class="viewMain">
    <a-tabs v-model:activeKey="activeKey" @change="handleChangeTab">
      <a-tab-pane :key="data[0].key" tab="Tab 1"
        ><TabClone
          :dataTabClone="data[0].tabClone"
          :KeyTab="activeKey"
          @keyTabClone="dataTabCloneKey"
          @keyCollapsse="dataCollapse"
      /></a-tab-pane>
      <a-tab-pane :key="data[1].key" tab="Tab 2"
        ><TabClone
          :dataTabClone="data[1].tabClone"
          :KeyTab="activeKey"
          @keyTabClone="dataTabCloneKey"
          @keyCollapsse="dataCollapse"
      /></a-tab-pane>
      <a-tab-pane :key="data[2].key" tab="Tab 3"
        ><TabClone
          :dataTabClone="data[2].tabClone"
          :KeyTab="activeKey"
          @keyTabClone="dataTabCloneKey"
          @keyCollapsse="dataCollapse"
      /></a-tab-pane>
      <template #rightExtra>
        <div>
          <a-button
            style="border: none"
            class="btnDown"
            shape="circle"
            :disabled="listCollapse === 3 ? true : false"
            @click="btnDown"
          >
            <template #icon><CaretDownOutlined /></template>
          </a-button>
          <a-button
            style="border: none"
            class="btnUp"
            shape="circle"
            :disabled="listCollapse === 0 ? true : false"
            @click="btnUp"
          >
            <template #icon><CaretUpOutlined /></template>
          </a-button>
        </div>
      </template>
    </a-tabs>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, provide } from "vue";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons-vue";
// import TabClone from "./tabClone.vue";
const activeKey = ref("1");

const data = reactive([
  {
    key: "1",
    tabClone: [
      {
        key: "1.1",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "1.2",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "1.3",
        keyCollapse: ["1", "2", "3"],
      },
    ],
  },
  {
    key: "2",
    tabClone: [
      {
        key: "2.1",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "2.2",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "2.3",
        keyCollapse: ["1", "2", "3"],
      },
    ],
  },
  {
    key: "3",
    tabClone: [
      {
        key: "3.1",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "3.2",
        keyCollapse: ["1", "2", "3"],
      },
      {
        key: "3.3",
        keyCollapse: ["1", "2", "3"],
      },
    ],
  },
]);

const keyDataTabClone = ref([]);
const keyTab = ref();
const listCollapse = ref(data[0].tabClone[0].keyCollapse.length);

const dataCollapse = (v) => {
  listCollapse.value = v.length;
  console.log(listCollapse, "listCollapse");
};

const handleChangeTab = (key) => {
  keyTab.value = key;
};
const dataTabCloneKey = (key) => {
  keyDataTabClone.value = key;
};

const dataCollapseKey = ref(["1", "2", "3"]);
provide("key", dataCollapseKey);
const btnDown = () => {
  dataCollapseKey.value = ["1", "2", "3"];
};
const btnUp = () => {
  dataCollapseKey.value = [];
  console.log(dataCollapseKey, "dataCollapseKeys");
};
onMounted(() => {
  keyTab.value = data[0].key;
  listCollapse;
});
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
