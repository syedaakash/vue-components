<template>
  <div>
    <Typography text-type="title-1" class-name="text-primary-200">{{title}}</Typography>
    <div class="border-t border-primary-200 pt-10 mt-10">

      <div class="flex gap-10 mb-10 items-center">
        <Pill
            v-for="(pill, index) in pills"
            :key="index"
            :text="pill.text"
            :subtext="pill.subtext"
            :display-subtext-under="pill.displaySubtextUnder"
            class="align-middle"
        />
      </div>
      <div class="flex gap-10 flex-wrap">
        <Card
            v-for="(card, index) in cards"
            :key="index"
            :card-type="card.type"
            :top-text="card.topText"
            :percentage-text="card.percentageText"
            :title="card.title"
            :action-text="card.actionText"
            :illustration="card.illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "@/components/Typography.vue";
import Pill from "@/components/Pill.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Misc",
  components: {
    Card,
    Pill,
    Typography
  },
  props: {
    title: String,
    cards: Array,
    pills: Array,
  }
}
</script>