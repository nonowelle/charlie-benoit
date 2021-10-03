<template>
  <div id="home">
    <Nav />
    <Header />
    <Mariage />
    <Infos />
    <Hebergement />
    <RSVP />

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "./Header.vue";

import Nav from "./Nav.vue";
import Mariage from "./Mariage.vue";
import Infos from "./Infos.vue";
import Hebergement from "./Hebergement.vue";

import RSVP from "./RSVP.vue";

export default {
  name: "Home",
  components: {
    Header,
    Mariage,
    Nav,
    RSVP,
    Infos,
    Hebergement,
  },
};
</script>
