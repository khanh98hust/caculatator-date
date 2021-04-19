<template>
  <v-container>
    <MyDateInput name="From Date"></MyDateInput>
    <MyDateInput name="To Date"></MyDateInput>
    <v-btn 
      depressed
      color="primary"  @click="tinhngay">Calculate</v-btn>
    <br>
    <hr>
    <br>
    <div>
      result : {{result}} days
    </div>
  </v-container>
</template>

<script>
  import MyDateInput from './myDateInput'
export default {
  components: { MyDateInput },
    name: 'HelloWorld',

    data: () => ({
      result : 0
    }),
    methods: {
      tinhngay(){
        this.result = Math.floor((this.$store.state.toDate - this.$store.state.fromDate)/ 86400000)
      }
    },
  }
</script>
