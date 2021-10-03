<template>
  <div class="confirmations-list">
    <h1>Confirmations</h1>
    <div class="attending">
      <h3>Invités ayant accepté l'invitation</h3>
      <confirmation-item></confirmation-item>
    </div>
    <div class="not-attending">
      <h3>Invités ayant refusé l'invitation</h3>
      <confirmation-item></confirmation-item>
    </div>
    <div class="back">
      <router-link to="/" class="back-link">
        <i class="fas fa-angle-left arrow-left"></i>
        Retour à la page d'accueil
      </router-link>
    </div>
  </div>
</template>

<script>
import ConfirmationItem from "../ConfirmationItem.vue";

export default {
  components: {
    ConfirmationItem,
  },
  name: "ConfirmationsList",
};
</script>
