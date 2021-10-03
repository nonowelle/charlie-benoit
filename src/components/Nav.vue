<template>
  <div>
    <header class="navigation">
      <nav class="navbar">
        <a href="#header" v-smooth-scroll class="nav-logo">B & C </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#mariage" v-smooth-scroll class="nav-link">Le mariage</a>
          </li>
          <li class="nav-item">
            <a href="#hebergement-wrapper" v-smooth-scroll class="nav-link"
              >Hébergement</a
            >
          </li>

          <li class="nav-item">
            <a href="#rsvp" v-smooth-scroll class="button small dark invert"
              >RSVP</a
            >
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
