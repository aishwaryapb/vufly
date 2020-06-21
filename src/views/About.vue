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
  }),
  metaInfo: {
    title: "VuFly",
    titleTemplate: "%s | About Us",
    meta: [
      {
        name: "description",
        content:
          "Our Mission is to provide cater to business needs in the mostly simplest way possible. We are a group of 3 working tirelessly to solve your every day hurdles"
      }
    ]
  }
};
</script>
