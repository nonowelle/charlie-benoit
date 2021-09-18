<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <p class="lieu">
      ont le plaisir de vous inviter à leur mariage!
    </p>
    <br />
    <p>28/05/2022 | Manoir Stonehaven</p>
    <img class="jpeg" src="../assets/istockphoto-1147779582-612x612.jpeg" />
    <a class="button large" href="">RSVP</a>
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
