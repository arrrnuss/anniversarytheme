<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="content">
        <h1 class="title">Do you want to enter our memories?</h1>
        <q-img
          :src="cuteGif"
          alt="Cute GIF"
          width="300px"
          max-width="100%"
          margin="20px auto"
        />
        <div class="buttons">
          <q-btn class="button yes" @click="this.$router.push('/aaa')"
            >Yes</q-btn
          >
          <q-btn
            class="button no"
            @mouseover="moveButton"
            @touchstart="moveButton"
            ref="noButton"
          >
            No
          </q-btn>
        </div>

        <q-dialog v-model="modal" persistent>
          <q-card>
            <q-card-section class="modal-content">
              <q-btn
                class="close"
                flat
                round
                icon="close"
                @click="closeModal('myModal')"
              />
              <q-img
                src="https://c.tenor.com/XpFCi7Fr0scAAAAC/tenor.gif"
                alt="Cute GIF"
                width="300px"
                max-width="100%"
                margin="20px auto"
              />
              <h2 class="modal-title">Let's Fix a Date</h2>
              <q-input v-model="meetingTime" type="datetime-local" outlined />
              <q-btn class="button send" @click="sendEmail">Send</q-btn>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "QqqPage",

  data() {
    return {
      modal: false,
      meetingTime: "",
      cuteGif: "https://media.tenor.com/F4beteoaDrsAAAAi/please-cute.gif",
    };
  },
  methods: {
    openModal(id) {
      this.modal = true;
    },
    closeModal(id) {
      this.modal = false;
    },
    moveButton() {
      const button = this.$refs.noButton.$el;
      button.style.position = "absolute";
      button.style.left =
        Math.random() * (window.innerWidth - button.offsetWidth) + "px";
      button.style.top =
        Math.random() * (window.innerHeight - button.offsetHeight) + "px";
    },
    sendEmail() {
      window.location.href = `mailto:your-email@example.com?subject=Date&body=Let's meet at ${this.meetingTime}`;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Indie Flower", cursive;
  overflow-y: scroll;
  background-color: pink; /* Change background color to pink */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f7f7f7; /* Optionally, you can retain a different background color for the content area */
}

.title {
  font-size: 3em;
  color: #333;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.button {
  width: 200px;
  height: 50px;
  font-size: 1.2em;
  border-radius: 25px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.button:hover {
  background-color: #ff7eb9; /* Change button hover color to pink */
}

.yes {
  background-color: #66bb6a;
  color: #fff;
}

.no {
  background-color: #e57373;
  color: #fff;
}

.modal-content {
  text-align: center;
  position: relative;
}

.modal-title {
  color: #333;
  margin-bottom: 20px;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: pink; /* Change modal close button background color to pink */
  border-radius: 50%;
  padding: 0 10px;
}

.close:hover,
.close:focus {
  color: black;
  cursor: pointer;
}
</style>
