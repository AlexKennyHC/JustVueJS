const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter = this.counter +1;
    },
    reduce() {
      this.counter = this.counter -1;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + '' + 'Kenny';
    },
  },
});

app.mount('#events');
