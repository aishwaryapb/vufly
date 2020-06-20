<template>
  <div>
    <form name="contact" class="form" action="https://formspree.io/xgenzlnd" method="POST">
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <select id="subscription" name="subscription">
        <option value="Free">Free</option>
        <option value="Premium" selected>Premium</option>
      </select>
      <textarea name="message" placeholder="Message"></textarea>
      <input type="submit" class="primary-btn" />
    </form>
  </div>
</template>

<style lang="less" scoped>
.form {
  display: flex;
  flex-direction: column;

  input,
  select,
  textarea {
    font-family: inherit;
    margin: 2vh 8vw;
    min-height: 5vh;
    border: 1px solid @grey;
    padding: 10px;

    &:focus {
      outline: 1px solid @primary !important;
    }
  }

  input[type="submit"] {
    color: @primary;
    outline: none;
    border: 1px solid @primary;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
}
</style>