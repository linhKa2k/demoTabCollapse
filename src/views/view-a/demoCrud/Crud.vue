<template>
  <div>
    <a-button type="primary" @click="showModalAdd">Thêm Mới</a-button>
    <a-modal v-model:visible="open" title="Thêm User" @ok="hadleAddUser">
      <div>
        <span>Tên</span>
        <a-input placeholder="nhập tên" v-model:value="name" />
      </div>
      <div>
        <span> Tuổi </span>
        <a-input placeholder="nhập tuổi" v-model:value="age" />
      </div>
    </a-modal>
    <!-- <modalAdd :is-visible="isModalVisible" @ok="handleOK" @cancel="handleCancel"/> -->

    <a-modal
      v-model:visible="openUpdate"
      title="Sửa User"
      @ok="hadleUpdateUser"
    >
      <div>
        <span>Tên</span>
        <a-input placeholder="nhập tên" v-model:value="name" />
      </div>
      <div>
        <span> Tuổi </span>
        <a-input placeholder="nhập tuổi" v-model:value="age" />
      </div>
    </a-modal>
    <a-table :dataSource="listUser" :columns="columns">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'action'">
          <a-button><EditOutlined @click="showModalUpdate(record)" /></a-button>
          <a-button><DeleteOutlined /></a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup>
import { useStore } from "@/stores";
import modalAdd from "./modalAdd.vue";
import { onMounted, ref } from "vue";
import { message } from "ant-design-vue";
import { columns } from "./data";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons-vue";
const { getListUser, addUser,updateUser } = useStore();
const listUser = ref([]);
const open = ref(false);
const openUpdate = ref(false);
const id = ref();
const name = ref("");
const age = ref("");

const showModalAdd = () => {
  open.value = true;
};
const showModalUpdate = (record) => {
  openUpdate.value = true;
  id.value = record.id
  name.value = record.name
  age.value = record.age
};

const hadleGetUser = async () => {
  try {
    const res = await getListUser();
    listUser.value = res;
  } catch (error) {
    message.error("Chưa có dữ liệu");
  }
};

const hadleAddUser = async () => {
  const data = { name: name.value, age: age.value };
  try {
    await addUser(data);
    await hadleGetUser();
    open.value = false;
  } catch (error) {
    message.error("error");
  }
};
const hadleUpdateUser = async () => {
  const data = {id: id.value, name: name.value, age: age.value };
  console.log(data,"data");
  try {
    await updateUser(data);
    await hadleGetUser();
    openUpdate.value = false;
  } catch (error) {
    message.error("error");
  }
};
onMounted(async () => await hadleGetUser());
</script>
<style></style>
