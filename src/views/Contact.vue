<template>
  <div class="top-spacing flex center container">
    <div class="form-container">
      <h1 class="primary-text">Contact Us</h1>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
export default {
  components: {
    Form
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
