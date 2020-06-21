<template>
  <div id="hero-container">
    <div id="hero-text">
      <h1>
        Solutions made
        <span class="primary-text">simple</span> as flying a kite
      </h1>
      <h2>
        Join us today like
        <span class="bold primary-text">40</span> other
        businesses
      </h2>
      <p class="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus mollis mauris.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
      </p>
      <button class="primary-btn" @click="handleSubscribe">Subscribe</button>
    </div>
    <div id="hero-img">
      <img src="../assets/images/Hero.svg" alt="hero" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubscribe() {
      this.$router.push("/pricing");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#hero-container {
  display: flex;
  width: 100%;
  height: 100%;

  @media @mobileL {
    flex-direction: column-reverse;
  }

  #hero-text {
    width: 45%;
    padding: 8vh 8vw;
    color: @black;

    h1 {
      font-size: 46px;
      font-weight: 400;
    }

    h2 {
      opacity: 0.8;
      font-weight: 400;
    }

    button {
      padding: 0.5rem;
      margin-top: 5vh;
      font-size: 24px;
      width: 200px;
    }

    p {
      opacity: 0.7;
    }

    &:focus {
      outline: none;
    }

    @media @mobileL {
      width: auto;
      padding: 4vh 4vw;

      h1 {
        font-size: 40px;
      }
    }
  }

  #hero-img {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 45vw;
      height: auto;
    }

    @media @mobileL {
      margin-top: 5vh;
      width: auto;
      flex-direction: row;
      img {
        width: 75vw;
      }
    }
  }
}
</style>
