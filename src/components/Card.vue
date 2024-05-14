<template>
  <div :class="cardClasses">
    <Typography class-name="text-highlight1-500 text-center text-12 font-bold leading-20 font-bold">
      {{ topText }}
    </Typography>
    <Typography class-name="text-highlight1-500 text-center" text-type="title-2">
      {{ percentageText }}
    </Typography>
    <Typography class-name="text-white text-center mt-2" text-type="title-1">{{ title }}</Typography>
    <div v-if="cardType === 1" class="text-center mb-2 mt-6">
    <Button
        type="icon-text"
        :text="actionText"
        bgType="gradient"
        bg="from-accent via-primary to-primary"
        font-color="text-white"
        text-type="action-3"
    />
    </div>

    <img :src="illustrationPath" alt="Illustration" class="mx-auto" width="232" height="232"/>
    <div v-if="cardType === 2" class="text-center mt-2">
      <Button
          type="icon-text"
          :text="actionText"
          bgType="gradient"
          bg="from-accent via-primary to-primary"
          font-color="text-white"
          text-type="action-3"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Typography from "@/components/Typography.vue";

export default {
  components: {
    Typography,
    Button,
  },
  props: {
    title: String,
    topText: String,
    percentageText: String,
    illustration: String,
    actionText: String,
    width: {
      type: String,
      default: 'w-[232px]'
    },
    cardType: {
      type: Number,
      default: 1
    }
  },
  computed: {
    cardClasses() {
      return [
        "p-6 rounded-lg shadow-lg transition-all duration-500",
        "bg-gradient-to-br from-primary via-primary to-accent bg-size-200 bg-pos-63 hover:bg-pos-0",
        this.width
      ];
    },
    illustrationPath() {
      return require(`@/assets/illustrations/${this.illustration}.png`)
    }
  },
};
</script>
