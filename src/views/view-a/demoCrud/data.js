import { ref, reactive } from "vue";
export const columns = [
  {
    title: "STT",
    key: "index",
    fixed: "left",
    align: "center", 
    width: "30px",
  },
  { 
    title: "Tên User",
    key: "name",
    dataIndex: "name",
    align: "center",
    fixed: "left",
  },
  {
    title: "Tuổi",
    key: "age",
    dataIndex: "age",
    align: "center",
  },
  {
    title: "Chức năng",
    key: "action",
    align: "center"
  },
];
