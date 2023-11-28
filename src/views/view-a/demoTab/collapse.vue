<template>
  <a-collapse v-model:activeKey="activeCollapse" @change="handleChange">
    <a-collapse-panel
      v-for="collapseItem in collapseItems"
      :key="collapseItem.keyCollapse"
      :header="collapseItem.title"
    >
      <div>{{ collapseItem.content }}</div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const collapseKey = ref()

const handleChange = (key) => {
  collapseKey.value = key
  emit("key",key)
}

const props = defineProps(["collapseItems", "activeCollapse", "handleChange"]);
const emit = defineEmits("key")
</script>

<style></style>
