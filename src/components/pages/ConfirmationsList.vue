<template>
  <div class="">
    <div v-if="!isLoading" class="confirmations-list">
      <h1>Confirmations</h1>
      <div class="attending">
        <h3>Invités ayant accepté l'invitation</h3>
        <div>
          <ol
            v-for="(person, index) in attendingInvites"
            :key="person._id"
            class="confirmation confirmations-wrapper"
          >
            <li class="personne" v-if="person.answer === 'Yes'">
              <p>
                {{ index + 1 }} - {{ person.firstName }} {{ person.lastName }}
              </p>
              <p>{{ person.email }}</p>
              <p>{{ person.phone }}</p>
            </li>
          </ol>
        </div>
      </div>
      <div class="not-attending">
        <h3>Invités ayant refusé l'invitation</h3>
        <div>
          <ol
            v-for="(person, index) in notAttending"
            :key="person._id"
            class="confirmation confirmations-wrapper"
          >
            <li class="personne" v-if="person.answer === 'No'">
              <p>
                {{ index + 1 }} - {{ person.firstName }} {{ person.lastName }}
              </p>
              <p>{{ person.email }}</p>
              <p>{{ person.phone }}</p>
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
export default {
  name: "ConfirmationsList",

  data() {
    return {
      attendingInvites: [],
      notAttending: [],
      result: [],
      responseAvailable: false,
      isLoading: false,
    };
  },
  methods: {
    filterConfirmationsByChoice() {
      const invitesAttending = this.result.filter((person) => {
        return person.answer == "Yes";
      });
      this.attendingInvites = invitesAttending;
      this.notAttending = this.result.filter((person) => {
        return person.answer == "No";
      });
    },
    loadConfirmations() {
      this.isLoading = true;

      fetch("/confirmations")
        .then((response) => {
          const resultats = response.json();
          console.log(response);
          return resultats;
        })
        .then((data) => {
          for (let person of data) {
            const email = person.email;
            const firstName = person.firstName;
            const lastName = person.lastName;
            const answer = person.answer;
            const phone = person.phone;

            const invite = {};
            invite.email = email;
            invite.firstName = firstName;
            invite.lastName = lastName;
            invite.answer = answer;
            invite.phone = phone;

            this.result.push(invite);
          }
          this.filterConfirmationsByChoice();
        })
        .catch(function(error) {
          console.log(error.message);
        });
      this.isLoading = false;
    },
  },

  created() {
    this.loadConfirmations();
  },
};
</script>
