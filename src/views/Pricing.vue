<template>
  <div class="top-spacing">
    <div class="container">
      <div class="heading">
        <h1>Pricing</h1>
        <p>VuFly provides a subscription model designed for your needs. Choose the 30 day free trial and move to Premium for just 20$</p>
      </div>
      <div class="card-container">
        <PricingCard v-for="item in pricingItems" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG from "../config";
import PricingCard from "../components/PricingCard";
export default {
  name: "Pricing",
  components: {
    PricingCard
  },
  data: function() {
    return {
      pricingItems: CONFIG.pricingModels
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;

  .heading {
    height: 45vh;
    background-image: url("../assets/images/Pricing_BG.png");
    background-repeat: round;
    text-align: center;
    color: white;
    border-radius: 0 0 80% 80%/0 0 50% 50%;
    h1 {
      font-size: 46px;
      font-weight: 400;
    }

    @media @ipadPro {
      height: 20vh;
    }
  }

  .card-container {
    display: flex;
    justify-content: space-evenly;
    padding: 8vh 15vw 0 15vw;

    @media @ipadPro {
      padding: 4vh 5vw;
    }
  }

  @media @mobileL {
    .heading {
      height: 35vh;

      h1 {
        font-size: 40px;
        margin-bottom: 0;
      }

      p {
        padding: 0 2vw;
        margin-top: 2vh;
      }
    }

    .card-container {
      flex-direction: column;
      align-items: center;
      padding: 5vh 5vw;
    }
  }

  @media @tablet {
    .heading {
      height: 30vh;
    }

    .card-container {
      padding: 5vh 5vw;
    }
  }
}
</style>
