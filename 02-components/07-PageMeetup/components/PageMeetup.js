import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      errorMessage: '',
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.getMeetup();
      },
    },
  },

  methods: {
    getMeetup: async function () {
      this.meetup = null;
      this.errorMessage = '';
      try {
        const data = await fetchMeetupById(this.meetupId);
        this.meetup = data;
        this.errorMessage = '';
      } catch (err) {
        this.errorMessage = err.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup"/>

      <UiContainer v-else-if="!meetup && !errorMessage">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else>
        <UiAlert>{{ errorMessage }}</UiAlert>
      </UiContainer>
    </div>`,
});
