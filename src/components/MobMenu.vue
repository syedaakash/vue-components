<template>
  <div>
  <div class="flex gap-6 py-6 px-4 justify-center w-full bg-primary-900 fixed bottom-0 left-0 z-50">
    <template v-for="item in menuItems">
      <a :href="item.url"
          :key="item.text" class="flex flex-col items-center gap-2 cursor-pointer"
          @click="onItemClick(item.slug)"
      >
      <Icon
          :icon-name="item.slug === activeSlug ? item.activeIcon : item.icon" size="24"/>
        <Typography
            text-type="label-3"
            :class-name="`${item.slug === activeSlug ? 'text-accent' : 'text-gray-100'} uppercase`">
          {{item.text}}
        </Typography>
      </a>
    </template>
    <div @click.stop="toggleAccountMenu" class="flex flex-col items-center gap-2 cursor-pointer">
      <Icon :icon-name="activeSlug === 'user' ? 'user-accent' : 'user'"/>
      <Typography
          text-type="label-3"
          :class-name="`${activeSlug === 'user' ? 'text-accent' : 'text-gray-100'} uppercase`">
        cuenta
      </Typography>
    </div>
  </div>

    <div v-if="isAccountMenuVisible"
         ref="accountMenu"
         class="fixed inset-0 z-40 p-6 pt-4 bg-primary-900">
      <div class="flex flex-col items-start gap-10">
        <div class="flex gap-2 text-[#BAB8D7] text-12 leading-22 font-bold uppercase items-center">
          <Icon icon-name="funds-gray" />
          <span>Saldo Disponible</span>
          <span class="text-24 leading-[29px] font-normal">{{ saldo }} </span>
          <span>USDC</span>
        </div>
        <template v-for="link in accountMenuLinks">
          <template v-if="link.component === 'button'">
            <a :href="link.url" :key="link.text" @click="onClickUserMenuItem()">
              <Button
                  type="icon-text"
                  :text="link.text"
                  border-color="from-accent via-primary to-primary"
                  text-class-name="text-gray-100 md:text-16 md:leading-20 font-bold"
              />
            </a>
          </template>
          <template v-else>
            <a :key="link.text" :href="link.url"  @click="onClickUserMenuItem()"
               class="flex gap-4 text-gray-100 text-16 leading-20">
              <Icon :icon-name="link.icon" size="24"/>
              <span>{{ link.text }}</span>
            </a>
          </template>
        </template>
        <span class="border-t border-[rgba(39,36,202,0.3)] w-full"></span>
        <a href="/help" class="flex gap-4 text-[#59588D] text-16 leading-20" @click="onClickUserMenuItem()">
          <Icon icon-name="help-menu" size="24"/>
          <span>
                  <span class="font-bold">¿Tienes dudas?</span>
                  <br> Cuéntanos, te ayudamos.
                  </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Typography from "@/components/Typography.vue";
import Button from "@/components/Button.vue";

export default {
  name: "MobMenu",
  components: {Button, Typography, Icon},
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    accountMenuLinks: {
      type: Array,
      required: true
    },
    saldo: {
      type: String,
      default: '000.000,00'
    }
  },
  data() {
    return {
      isAccountMenuVisible: false,
    }
  },
  methods: {
    onItemClick(slug) {
      this.$store.dispatch('setActiveSlug', slug);
    },
    toggleAccountMenu() {
      this.isAccountMenuVisible = !this.isAccountMenuVisible;
      this.onItemClick('user')
    },
    onClickUserMenuItem() {
      this.removeActiveSlug()
    },
    removeActiveSlug() {
      this.$store.dispatch('setActiveSlug', '')
    }
  },
  computed: {
    activeSlug() {
      return this.$store.state.activeSlug;
    },
  },
}
</script>