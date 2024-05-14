<template>
  <label class="flex items-center" :class="{'pointer-events-none': disabled}">
    <input
        type="checkbox"
        class="hidden"
        :checked="checked"
        @change="handleChange"
        :disabled="disabled"
    />
    <div class="form-checkbox h-5 w-5 mr-2 cursor-pointer flex items-center">
      <Icon
          :icon-name="checked ? (disabled ? 'checkbox-disabled' :
          'checkbox') : (disabled ? 'box-disabled' : 'box')"
          size="16"
          :class="{'text-gray-400': disabled}"
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
  name: 'Checkbox',
  components: {
    Typography,
    Icon
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
    value: {},
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
    }
  },
  methods: {
    handleChange() {
      if (!this.disabled) {
        this.$emit('change', this.value);
      }
    }
  }
};
</script>
