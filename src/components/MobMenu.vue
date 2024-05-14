<template>
  <div class="flex gap-6 h-[90px] w-full bg-primary-900">
    <template v-for="(item, index) in menuItems">
      <div
          :key="index" class="flex flex-col items-center gap-2 cursor-pointer"
          @click="onItemClick(index)"
      >
      <Icon
          :icon-name="index === activeIndex ? item.activeIcon : item.icon" size="24"/>
        <Typography
            text-type="label-3"
            :class-name="`${index === activeIndex ? 'text-accent' : 'text-white'} uppercase`">
          {{item.name}}
        </Typography>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Typography from "@/components/Typography.vue";

export default {
  name: "MobMenu",
  components: {Typography, Icon},
  data() {
    return {
      menuItems: [
        {
          icon: 'home',
          activeIcon: 'home-highlight',
          name: 'inicio',
        },
        {
          icon: 'coins',
          activeIcon: 'coins-highlight',
          name: 'comprar crypto',
        },
        {
          icon: 'more',
          activeIcon: 'more-highlight',
          name: 'añadir dinero',
        },
        {
          icon: 'user',
          activeIcon: 'user-highlight',
          name: 'cuenta',
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    onItemClick(index) {
      this.activeIndex = index
      this.$emit('click', index)
    }
  }
}
</script>