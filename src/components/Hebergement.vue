<template>
  <div class="hebergement-wrapper" id="hebergement-wrapper">
    <div class="hebergement">
      <div class="hebergement-desc">
        <h3 id="hebergement-title">Hébergement</h3>
        <p>
          Nous avons réservé le manoir StoneHaven pour la fin de semaine!
        </p>
        <p>
          Pour profiter au maximum de celui-ci et vous convaincre de passer
          votre fin de semaine de congé avec nous,
          <span>nous offrons la deuxième nuit.</span>
        </p>
      </div>

      <div class="hebergement-photo">
        <img class="jpeg" src="../assets/manoir.jpeg" />
      </div>
    </div>

    <div class="hebergement-2 " id="hebergement-2">
      <div class="hebergement-photo">
        <img class="jpeg" src="../assets/photos/chambre-stonehaven.jpeg" />
      </div>
      <div class="hebergement-prix-par">
        <h3>Réservations</h3>
        <p>
          Toutes les chambres du manoir sont malheureusement déjà réservées.
          Nous vous aviserons en cas d'annulation. <i class="fas fa-heart"></i>
        </p>
      </div>
    </div>

    <div class="infos-hebergement">
      <div class="infos-par">
        <h3 id="informations" class="hebergement-autres">Autres options</h3>
        <p class="hebergement-autres">
          S'il n'y a plus de place au manoir ou que celui-ci ne vous convient
          pas, voici une liste non-exhaustive des hébergements à proximité :
        </p>
      </div>
      <div class="infos-par">
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
      </div>
    </div>
    <i class="arrow fas fa-angle-down" v-smooth-scroll href="#contact"></i>
  </div>
</template>

<script>
// import "swiper/css";

export default {
  name: "Infos",
};
</script>
