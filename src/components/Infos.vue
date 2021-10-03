<template>
  <div class="infos" id="infos">
    <h3 id="informations">Autres options d'hébergement</h3>

    <div class="infos-hebergement">
      <p class="infos-par">
        S'il n'y a plus de place au manoir ou que celui-ci ne vous convient pas,
        voici une liste non-exhaustive des hébergements à proximité :
      </p>

      <ul class="liste-hotels">
        <li>
          <a href="https://www.hotelspawatel.com/" target="_blank"
            >Hotel Spa Watel : ~ 200$/nuit</a
          >
        </li>

        <li>
          <a href="https://www.super8steagathe.com/" target="_blank"
            >Super 8 : ~ 100$/nuit</a
          >
        </li>

        <li>
          <a href="https://www.aubergechezgirard.com/" target="_blank"
            >Auberge Chez Girard : ~ 130$/nuit</a
          >
        </li>

        <li>
          <a href="https://www.reve.ca/" target="_blank"
            >Auberge aux nuits de rêves : ~ 250$/nuit</a
          >
        </li>

        <li>
          <a href="https://latourdulac.ca/" target="_blank"
            >Auberge de la tour du lac : ~ 300$/nuit</a
          >
        </li>
      </ul>
      <i class="arrow fas fa-angle-down" v-smooth-scroll href="#rsvp"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Infos",
};
</script>
