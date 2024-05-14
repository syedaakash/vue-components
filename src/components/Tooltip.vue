<template>
  <div class="relative inline-block">
    <span
        class="text-base font-medium cursor-pointer"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
    >
      <Typography :text-type="textType" :class-name="`${fontColor} ${bgColor} py-1 px-2 rounded-sm`">{{ text }}</Typography>
    </span>
    <div
        v-if="showTooltip"
        class="absolute z-10 p-2 text-sm font-normal text-white rounded shadow-md bg-gray-500"
        :class="fontColor"
    >
      <Typography :text-type="textType">{{ text }}</Typography>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/Typography.vue";

export default {
  components: {Typography},
  props: {
    text: {
      type: String,
      required: true
    },
    tooltipText: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: 'text-gray-500'
    },
    textType: {
      type: String,
      default: 'label-2'
    }
  },
  data() {
    return {
      showTooltip: false
    };
  }
};
</script>