<template>
  <div class="header" id="header">
    <div class="wrapper">
      <h1 class="title">-Benoît et Charlie-</h1>
      <p class="lieu">
        ont le plaisir de vous inviter à leur mariage!
      </p>
      <br />
      <p class="date">28/05/2022 | Manoir Stonehaven</p>

      <!-- <a class="button large" v-smooth-scroll href="#rsvp">RSVP</a>
      <p class="lieu">Confirmez votre présence <b>le plus vite possible</b></p> -->
      <i class="arrow fas fa-angle-down" v-smooth-scroll href="#mariage"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>
