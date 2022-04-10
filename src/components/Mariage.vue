<template>
  <div id="mariage" class="mariage">
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

    <h3 id="mariage-title">Le mariage</h3>
    <div class="details">
      <div class="details-quand">
        <h4>Quand?</h4>
        <p>samedi le 28 mai 2022</p>
        <div class="separator horizontal"></div>
        <p>Plus de détails à venir</p>
      </div>
      <div class="separator"></div>
      <div class="details-ou">
        <h4>Où?</h4>
        <p>
          Manoir Stonehaven <br />
          40 Chem. du Lac des Sables,<br />
          Sainte-Agathe-des-Monts, QC J8C 2Z7
        </p>
      </div>
    </div>
    <a
      class="button large invert"
      href="https://g.page/StoneHavenLeManoir?share"
      target="_blank"
      >Voir la carte</a
    >
    <i class="arrow fas fa-angle-down" v-smooth-scroll href="#horaire"></i>
  </div>
</template>

<script>
export default {
  name: "Mariage",
};
</script>
