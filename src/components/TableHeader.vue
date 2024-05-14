<template>
  <thead>
  <tr>
    <th
        v-for="(col, index) in cols"
        :key="index"
        class="min-w-[136px] border-b border-primary-700"
    >
      <span class="flex">
        <span class="flex flex-col items-start text-white p-2 my-1">
          <Typography class-name="text-12 leading-12 font-normal text-gray-300">{{ col.name }}</Typography>
          <Typography v-if="col.label" class-name="text-8 leading-10 font-normal text-gray-300">{{ col.label }}</Typography>
        </span>
        <Icon v-if="col.icon" :icon-name="col.icon" size="16"/>
      </span>
    </th>
  </tr>
  </thead>
</template>

<script>
import Typography from "@/components/Typography.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "TableHeader",
  components: {Icon, Typography},
  props: {
    cols: Array,
  }
}
</script>