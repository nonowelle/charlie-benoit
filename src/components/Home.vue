<template>
  <div>
    <div id="home">
      <Nav />
      <Header />
      <Mariage />
      <Horaire />
      <Cadeaux />
      <Menu />
      <Hebergement />

      <Contact />

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

import Nav from "./Nav.vue";
import Mariage from "./Mariage.vue";
import Horaire from "./Horaire.vue";
import Hebergement from "./Hebergement.vue";
import Footer from "./Footer.vue";
import Contact from "./Contact.vue";
import Cadeaux from "./Cadeaux.vue";
import Menu from "./Menu.vue";
// import RSVP from "./RSVP.vue";

export default {
  name: "Home",
  components: {
    Header,
    Mariage,
    Nav,
    Hebergement,
    Contact,
    Cadeaux,
    Menu,
    Footer,
    Horaire,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
