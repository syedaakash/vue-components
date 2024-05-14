<template>
  <div :class="pillClasses">
    <div class="flex items-center">
      <div class="text-12 tracking-wider">{{ text }}</div>
      <template v-if="!displaySubtextUnder">
        <span class="mx-2 text-gray-200 h-2 border border-r border-gray-100"></span>
        <div class="text-10 text-gray-200">{{ subtext }}</div>
      </template>
    </div>
    <template v-if="displaySubtextUnder">
      <div class="text-10 text-gray-200">{{ subtext }}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
    text: {
      type: String,
      required: true,
    },
    subtext: {
      type: String,
      default: '',
    },
    displaySubtextUnder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pillClasses() {
      return [
        'inline-block',
        'px-3 py-1',
        'border border-primary-300',
        'rounded',
        'text-primary-300',
        'bg-transparent',
          this.className
      ];
    },
  },
};
</script>
