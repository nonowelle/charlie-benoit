<template>
  <div>
    <div v-for="person in result" :key="person._id" class="confirmation">
      {{ person.firstName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationsItem",

  data() {
    return {
      result: [],
      responseAvailable: false,
    };
  },

  created() {
    fetch("http://localhost:8080/confirmations")
      .then((response) => {
        const resultats = response.json();
        console.log(resultats);
        //mettre la logique ici pour extraire les donn/es a afficher comme uneliste
        //arrannger les check boxes et mettre une fonction post dans le formulaire
      })
      .catch(function(error) {
        console.log(error.message);
      });
  },
};
</script>
