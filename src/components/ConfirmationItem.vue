<template>
  <div>
    <div v-for="person in result" :key="person._id" class="confirmation">
      {{ person.firstName }}
      {{ person.lastName }}
      {{ person.email }}
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
        return resultats;
        //mettre la logique ici pour extraire les donn/es a afficher comme uneliste
        //arrannger les check boxes et mettre une fonction post dans le formulaire
      })
      .then((data) => {
        console.log(data);
        for (let person of data) {
          const email = person.email;
          const firstName = person.firstName;
          const lastName = person.lastName;
          const attending = person.attending;

          const invite = {};
          invite.email = email;
          invite.firstName = firstName;
          invite.lastName = lastName;
          invite.attending = attending;

          this.result.push(invite);
        }
      })
      .catch(function(error) {
        console.log(error.message);
      });
  },
};
</script>
