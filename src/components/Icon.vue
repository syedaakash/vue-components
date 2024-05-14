<template>
  <img @click="$emit('click')" :class="className" :src="iconPath" :alt="iconName" :width="size" :height="size"/>
</template>

<script>
  export default {
    name: "Icon",
    props: {
      size: {
        type: [Number, String],
        default: "24"
      },
      color: {
        type: String,
        default: "currentColor"
      },
      className: {
        type: String,
        default: ""
      },
      iconName: {
        type: String,
        required: true
      }
    },
    computed: {
      iconPath() {
        return require(`@/assets/icons/${this.iconName}.svg`);
      }
    }
  }
</script>