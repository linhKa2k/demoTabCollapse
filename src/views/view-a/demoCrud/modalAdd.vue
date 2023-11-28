<template lang="">
  <div>
    <a-modal
      v-model:visible="isVisible"
      title="Thêm User"
      @ok="handleOK"
      @cancel="handleCancel"
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
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
const name = ref("");
const age = ref("");
const { isVisible } = defineProps(["isVisible"]);
const { emit } = defineEmits();
const handleOK = () => {
  emit("ok", { name, age });
};

const handleCancel = () => {
  emit("cancel");
};
</script>
