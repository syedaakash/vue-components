<template>
  <div class="flex w-[381px] p-6 rounded-lg shadow-lg gap-6 items-center transition-all duration-500
              bg-gradient-to-tl from-primary via-primary to-accent bg-size-200 bg-pos-0 hover:bg-pos-63">
    <img :src="illustrationPath" width="96" height="93">
    <div>
      <Typography class-name="text-12 text-white font-bold leading-[15px] mb-2">{{title}}</Typography>
      <Typography class-name="text-12 text-white leading-[15px] mb-4">{{text}}</Typography>
      <Typography class-name="text-12 text-white font-bold leading-[15px] uppercase">{{bottomText}}</Typography>
    </div>
  </div>
</template>
<script>
import Typography from "@/components/Typography.vue";

export default {
  name: "Notice",
  components: {
    Typography
  },
  props: {
    illustration: String,
    title: String,
    text: String,
    bottomText: String
  },
  computed: {
    illustrationPath() {
      return require(`@/assets/illustrations/${this.illustration}.png`)
    }
  }
}
</script>