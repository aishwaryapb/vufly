<template>
  <div :class="menuOpen ? 'no-space' : 'top-spacing'">
    <AboutCard />
  </div>
</template>

<script>
import AboutCard from "../components/AboutCard";
import { mapState } from "vuex";
export default {
  components: {
    AboutCard
  },
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  })
};
</script>
