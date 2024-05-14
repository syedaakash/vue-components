<template>
  <label class="flex items-center" :class="{'pointer-events-none': disabled}">
    <input
        type="radio"
        class="hidden"
        :name="radioGroup"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
    />
    <div
        class="form-radio h-5 w-5 text-primary-500 mr-2 cursor-pointer flex items-center"
    >
      <Icon
          :icon-name="checked ? (disabled ? 'radio-button-disabled' :
          'radio-button') : (disabled ? 'radio-disabled' : 'radio')"
          size="16"
          class="transition-colors duration-300"
      />
    </div>
    <Typography :text-type="textType" :class-name="disabled ? 'text-gray-400' : color">{{label}}</Typography>
  </label>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Typography from "@/components/Typography.vue";

export default {
  name: 'RadioButton',
  components: {
    Icon,
    Typography
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    textType: {
      type: String,
      default: 'label-1'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'text-white'
    },
    radioGroup: String,
    value: {}
  },
  methods: {
    handleChange() {
      this.$emit('change', this.value);
    }
  }
};
</script>
