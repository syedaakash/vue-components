<template>
  <div>
    <!-- Top bar for desktop and medium screens -->
    <div v-if="isDesktopOrMediumScreen"
         class="fixed top-6 left-10 right-10 z-50 flex justify-between items-center bg-primary-900">
      <div class="flex justify-between items-center gap-10">
        <a href="/" class="logo text-[#BAB8D7]" @click="onLogoClick()">
          <img src="@/assets/logo.png" alt="Logo">
        </a>
        <Navbar :navbar-links="navbarLinks"/>
      </div>
      <div class="flex justify-between items-center gap-10">
        <div class="flex gap-2 text-[#BAB8D7] text-12 leading-22 font-bold uppercase items-center">
          <Icon icon-name="funds-gray" />
          <span>Saldo Disponible</span>
          <span class="text-24 leading-[29px] font-normal">{{ saldo }} </span>
          <span>USDC</span>
        </div>
        <div class="relative">
          <div @click.stop="toggleAccountMenu" class="cursor-pointer">
            <Icon icon-name="user-accent"/>
          </div>
          <div v-if="isAccountMenuVisible"
               ref="accountMenu"
               class="absolute right-0 mt-6 p-6 w-[290px] bg-[#131539]">
            <div class="flex flex-col items-start gap-10">
              <template v-for="link in accountMenuLinks">
                <template v-if="link.component === 'button'">
                  <a :href="link.url" :key="link.text" @click="onClickUserMenuItem()">
                    <Button
                        class-name="uppercase"
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
      </div>
    </div>


    <!-- Top bar for mobile devices -->
    <div v-else class="fixed top-4 left-6 right-6 z-40
    flex gap-2 text-[#BAB8D7] text-12 leading-22 font-bold uppercase items-center bg-primary-900">
      <Icon icon-name="funds-gray" />
      <span>Saldo Disponible</span>
      <span class="text-24 leading-[29px] font-normal">{{ saldo }} </span>
      <span>USDC</span>
    </div>

    <!-- Bottom menu for mobile devices -->
    <div v-if="!isDesktopOrMediumScreen" class="">
      <MobMenu :menu-items="navbarLinks" :account-menu-links="accountMenuLinks" :saldo="saldo"/>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Navbar from "@/components/Navbar.vue";
import Button from "@/components/Button.vue";
import MobMenu from "@/components/MobMenu.vue";

export default {
  components: {
    MobMenu,
    Button,
    Icon,
    Navbar
  },
  props: {
    navbarLinks: {
      type: Array,
      required: true,
    },
    accountMenuLinks: {
      type: Array,
      required: true,
    },
    saldo: {
      type: String,
      default: '000.000,00'
    }
  },
  data() {
    return {
      isAccountMenuVisible: false,
      isAccountOptionsVisible: false,
      isDesktopOrMediumScreen: window.innerWidth >= 768,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleAccountMenu() {
      this.isAccountMenuVisible = !this.isAccountMenuVisible;
      if (this.isAccountMenuVisible) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      if (this.$refs.accountMenu && !this.$refs.accountMenu.contains(event.target)) {
        this.isAccountMenuVisible = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleResize() {
      this.isDesktopOrMediumScreen = window.innerWidth >= 768;
    },
    onLogoClick() {
      this.removeActiveSlug()
    },
    onClickUserMenuItem() {
      this.removeActiveSlug()
    },
    removeActiveSlug() {
      this.$store.dispatch('setActiveSlug', '')
    }
  },
};
</script>
