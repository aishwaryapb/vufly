<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="less">
@font-face {
  font-family: "Helvetica";
  src: url("./assets/fonts/Helvetica.ttf") format("truetype");
}

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Helvetica";
}

.center {
  text-align: center;
}

.justify {
  text-align: justify;
}

.primary-text {
  color: @primary;
}

.bold {
  font-weight: 800;
}

.flex {
  display: flex;
}

.w-full {
  width: 100%;
}

.top-spacing {
  margin-top: 10vh;

  @media @mobileL {
    margin-top: 8vh;
  }

  @media @tablet {
    margin-top: 4vh;
  }

  @media @ipadPro {
    margin-top: 4vh;
  }
}

.no-space {
  margin-top: 0;
}

.router-link-exact-active {
  margin-top: 2px;
  border-bottom: 3px solid @primary;
}

.primary-btn {
  border: 1px solid @primary;
  color: @primary;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(to right, @primary 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    color: white;
  }

  &:focus {
    outline: none;
  }
}

.grey-btn {
  border: 1px solid @darkGrey;
  color: @darkGrey;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(to right, @darkGrey 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    color: white;
  }

  &:focus {
    outline: none;
  }
}
</style>
