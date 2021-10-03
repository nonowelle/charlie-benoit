<template>
  <div class="">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-if="!isLoading" class="confirmations-list">
      <h1>Confirmations</h1>
      <div class="attending">
        <h3>Invités ayant accepté l'invitation</h3>
        <div>
          <ol
            v-for="(person, index) in result"
            :key="person._id"
            class="confirmation confirmations-wrapper"
          >
            <li class="personne ">
              {{ index + 1 }} - {{ person.firstName }} {{ person.lastName }}
              {{ person.email }}
              {{ person.phone }}
            </li>
          </ol>
        </div>
      </div>
      <div class="not-attending">
        <h3>Invités ayant refusé l'invitation</h3>
        <div>
          <ol
            v-for="(person, index) in result"
            :key="person._id"
            class="confirmation confirmations-wrapper"
          >
            <li class="personne ">
              {{ index + 1 }} - {{ person.firstName }} {{ person.lastName }}
              {{ person.email }}
              {{ person.phone }}
            </li>
          </ol>
        </div>
      </div>
      <div class="back">
        <router-link to="/" class="back-link">
          <i class="fas fa-angle-left arrow-left"></i>
          Retour à la page d'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../Loader.vue";

export default {
  name: "ConfirmationsList",
  components: {
    Loader,
  },

  data() {
    return {
      result: [],
      responseAvailable: false,
      isLoading: false,
    };
  },
  methods: {
    loadConfirmations() {
      this.isLoading = true;

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
      this.isLoading = false;
    },
    delayedList() {
      window.setTimeout(this.loadConfirmations, 5000);
    },
  },

  created() {
    // this.loadConfirmations();
    this.delayedList();
  },
};
</script>
