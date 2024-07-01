<template>
  <div>
    <Head :title="title" />
    <div class="h-screen bg-primary-900">
      <div class="flex-1 flex flex-col overflow-hidden">
        <HeaderV2
            :navbar-links="navbarLinks"
            :account-menu-links="accountMenuLinks"
        />
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-primary-900">
          <div class="container mx-auto px-6 py-8">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderV2 from "@/components/HeaderV2.vue";

export default {
  name: "Layout",
  components: {
    HeaderV2,
  },
  props: ['title'],
  data() {
    return {
      //   Header
      navbarLinks: [
        {
          text: "Inicio",
          slug: "inicio",
          url: "/inicio",
          icon: 'home',
          activeIcon: 'home-highlight',
        },
        {
          text: "Comprar Crypto",
          slug: "comprar-crypto",
          url: "/comprar-crypto",
          icon: 'coins',
          activeIcon: 'coins-highlight',
        },
        {
          text: "Añadir Dinero",
          slug: "anadir-dinero",
          url: "/anadir-dinero",
          icon: 'more',
          activeIcon: 'more-highlight',
        },
      ],
      accountMenuLinks: [
        {
          text: "Retirar Dinero",
          url: "/retirar-dinero",
          component: "button",
          buttonIcon: "less"
        },
        {
          text: "Perfil",
          url: "/perfil",
          icon: "smart-gray"
        },
        {
          text: "Logout",
          url: "/logout",
          icon: "logout-gray"
        },
      ],
    }
  }
}
</script>