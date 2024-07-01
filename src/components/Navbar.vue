<template>
  <nav class="flex gap-10 items-center">
    <div v-for="link in navbarLinks" :key="link.text" :class="link.classes">
      <a :href="link.url" @click="onItemClick(link.slug)" :class="link.slug === activeSlug ? 'text-accent' : 'text-gray-100'"
         class="flex items-center text-12 leading-[22px] font-bold font-montserrat uppercase gap-10">
        <span :class="link.textClases">{{ link.text }}</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navbarLinks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onItemClick(slug) {
      this.$store.dispatch('setActiveSlug', slug);
    }
  },
  computed: {
    activeSlug() {
      return this.$store.state.activeSlug;
    },
  },
};
</script>
