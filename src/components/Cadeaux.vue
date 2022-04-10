<template>
  <div class="container-cadeaux">
    <div id="cadeaux" class="mariage">
      <svg
        width="85"
        height="81"
        viewBox="0 0 85 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 1H33.5"
          stroke="#E2E8F0"
          stroke-width="3"
          stroke-linecap="round"
        />
        <circle cx="27" cy="41" r="26" stroke="#E2E8F0" stroke-width="3" />
        <circle cx="58" cy="54" r="26" stroke="#E2E8F0" stroke-width="3" />
        <path
          d="M31.4957 14.9375L38.0042 6.56251"
          stroke="#E2E8F0"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M16 5.5L20.5 1"
          stroke="#E2E8F0"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M34 1L38.75 5.75"
          stroke="#E2E8F0"
          stroke-width="3"
          stroke-linecap="round"
        />
        <line
          x1="15.8321"
          y1="5.4453"
          x2="21.8321"
          y2="14.4453"
          stroke="#E2E8F0"
          stroke-width="3"
        />
      </svg>

      <h3 id="mariage-title">Cadeaux</h3>
      <div class="details">
        <div class="col-70">
          <p>
            Vous êtes plusieurs à nous avoir demandé ce que nous aimerions comme
            cadeaux de noces. On a fait le tour et sincèrement nous avons tout
            ce qu’il nous faut et peu de place pour des biens matériels en plus!
            Mais si vous désirez nous faire un cadeau, nous vous invitons plutôt
            à contribuer à notre voyage de noce car apres 2 ans de sédentarité
            on compte se gâter à Maderre sous peu ;)
          </p>

          <div class="separator"></div>
          <ul>
            <li>
              Contribution volontaire pour le souper, pas de frais établis
            </li>
            <li>Une boite à cartes sera disponible dans la salle de banquet</li>
          </ul>
        </div>
      </div>
      <i
        class="arrow fas fa-angle-down"
        v-smooth-scroll
        href="#hebergement-wrapper"
      ></i>
    </div>
    <div class="photo-cadeaux"></div>
  </div>
</template>

<script>
export default {
  name: "Mariage",
};
</script>
