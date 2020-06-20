<template>
  <div id="container">
    <img id="logo" src="../assets/images/Logo.png" alt="Logo" @click="goHome" />
    <div id="links">
      <router-link to="/about">About</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#container {
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
  }
}
</style>
