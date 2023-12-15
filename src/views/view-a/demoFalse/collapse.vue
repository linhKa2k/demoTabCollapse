<template>
  <a-collapse
    v-model:activeKey="activeKey"
    @change="handleCollapseChange"
    :expand-icon-position="expandIconPosition"
  >
    <a-collapse-panel :key="props.dataCollapse[0]"  header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel :key="props.dataCollapse[1]" header="This is panel header 2">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel :key="props.dataCollapse[2]" header="This is panel header 3">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, watchEffect, inject } from "vue";
const activeKey = ref(["1", "2", "3"]);
const expandIconPosition = ref("right");
const props = defineProps(["dataCollapse","tabParent","tabChild"]);
const keyData = inject('key')
// activeKey.value = keyData
// console.log(activeKey,"activeKey"); 

const emit = defineEmits(["keyCollapse"]);

const data = ref();
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const handleCollapseChange = (key) => {
  data.value = key;
  emit("keyCollapse", key);
};

watchEffect(() => {
  // activeKey.value = keyData
});
onMounted(() => {});
</script>
