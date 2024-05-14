<template>
  <div class="fixed inset-0 overflow-y-auto z-50" @click="closeModal">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-primary-800 rounded-lg md:w-[674px] w-[382px] p-10">
        <!-- Header -->
        <div class="flex justify-between border-b border-primary-700 pb-[26px]">
          <Typography class-name="text-white text-16 leading-20 font-bold">{{ title }}</Typography>
          <Icon icon-name="close" size="24" class-name="cursor-pointer" @click="closeModal"/>
        </div>

        <!-- Body -->
        <div class="mt-8">
          <!-- Illustration -->
          <div v-if="illustration" class="text-center mb-4">
            <img :src="illustrationPath" alt="Illustration" class="mx-auto" width="296" height="296" />
          </div>
          <!-- Text -->
          <div class="text-center mb-6">
            <Typography text-type="para-2" class-name="text-gray-400">{{ text }}</Typography>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <Button
              text="ACTION"
              class-name="text-12 leading-14 font-bold"
              font-color="text-white"
              bgType="gradient"
              bg="from-accent via-primary to-primary"
              @click="handleAction">{{ actionText }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/Typography.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "Modal",
  components: {
    Typography,
    Button,
    Icon,
  },
  props: {
    title: String,
    illustration: String,
    text: String,
    actionText: String,
  },
  computed: {
    illustrationPath() {
      return require(`@/assets/illustrations/${this.illustration}.png`)
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleAction() {
      this.$emit("action");
    },
  },
};
</script>
