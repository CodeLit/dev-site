<template>
  <nav class="pt-3 pb-1 flex items-center justify-between">
    <a
      href="#"
      class="block text-center nav-logo flex-shrink-0 text-4xl rounded-full w-24 h-24 relative"
    >
      <img src="../../../images/logo-circle.svg" class="w-full h-full" />
      <div
        class="absolute left-1/2 top-1/2 text-white"
        style="transform: translateX(-50%) translateY(-55%)"
      >
        Blog
      </div>
    </a>

    <b-button
      v-for="(v, k) in getPages"
      :key="(v, k)"
      @click.native="setPage(k)"
      :class="[
        'tab-button',
        'inline-block',
        'col-12',
        'navbar-link',
        'bg-blurred',
        'bg-white-gradient',
        'rounded-full',
        'px-6',
        'py-3',
        'lg:mx-6',
        'text-center',
        'text-white',
        { active: getCurrentPage === k },
      ]"
      style="box-shadow: 0 -1px white inset"
    >
      {{ v.title }}
    </b-button>
  </nav>
</template>
<script>
export default {
  methods: {
    setPage(page) {
      this.$store.commit('setCurrentPage', page)
    },
  },
  computed: {
    getPages() {
      return this.$store.getters.getPages
    },
    getCurrentPage() {
      return this.$store.getters.getCurrentPage
    },
  },
}
</script>
