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
  }),
  metaInfo: {
    title: "VueFly",
    titleTemplate: "%s | Home",
    meta: [
      {
        name: "description",
        content:
          "VueFly provides a simple solution to all your business needs. Plug into our software and play it whenever. Solutions made as simple as flying a kite"
      }
    ]
  }
};
</script>
