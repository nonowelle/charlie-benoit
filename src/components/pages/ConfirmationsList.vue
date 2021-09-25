<template>
  <div class="">
    <div class="">
      NOT ATTENDING
      <confirmation-item></confirmation-item>
    </div>
    <div class="">
      ATTENDING
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
