<template>
  <div id="menu-wrapper">
    <div class="container-menu">
      <div class="photo-menu"></div>
      <div id="menu" class="menu">
        <h3 id="mariage-title">Menu</h3>
        <div class="details">
          <div class="col-70">
            <p>
              Vous avez reçu par courriel les choix de menu, n’oubliez pas de
              nous répondre vos choix (pour le 4e service) et d'inscrire vos
              allergies!
            </p>

            <i
              class="arrow fas fa-angle-down"
              v-smooth-scroll
              href="#menu-list"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <ul class="menu-list" id="menu-list">
      <li>
        <span><b>1er service</b></span
        ><br />
        Betteraves Bio, variation de goûts et de textures, chèvre frais, pacanes
        caramélisées et marmelade d’oranges amères
      </li>
      <li>
        <span><b>2e service</b></span> <br />Entrée de Tartare de saumon garnie
        d’une salade de concombre et fruits de la passion, gel de Vodka, crème
        fumée et petites fleurs
      </li>
      <li>
        <span><b>3e service</b></span
        ><br />
        Salade de quinoa avec pastèque, asperges et vinaigrette au gingembre et
        miel
      </li>
      <li>
        <span><b>4e service</b></span> <br />Le plat principal au choix :
      </li>
      <li class="choice">
        Filet de boeuf poêlé avec sauce whisky et poivre
      </li>
      <li class="choice"><b>OU</b></li>
      <li class="choice">
        Morue noire sur riz interdit avec marinière de coquillages sauce au
        champagne
      </li>
      <li>
        <span><b>5e service</b></span> <br />
        Le dessert<br />
        Velours vanille avec marmelade de fruits des bois et texture crumble
      </li>
      <div class="separator"></div>

      <li>
        <span><b>Vins</b></span> <br />
        Sauvigon (vin blanc)<br />
        Mesa (vin rouge)
      </li>
      <i
        class="arrow fas fa-angle-down"
        v-smooth-scroll
        href="#hebergement-wrapper"
      ></i>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Mariage",
};
</script>
