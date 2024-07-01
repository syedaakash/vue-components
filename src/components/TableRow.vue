<template>
  <tbody>
  <tr>
    <td
        v-for="(data, index) in tableData"
        :key="index"
        class="min-w-[136px] border-b border-primary-700"
    >
      <span v-if="data.type==='text-pill'" class="flex items-center" :class="data.icon ? 'gap-4' : 'pl-7'">
        <Icon v-if="data.icon" :icon-name="data.icon" size="12"/>
        <span class="flex flex-col items-start gap-1">
        <Tag
            text="INVERTIDO"
            bg-color="bg-accent-500"
            text-class-name="text-gray-900 font-bold leading-[7px]"
            border-radius="rounded-4xl"
            text-type="label-4"
        />
        <Typography class-name="text-12 leading-12 font-bold text-gray-300 uppercase">{{ data.value }}</Typography>
        <Typography v-if="data.label" class-name="text-8 leading-10 font-bold text-primary-300 uppercase">{{
            data.label
          }}</Typography>
          </span>
      </span>
      <span v-if="data.type === 'text' || (data.label && data.type === 'text')"
            class="flex flex-col items-start text-white p-2 my-1">
        <Typography class-name="text-12 leading-12 font-normal text-gray-300">{{ data.value }}</Typography>
        <Typography v-if="data.label" class-name="text-8 leading-10 font-normal text-gray-300">{{ data.label }}</Typography>
      </span>
      <template v-if="data.type==='benefit'">
        <Typography class-name="text-white font-bold text-12 leading-15">{{data.value}}</Typography>
      </template>
      <template v-if="data.type==='percentage'">
        <Typography class-name="text-highlight4-500 font-bold text-12 leading-15">{{data.value}}</Typography>
      </template>
      <template v-if="data.type==='graph'">
        <img :src="illustrationPath(data.value)" alt="graph" width="80" height="15" />
      </template>
      <template v-if="data.type==='amount'">
        <Typography class-name="text-highlight2-500 font-bold text-12 leading-15">{{data.value}}</Typography>
      </template>
      <template v-if="data.type==='btn-outline'">
        <Button
            type="icon-text"
            :text="data.value"
            border-color="from-accent via-primary to-primary"
            font-color="text-gray-100"
            font-size="text-12"
            class-name="leading-10 font-normal"
        />
      </template>
    </td>
  </tr>
  </tbody>
</template>
<script>
import Typography from "@/components/Typography.vue";
import Tag from "@/components/Tag.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";

export default {
  components: {
    Icon,
    Button,
    Tag,
    Typography,
  },
  props: {
    tableData: Array
  },
  methods: {
    illustrationPath(name) {
      return require(`@/assets/illustrations/${name}.png`)
    }
  }
}
</script>