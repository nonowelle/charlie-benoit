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

      fetch("https://api-charlie.herokuapp.com/api/confirmations")
        .then(async (response) => {
          const resultats = await response.json();
          return resultats;
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            const email = data[i].email;
            const firstName = data[i].firstName;
            const lastName = data[i].lastName;
            const answer = data[i].answer;
            const phone = data[i].phone;

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
