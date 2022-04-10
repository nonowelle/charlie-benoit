<template>
  <div class="container-cadeaux">
    <div id="cadeaux" class="mariage">
      <svg
        width="64"
        height="65"
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5.92307"
          y="26.1614"
          width="52.1538"
          height="37.8386"
          stroke="#FAF8EF"
          stroke-width="2"
        />
        <rect
          x="1"
          y="19"
          width="62"
          height="6"
          stroke="#FAF8EF"
          stroke-width="2"
        />
        <line
          x1="30.5385"
          y1="14.6775"
          x2="30.5385"
          y2="65"
          stroke="#FAF8EF"
          stroke-width="2"
        />
        <line
          x1="4.92307"
          y1="45.129"
          x2="59.0769"
          y2="45.129"
          stroke="#FAF8EF"
          stroke-width="2"
        />
        <path
          d="M41.8569 13.5017C39.6738 15.1997 37.3119 16.3104 35.298 16.7626C33.2243 17.2282 31.8372 16.9446 31.1603 16.313C30.4833 15.6815 30.2776 14.4791 31.01 12.7622C31.7213 11.0948 33.2341 9.19202 35.4173 7.49405C37.6004 5.79609 39.9623 4.68535 41.9762 4.23317C44.0499 3.76757 45.4369 4.05118 46.1139 4.68272C46.7908 5.31426 46.9966 6.51664 46.2642 8.2335C45.5529 9.9009 44.04 11.8037 41.8569 13.5017Z"
          stroke="#FAF8EF"
          stroke-width="2"
        />
        <path
          d="M31.185 7.69992C32.3357 9.56967 32.8126 11.4653 32.7008 12.996C32.5884 14.5351 31.903 15.5898 30.8721 16.0502C29.8411 16.5106 28.4328 16.3907 26.8829 15.594C25.3414 14.8016 23.7824 13.3891 22.6317 11.5194C21.481 9.64962 21.0041 7.75396 21.1159 6.22324C21.2283 4.68422 21.9137 3.62945 22.9447 3.16907C23.9756 2.7087 25.3839 2.82855 26.9338 3.62528C28.4753 4.41771 30.0343 5.83018 31.185 7.69992Z"
          stroke="#FAF8EF"
          stroke-width="2"
        />
      </svg>

      <h3 id="mariage-title">Cadeaux</h3>
      <div class="details">
        <div class="col-70">
          <p>
            Vous êtes plusieurs à nous avoir demandé ce que nous aimerions comme
            cadeaux de noces. On a fait le tour et, sincèrement, nous avons tout
            ce qu’il nous faut et peu de place pour des biens matériels en plus!
            Mais si vous désirez nous faire un cadeau, nous vous invitons plutôt
            à contribuer à notre voyage de noce, car après 2 ans de sédentarité,
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
        href="#menu-wrapper"
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
