<template>
  <div id="app">
    <Nav />
    <Header msg="-Benoit et Charlie-" />
    <Mariage />

    <RSVP />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Nav from "./components/Nav.vue";
import Mariage from "./components/Mariage.vue";

import RSVP from "./components/RSVP.vue";

export default {
  name: "App",
  components: {
    Header,
    Mariage,

    Nav,
    RSVP,
  },
};
</script>
