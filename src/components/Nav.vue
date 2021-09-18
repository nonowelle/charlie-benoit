<template>
  <div>
    <header class="navigation">
      <nav class="navbar">
        <a href="#" class="nav-logo"></a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#mariage" class="nav-link">Le mariage</a>
          </li>
          <li class="nav-item">
            <a href="#hebergement" class="nav-link">Hébergement</a>
          </li>
          <li class="nav-item">
            <a href="#informations" class="nav-link">Infos utiles</a>
          </li>
          <li class="nav-item">
            <a href="#rsvp" class="button small dark invert">RSVP</a>
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
