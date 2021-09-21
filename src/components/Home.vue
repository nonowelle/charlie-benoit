<template>
  <div id="home">
    <Nav />
    <Header msg="-Benoit et Charlie-" />
    <Mariage />
    <RSVP />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Nav from "./components/Nav.vue";
import Mariage from "./components/Mariage.vue";

import RSVP from "./components/RSVP.vue";

export default {
  name: "Home",
  components: {
    Header,
    Mariage,
    Nav,
    RSVP,
  },
};
</script>
