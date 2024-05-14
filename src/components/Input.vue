<template>
  <div>
    <div class="relative flex items-center">
      <div v-if="leftIcon" class="absolute inset-y-0 left-0 flex items-center">
        <Icon :iconName="computedLeftIcon" size="16"/>
      </div>
      <input
          :class="inputClasses"
          :style="inputStyles"
          v-model="inputValue"
          :placeholder="placeholder"
          :disabled="isDisabled"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="$emit('input', $event.target.value)"
      />
      <div v-if="rightIcon" class="absolute inset-y-0 right-0 flex items-center">
        <Icon :iconName="computedRightIcon" size="16"/>
      </div>
    </div>
    <div v-if="showAssistiveText" class="flex items-center mt-2">
      <div class="mr-1.5">
        <Icon :iconName="assistiveIcon" size="8"/>
      </div>
      <div class="text-gray-500">
        <Typography :text-type="assistiveTextType" class-name="text-gray-200">{{assistiveText}}</Typography>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Typography from "@/components/Typography.vue";

export default {
  name: 'Input',
  components: {
    Typography,
    Icon
  },
  props: {
    leftIcon: String,
    rightIcon: String,
    assistiveIcon: String,
    assistiveText: String,
    placeholder: String,
    isDisabled: {
      type: Boolean,
      default: false
    },
    showAssistiveText: {
      type: Boolean,
      default: false
    },
    fontSize: String,
    lineHeight: String,
    assistiveTextType: {
      type: String,
      default: "default"
    },
  },
  data() {
    return {
      inputValue: 'Text',
      isFocused: false
    };
  },
  computed: {
    inputClasses() {
      return [
        'appearance-none',
        'border-b',
        'border-primary-200',
        'focus:outline-none',
        'py-2',
        this.leftIcon && this.rightIcon ? 'px-6' : '',
        this.leftIcon ? 'pl-6' : '',
        this.rightIcon ? 'pr-6' : '',
        'bg-transparent',
          this.fontSize,
          this.lineHeight,
          this.isDisabled ? 'text-gray-500' :
          !this.isFocused && !this.isDisabled ? 'text-gray-400' :
              this.isFocused ? 'text-gray-100' : ''
      ];
    },
    inputStyles() {
      return {
        width: '100%'
      };
    },
    computedLeftIcon() {
      return this.isDisabled ? `${this.leftIcon}-disabled` :
          !this.isFocused && !this.isDisabled ? `${this.leftIcon}-unfocused` :
              this.isFocused ? this.leftIcon : ''
    },
    computedRightIcon() {
      return this.isDisabled ? `${this.rightIcon}-disabled` :
          !this.isFocused && !this.isDisabled ? `${this.rightIcon}-unfocused` :
              this.isFocused ? this.rightIcon : ''
    }
  },
  methods: {
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    }
  }
};
</script>
