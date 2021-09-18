<template>
  <div id="app">
    <Nav />
    <Header msg="-Benoit et Charlie-" />
    <Mariage />
    <Hebergement />
    <Infos />
    <RSVP />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hebergement from "./components/Hebergement.vue";
import Nav from "./components/Nav.vue";
import Mariage from "./components/Mariage.vue";
import Infos from "./components/Infos.vue";
import RSVP from "./components/RSVP.vue";

export default {
  name: "App",
  components: {
    Header,
    Mariage,
    Hebergement,
    Nav,
    Infos,
    RSVP,
  },
};
</script>
