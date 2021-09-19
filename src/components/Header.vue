<template>
  <div class="header">
    <div class="wrapper">
      <h1 class="title">{{ msg }}</h1>
      <p class="lieu">
        ont le plaisir de vous inviter à leur mariage!
      </p>
      <br />
      <p class="date">28/05/2022 | Manoir Stonehaven</p>

      <a class="button large" @click="goto('rsvp')" href="#rsvp">RSVP</a>
      <i class="arrow fas fa-angle-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
};
</script>
