<template>
  <div :class="[computedClasses, className]" class="font-montserrat">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Typography",
  props: {
    textType: String,
    className: {
      type: String,
      default: ""
    },
  },
  computed: {
    computedClasses() {
      return {
        // font-sizes
        'text-6':
            this.textType === 'label-4',
        'text-8':
            this.textType === 'label-3',
        'text-10':
            this.textType === 'para-4' ||
            this.textType === 'label-2' ||
            this.textType === 'action-4',
        'text-12':
            this.textType === 'para-3' ||
            this.textType === 'label-1' ||
            this.textType === 'action-3',
        'text-14':
            this.textType === 'para-2',
        'text-16':
            this.textType === 'default' ||
            this.textType === 'title-4' ||
            this.textType === 'action-2',
        'text-20':
            this.textType === 'title-3' ||
            this.textType === 'action-1',
        'text-24':
            this.textType === 'title-2' ||
            this.textType === 'para-1',
        'text-32': this.textType === 'title-1',
        // font-weight
        'font-normal':
            this.textType === 'para-3' ||
            this.textType === 'para-4' ||
            this.textType === 'label-1' ||
            this.textType === 'label-2',
        'font-medium':
            this.textType === 'para-1' ||
            this.textType === 'para-2' ||
            this.textType === 'label-3' ||
            this.textType === 'action-1',
        'font-bold':
            this.textType === 'title-1' ||
            this.textType === 'title-2' ||
            this.textType === 'title-3' ||
            this.textType === 'title-4' ||
            this.textType === 'label-4' ||
            this.textType === 'action-2' ||
            this.textType === 'action-3' ||
            this.textType === 'action-4',
        // line-height
        'leading-10':
            this.textType === 'label-4',
        'leading-14':
            this.textType === 'label-3',
        'leading-16':
            this.textType === 'para-4' ||
            this.textType === 'label-2',
        'leading-18': this.textType === 'para-3',
        'leading-20':
            this.textType === 'para-2' ||
            this.textType === 'label-1',
        'leading-24': this.textType === 'title-4',
        'leading-28': this.textType === 'title-3',
        'leading-32':
            this.textType === 'title-2' ||
            this.textType === 'para-1',
        'leading-40': this.textType === 'title-1',
      }
    }
  }
}
</script>