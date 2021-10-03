<template>
  <div>
    <div id="home">
      <Nav />
      <Header />
      <Mariage />
      <Infos />
      <Hebergement />
      <RSVP />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

import Nav from "./Nav.vue";
import Mariage from "./Mariage.vue";
import Infos from "./Infos.vue";
import Hebergement from "./Hebergement.vue";
import Footer from "./Footer.vue";

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
    Footer,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
