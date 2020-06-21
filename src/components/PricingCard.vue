<template>
  <div class="container">
    <div class="header" :class="{'primary-bg': item.isPremium}">
      <h3>{{item.title}}</h3>
    </div>
    <div class="sub-header">
      <h1 :class="{'primary-text': item.isPremium}">{{item.price}}</h1>
      <p>{{item.subTitle}}</p>
      <button
        :class="item.isPremium ? 'primary-btn' : 'grey-btn'"
        @click="handleSelect(item.title.toLowerCase())"
      >Select</button>
    </div>
    <div class="features">
      <ul>
        <li v-for="feature in item.features" :key="feature.id">
          <img :src="getIcon(feature)" alt="icon" />
          <span>{{feature.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PricingCard",
  props: ["item"],
  methods: {
    ...mapActions("pricing", ["selectPlan"]),
    handleSelect(plan) {
      this.selectPlan(plan);
      this.$router.push("/contact");
    },
    getIcon(feature) {
      return require(`../assets/icons/${
        feature.included ? "checked.svg" : "cross.svg"
      }`);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 20vw;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  .header {
    background-color: @grey;
    text-align: center;
    color: @black;
  }

  .sub-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    text-align: center;
    border-bottom: 1px solid @grey;
    h1 {
      color: @darkGrey;
      margin: 0;
    }

    p {
      padding: 0.5vh 2vw;
      font-size: 12px;
      color: @black;
    }

    button {
      padding: 0.2rem;
      font-size: 16px;
      width: 100px;
    }

    @media @ipadPro {
      min-height: 15vh;
    }
  }

  .features {
    text-align: left;
    margin: 0;

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      margin: 4vh 0;
    }

    img {
      width: 15px;
      height: auto;
      margin: 0 1vw;
    }

    font-size: 14px;
    color: @black;
  }

  @media @mobileL {
    .container {
      width: 80vw;
    }

    .features {
      li {
        margin: 4vh 2vw;
      }

      img {
        margin: 0 2vw;
      }
    }
  }

  @media @tablet {
    .container {
      width: 40vw;
    }
  }

  @media @ipadPro {
    .container {
      width: 40vw;
    }
  }
}

.primary-bg {
  background-color: @primary !important;
  color: white !important;
}

.primary-text {
  color: @primary !important;
}
</style>