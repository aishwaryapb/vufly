<template>
  <div class="flex center container" :class="menuOpen ? 'no-space' : 'top-spacing'">
    <div class="form-container">
      <h1 class="primary-text">Contact Us</h1>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
import { mapState } from "vuex";
export default {
  components: {
    Form
  },
  computed: mapState({
    menuOpen: state => state.header.menuOpen
  }),
  metaInfo: {
    title: "VueFly",
    titleTemplate: "%s | Contact us",
    meta: [
      {
        name: "description",
        content:
          "Request a free demo or get started with a subscription of this simple plug N' play solution which attends to any hurdle you want it to"
      }
    ]
  }
};
</script>

<style lang="less" scoped>
.container {
  justify-content: center;
  height: 100%;
  background-image: url("../assets/images/Contact_Us_BG.png");
  background-repeat: round;
}
.form-container {
  width: 60vw;
  margin-top: 5vh;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 46px;
    font-weight: 400;
  }
}

@media @mobileL {
  .form-container {
    width: 90vw;
    height: max-content;
    padding-bottom: 4vh;
  }
}

@media @tablet {
  .form-container {
    margin-top: 10vh;
    width: 90vw;
    height: max-content;
    padding-bottom: 4vh;
  }
}

@media @ipadPro {
  .form-container {
    width: 90vw;
    height: max-content;
    padding-bottom: 4vh;
  }

  .container {
    background-repeat: no-repeat;
  }
}
</style>
