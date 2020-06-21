<template>
  <div :class="menuOpen ? 'no-space' : 'top-spacing'">
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import { mapState } from "vuex";
export default {
  components: {
    Hero
  },
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  })
};
</script>
