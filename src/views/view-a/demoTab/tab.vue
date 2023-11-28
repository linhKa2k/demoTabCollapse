<template>
  <div>
    <a-tabs :default-active-key="activeTab">
      <a-tab-pane
        v-for="mainTab in mainTabs"
        :key="mainTab.keyTab"
        :tab="mainTab.title"
      >
        <a-tabs :default-active-key="mainTab.subTabs[0].keySubTab">
          <a-tab-pane
            v-for="subTab in mainTab.subTabs"
            :key="subTab.keySubTab"
            :tab="subTab.title"
          >
            <Collapse
              :collapseItems="subTab.collapseItems"
              :activeCollapse="activeCollapse"
              @key="logKey"
            />
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <template #rightExtra>
        <div>
          <a-button
            style="border: none"
            :disabled="activeCollapse.length > 1 ? true : false"
            class="btnDown"
            @click="btnDown"
          >
            <template #icon><CaretDownOutlined /></template>
          </a-button>
          <a-button
            style="border: none"
            :disabled="activeCollapse.length === 0 ? true : false"
            class="btnUp"
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
import { ref, defineProps } from "vue";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons-vue";
import Collapse from "./collapse.vue";

const props = defineProps(["mainTabs"]);

const activeCollapse = ref();

const activeTab = ref("1");

const logKey = (v) => {
    v.map((item) => item)
}

const mainTabs = [
  {
    keyTab: "tab1",
    title: "Tab 1",
    subTabs: [
      {
        keySubTab: "subtab1",
        title: "Tab 1-1",
        collapseItems: [
          {
            keyCollapse: "collapse1",
            title: "Collapse 1",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse2",
            title: "Collapse 2",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse3",
            title: "Collapse 3",
            content: "Collapse 1",
          },
        ],
      },
      {
        key: "subtab2",
        title: "Tab 1-2",
        collapseItems: [
          {
            keyCollapse: "collapse4",
            title: "Collapse 1",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse5",
            title: "Collapse 2",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse6",
            title: "Collapse 3",
            content: "Collapse 1",
          },
        ],
      },
    ],
  },
  {
    keyTab: "tab2",
    title: "Tab 2",
    subTabs: [
      {
        keySubTab: "subtab3",
        title: "Tab 2-1",
        collapseItems: [
          {
            keyCollapse: "collapse7",
            title: "Collapse 1",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse8",
            title: "Collapse 2",
            content: "Collapse 2",
          },
          {
            keyCollapse: "collapse9",
            title: "Collapse 3",
            content: "Collapse 3",
          },
        ],
      },
      {
        key: "subtab4",
        title: "Tab 2-2",
        collapseItems: [
          {
            keyCollapse: "collapse10",
            title: "Collapse 1",
            content: "Collapse 1",
          },
          {
            keyCollapse: "collapse11",
            title: "Collapse 2",
            content: "Collapse 2",
          },
          {
            keyCollapse: "collapse12",
            title: "Collapse 3",
            content: "Collapse 3",
          },
        ],
      },
    ],
  },
];

const result = mainTabs.filter((word) => word.length > 6);


const btnUp = () => {
  activeCollapse.value = [];
};
const btnDown = () => {
  activeCollapse.value = mainTabs.flatMap((mainTab) =>
    mainTab.subTabs.flatMap((subTab) =>
      subTab.collapseItems.map((collapseItem) => collapseItem.keyCollapse)
    )
  );
};


activeCollapse.value = mainTabs.flatMap((mainTab) =>
  mainTab.subTabs.flatMap((subTab) =>
    subTab.collapseItems.map((collapseItem) => collapseItem.keyCollapse)
  )
);

// activeCollapse.value = mainTabs.map((item) =>
//   item.subTabs.map((item) => item.collapseItems.map((item) => item.keyCollapse))
// );
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
