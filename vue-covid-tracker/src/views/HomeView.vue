<template>
  <main v-if="!loading">
    <DataTitleComponent :text="title" :dataDate="dataDate" />
    <DataBoxesComponent :stats="stats" />
    <CountrySelectComponent @get-country="getCountryData" :countries="countries"/>

    <button @click="clearCountryData"
        v-if="stats.Country"
        class="bg-green-700 text-white rounder p-3 mt-10 focus:outline-none hover:bg-green-500">
      Clear Country
    </button>
  </main>

  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="" />
  </main>
</template>

<script>
import DataTitleComponent from "@/components/DataTitleComponent";
import DataBoxesComponent from "@/components/DataBoxesComponent";
import CountrySelectComponent from "@/components/CountrySelectComponent";

export default {
  name: 'HomeView',
  components: {
    DataTitleComponent,
    DataBoxesComponent,
    CountrySelectComponent,
  },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('@/assets/hourglass.gif')
    }
  },
  methods: {
    async fetchCovidData() {
      // making request to get data from api
      const res = await fetch('https://api.covid19api.com/summary')
      return res.json();
    },
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }
  },
  async created() {
    const data = this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    console.log(data)
  }
}
</script>
