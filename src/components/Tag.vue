<template>
  <span
      :class="computedClasses"
      :style="computedStyles"
      @mouseenter="expandTag"
      @mouseleave="shrinkTag"
  >
    <Typography v-if="isExpanded" :text-type="textType" :class-name="textClassName">{{ text }}</Typography>
  </span>
</template>

<script>

import Typography from "@/components/Typography.vue";
export default {
  name: 'Tag',
  components: {Typography},
  props: {
    className: String,
    textClassName: {
      type: String,
      default: 'text-gray-700'
    },
    text: String,
    bgColor: {
      type: String,
      default: 'bg-gray-300'
    },
    borderRadius: {
      type: String,
      default: 'rounded-md'
    },
    textType: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  computed: {
    computedClasses() {
      return [
        'inline-block',
        {
          'px-1 py-0.5': this.isExpanded,
        },
        this.bgColor,
        this.borderRadius,
        {
          'w-1 h-1': !this.isExpanded,
          'cursor-pointer': !this.isExpanded,
          'transition-all duration-300': true,
        },
          this.className
      ];
    },
    computedStyles() {
      return {};
    }
  },
  methods: {
    expandTag() {
      this.isExpanded = true;
    },
    shrinkTag() {
      this.isExpanded = false;
    },
  }
};
</script>