<template>
  <div>
    <v-form>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            :label="name"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          max="2500-01-01"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </v-form>
  </div>
</template>

<script>
export default {
    props : ['name'],
  data() {
    return {
      items: [1, 2],
      thang: [],
      nam: [],
      menu: false,
      date : null,
      tg : null
    };
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
        if(this.name == 'From Date'){
            this.$store.state.fromDate = (new Date(this.date)).getTime();
        }
        else{
            this.$store.state.toDate = (new Date(this.date)).getTime();
        }
      },
    },
};
</script>

<style lang="css" scoped>
</style>