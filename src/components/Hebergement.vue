<template>
  <div class="hebergement-wrapper" id="hebergement-wrapper">
    <div class="hebergement">
      <div class="hebergement-desc">
        <h3 id="hebergement-title">Hébergement</h3>
        <p>Nous avons réservé le manoir StoneHaven pour la fin de semaine!</p>
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

    <div class="hebergement-prix">
      <h4>
        Pour les prix, fiez-vous à notre liste (semblables aux prix sur le site
        du manoir)
      </h4>
      <ul class="liste-prix">
        <li>Classique: 330$</li>
        <li>Balcon: 360$</li>
        <li>Supérieure: 390$</li>
        <li>Suite: 430$</li>
      </ul>
    </div>

    <div class="hebergement-reservation">
      <p>
        Réservez votre chambre rapidement en contactant le manoirau
        819-774-1991. Seulement 34 chambres sont disponibles.
      </p>
      <p>
        *Nous prioriserons les personnes désirant passer la fin de semaine au
        manoir.
      </p>
    </div>
    <i class="arrow fas fa-angle-down" v-smooth-scroll href="#rsvp"></i>
  </div>
</template>

<script>
export default {
  name: "Infos",
};
</script>
