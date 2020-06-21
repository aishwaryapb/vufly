<template>
  <div>
    <div id="nav-container">
      <router-link to="/" class="no-style-link">
        <img id="logo" src="../assets/images/Logo.png" alt="Logo" />
      </router-link>
      <div id="links">
        <router-link to="/about">About</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="menu-icon">
        <img :src="getIcon()" @click="toggleMenu()" alt="menu icon" />
      </div>
    </div>
    <div class="mobile-menu" :class="menuOpen ? '' : 'hide-menu'">
      <router-link to="/about">About</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  }),
  methods: {
    ...mapActions("header", ["toggleMenu"]),
    getIcon() {
      return this.menuOpen
        ? require("../assets/icons/close.svg")
        : require("../assets/icons/hamburger.svg");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav-container {
  display: flex;
  width: 100%;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  background: white;

  #logo {
    margin-left: 2vw;
    height: 60px;
    width: auto;
    cursor: pointer;
  }

  #links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: @black;
      margin: 0 2.5vw;
      font-size: 20px;
      padding-bottom: 2px;
      opacity: 0.9;
    }

    @media @mobileL {
      display: none;
    }
  }
}

.menu-icon {
  display: none;

  @media @mobileL {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    img {
      width: 25px;
      height: auto;
      margin-right: 5vw;
    }
  }
}

.hide-menu {
  display: none !important;
}

.mobile-menu {
  display: none;
  margin-top: 10vh;

  @media @mobileL {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid @grey;

    a {
      height: 5vh;
      margin: 1vh 0;
      color: @black;
      font-size: 18px;
      text-decoration: none;
    }
  }
}
</style>
