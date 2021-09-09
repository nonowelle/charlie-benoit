<template>
  <div>
    <h3 id="horaire">Horaire</h3>
    <ul>
      <li>
        Plus de détails à venir...
      </li>
    </ul>
    <h3 id="hebergement">Hébergement</h3>
    <img class="jpeg" src="../assets/manoir.jpeg" />
    <ul>
      <li>
        Nous avons l'entièreté du manoir du vendredi au dimanche. Venez en
        profiter avec nous! Le nombre de places étant limité, les réservations
        seront accordées aux personnes souhaitant séjourner deux nuits au
        manoir. La réservation de l'hôtel étant déjà effectuée, veuillez
        s'il-vous-plait vos fier aux prix indiqués ci-dessous. Vous bénéficiez
        d'un tarif plus avantageux que celui affiché sur le site du manoir.
      </li>
    </ul>
    <h3 id="informations">Informations utiles</h3>
    <ul>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Infos",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #445936;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 20px auto;
  max-width: 500px;
}
a {
  color: #445936;
  text-decoration: none;
}
.lieu {
  font-size: 25px;
}
</style>
