<template>
  <div id="app">
    <Header msg="Benoit et Charlie" />
    <Infos />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Infos from "./components/Infos.vue";

export default {
  name: "App",
  components: {
    Header,
    Infos,
  },
};
</script>

<style>
#app {
  font-family: "Kaisei HarunoUmi", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #f4f1e1;
}
</style>
