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
          Pour les prix, fiez-vous à notre liste (semblables aux prix sur
          <a href="https://www.stonehavenlemanoir.com/fr/" target="_blank"
            >le site du manoir</a
          >)
        </p>
        <h4 id="hebergement-title">Nos prix</h4>
        <ul class="liste-prix">
          <li>Classique: 330$</li>
          <li>-</li>
          <li>Balcon: 360$</li>
          <li>-</li>
          <li>Supérieure: 390$</li>
          <li>-</li>
          <li>Suite: 430$</li>
        </ul>
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

    <i class="arrow fas fa-angle-down" v-smooth-scroll href="#infos"></i>
  </div>
</template>

<script>
// import "swiper/css";

export default {
  name: "Infos",
};
</script>
