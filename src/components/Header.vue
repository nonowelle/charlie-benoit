<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <span class="lieu"
        >Nous avons le plaisir de vous inviter à notre mariage<br />
        au Manoir Stone Haven le samedi 28 mai 2022</span
      >.
    </p>
    <img class="jpeg" src="../assets/istockphoto-1147779582-612x612.jpeg" />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
  color: #445936;
  font-size: 45px;
}

.lieu {
  font-size: 25px;
}
.jpeg {
  display: inline-block;
  height: 100%;
  width: auto;
  max-width: 600px;
  margin: 30px 30px;
  border-radius: 8px;
}
</style>
