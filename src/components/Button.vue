<template>
  <button
      :class="computedClasses"
      :style="computedStyles"
      @click="$emit('click')"
  >
    <span :class="computedBorderClasses">
      <template v-if="type === 'icon-text'">
        <template v-if="text">
          <span class="mr-3" :class="fontColor">
            <Typography :text-type="textType" :class-name="className">{{text}}</Typography>
          </span>
        </template>
        <span class="bg-gradient-to-r from-accent-500 to-primary-500 rounded-4xl">
            <Icon icon-name="chevron-right" size="16"/>
          </span>
      </template>
      <template v-else-if="type === 'text'">
        <template v-if="text">
          <Typography :text-type="textType" :class-name="fontSize && fontColor">{{text}}</Typography>
        </template>
      </template>
      <template v-else-if="type === 'icon'">
        <Icon icon-name="chevron-right" size="16"/>
      </template>
    </span>
  </button>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Typography from "@/components/Typography.vue";
export default {
  name: 'Button',
  components: {Icon, Typography},
  props: {
    type: {
      type: String,
      default: 'icon-text', // Options: 'icon-text', 'icon', 'text'
    },
    className: String,
    text: String,
    bgType: {
      type: String,
      default: 'gradient', // Options: 'color', 'gradient', 'transparent'
    },
    bg: String, // Background color or gradient class
    hoverBg: String,
    fontColor: String,
    fontSize: String,
    textType: String,
    borderColorType: {
      type: String,
      default: 'none', // Options: 'color', 'gradient', 'none'
    },
    borderColor: {
      type: String,
      default: ''
    }, // Border color or gradient class,
    borderRadius: {
      type: String,
      default: 'rounded-4xl'
    },
  },
  computed: {
    computedClasses() {
      return [
        'btn',
        this.bgClass,
        this.borderColorClass,
        '',
        this.borderRadius,
        'shadow-[0_4px_4px_rgba(0,0,0,0.08)]',
        'transition-all duration-500',
        `${this.hoverBg}`,
      ];
    },
    bgClass() {
      if (this.bgType === 'gradient') {
        return `${this.bg} ${this.borderColor} bg-gradient-to-r hover:bg-pos-100 bg-size-200 bg-pos-0`;
      } else if (this.bgType === 'color') {
        return `${this.bg}`;
      } else {
        return "bg-transparent"
      }
    },
    borderColorClass() {
      if (this.borderColorType === 'gradient') {
        return `${this.borderColor} border-2`;
      } else if (this.borderColorType === 'none') {
        return '';
      } else {
        return `border-2 ${this.borderColor}`;
      }
    },
    computedStyles() {
      const padding = this.type === 'icon-text' ? '8px 8px 8px 16px' :
          this.type === 'text' ? '4px 8px' : '8px'
      return {
        padding: this.borderColor ? '2px' : padding,
        boxShadow: this.boxShadow,
        borderRadius: this.borderRadius,
      }
    },
    computedBorderClasses() {
      const padding = this.type === 'icon-text' ? 'py-2 pl-4 pr-2' :
          this.type === 'text' ? 'py-1 px-2' : 'p-2'
      return [
          this.type !== 'icon-text' ? '' : 'inline-flex items-center',
          this.borderColor ? padding : '',
          !this.bg ? 'bg-primary-900' : '',
          this.borderRadius
          ]
    }
  },
};
</script>