<template>
  <div id="app">
    <Nav />
    <Header msg="Benoit et Charlie" />
    <Infos />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Infos from "./components/Infos.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Infos,
    Nav,
  },
};
</script>

<style>
#app {
  font-family: "Kaisei HarunoUmi", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #f4f1e1;
}
</style>
