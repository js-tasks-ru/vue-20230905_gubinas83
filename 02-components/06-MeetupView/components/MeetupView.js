import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->

            <h3>Программа</h3>
            <!-- meetup agenda -->
            <UiAlert>Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
          </div>
        </div>
      </UiContainer>
    </div>`,
});
