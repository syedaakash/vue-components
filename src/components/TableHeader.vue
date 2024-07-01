<template>
  <thead>
  <tr>
    <th
        v-for="(col, index) in cols"
        :key="index"
        class="min-w-[136px] border-b border-primary-700"
        :class="col.showOnMobile === false ? 'hidden sm:table-cell' : ''"
    >
      <span class="flex">
        <span class="flex flex-col items-start text-white p-2 my-1">
          <Typography :class-name="`text-12 leading-12 ${textClassName}
          ${col.type === 'action' ? 'text-accent font-bold' : textColor + ' font-normal'}`">
            {{ col.name }}
          </Typography>
          <Typography v-if="col.label" :class-name="`text-8 leading-10 font-normal ${labelClassName}`">
            {{ col.label }}
          </Typography>
        </span>
        <Icon v-if="col.icon" :icon-name="(sortKey === col.key && sortAsc) ? 'down' : 'up'" size="16"
              class-name="cursor-pointer" @click="sortColumn(col.key)"/>
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
    textClassName: String,
    textColor: String,
    labelClassName: String,
    sortKey: String,
    sortAsc: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    sortColumn(key) {
      this.$emit('sort', key)
    }
  }
}
</script>