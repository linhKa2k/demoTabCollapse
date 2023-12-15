import { reactive } from "vue";

const CollapseType = {
  openAll : "openAll",
  closeAll : "closeAll",
  none : "none",
}

const data = [
  {
    key: "1",
    name: "Tab 1",
    TabClone: [
      {
        key: "1.1",
        name: "Tab 1.1",
        isActive: true,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "1.2",
        name: "Tab 1.2",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "1.3",
        name: "Tab 1.3",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
    ],
  },
  {
    key: "2",
    name: "Tab 2",
    TabClone: [
      {
        key: "2.1",
        name: "Tab 2.1",
        isActive: true,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "2.2",
        name: "Tab 2.2",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "2.3",
        name: "Tab 2.3",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
    ],
  },
  {
    key: "3",
    name: "Tab 3",
    TabClone: [
      {
        key: "3.1",
        name: "Tab 3.1", 
        isActive: true,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "3.2",
        name: "Tab 3.2",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
      {
        key: "3.3",
        name: "Tab 3.3",
        isActive: false,
        statusBtn: CollapseType.openAll,
        activeKey: ["1", "2", "3"],
      },
    ],
  },
];

const tabData = reactive(data);

export { tabData };
