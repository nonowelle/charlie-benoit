<template>
  <div class="infos" id="horaire">
    <!-- <div class="col-50">
      <img class="jpeg" src="../assets/photos/cérémoniee.png" />
    </div> -->
    <h3 class="horaire">Horaire</h3>
    <div class="infos-horaire" id="infos">
      <div class="col-50">
        <h4 class="horaire-title">Vendredi 27 mai</h4>
        <ul class="list">
          <li>Arrivée dès 14h pour ceux qui dorment au manoir</li>
          <li>Souper libre</li>
          <li>Soirée au bar pour se rencontrer vers 20h</li>
        </ul>
      </div>
      <div class="col-50">
        <h4 class="horaire-title">Samedi 28 mai</h4>
        <ul class="list">
          <li>Déjeuner inclus pour ceux qui ont une chambre au manoir</li>
          <li>Cérémonie débutera à 15h30 dans les jardins du manoir</li>
          <li>Cocktails 16-18h : bouchées, alcool, photos, jeux extérieurs</li>
          <li>Souper banquet à 18h: 5 services, menu ci-bas</li>
          <li>Soirée dansante et surprises nocturnes !</li>
        </ul>
      </div>
      <div class="col-50">
        <h4 class="horaire-title">Dimanche 29 mai</h4>
        <ul class="list">
          <li>Déjeuner inclus pour ceux qui ont une chambre au manoir</li>
          <li>Départ pour 12h</li>
        </ul>
      </div>
    </div>

    <div class="col-70">
      <b>***</b> Alcool inclus: ce n’est pas à volonté, mais nous avons pensé à
      vous et investi pour un bon party ;) . Par contre, après le budget établi,
      les consommations seront payantes au bar du manoir
      <b>***</b>
    </div>

    <div class="separator"></div>
    <div class="col-70">
      <h4 class="horaire-title">Pendant le séjour, pour tout le monde</h4>
      <ul class="list">
        <li>Piscine, spa, hammam</li>
        <li>Salle de sport</li>
        <li>Centre-ville de Ste-Agathe (à 5 minutes)</li>
        <li>Randonnée à partir du manoir</li>
      </ul>
    </div>
    <i
      class="arrow fas fa-angle-down"
      v-smooth-scroll
      href="#hebergement-wrapper"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Infos",
};
</script>
