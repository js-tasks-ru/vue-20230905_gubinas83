import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const RootComponent = defineComponent({
  data() {
    return {
      selectedMeetupId: 1,
      meetup: null,
    };
  },
  template: `<div>
    <label v-for="n in 5" :key="n">
      <input type="radio" name="meetupId" :value="n" v-model="selectedMeetupId" /> {{ n }}
    </label>

  <hr />

  <h3>{{this.meetup ? this.meetup.title : "" }}</h3>
</div>`,
  watch: {
    selectedMeetupId: async function (newValue, oldValue) {
      this.meetup = await fetchMeetupById(newValue);
    },
  },
});
const app = createApp(RootComponent);
app.mount('#app');
