<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-gradient">
      <q-toolbar>
        <!-- <q-btn flat round dense icon="menu" class="menu-btn" /> -->
        <q-toolbar-title class="text-white">Our Love Story</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-xl">
        <div class="section-title">Memories</div>
        <div class="memory-container q-pa-xl">
          <q-slider
            :min="0"
            :max="images.length - 1"
            v-model="currentIndex"
            class="memory-slider"
          />
          <template v-if="isImage(currentIndex)">
            <q-img
              :ratio="1"
              :src="images[currentIndex]"
              class="memory-media q-pa-lg"
            />
          </template>
          <template v-else>
            <q-video
              :ratio="16 / 9"
              :src="images[currentIndex]"
              autoplay
              controls
              class="memory-media q-pa-lg"
            />
          </template>
        </div>

        <q-list separator class="special-moments-list">
          <q-item v-for="(moment, index) in specialMoments" :key="index">
            <q-item-section>
              <q-item-label>{{ moment }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn label="Next" class="message-btn" to="/lll" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import image1 from "./image1.jpg";
import image2 from "./image3.jpg";
import image3 from "./image4.jpg";
import image4 from "./image5.jpg";

// const video1 = 'https://drive.google.com/file/d/1ppdY19kCpLFRnJFUCdbyO-9aIfeYksxg/view?usp=sharing';
import video1 from "./video1.mp4"; // Adjust the path as necessary
import video2 from "./video2.mp4"; // Adjust the path as necessary
import video3 from "./video3.mp4"; // Adjust the path as necessary
import video4 from "./video4.mp4"; // Adjust the path as necessary
import video5 from "./video5.mp4"; // Adjust the path as necessary
import video7 from "./video7.mp4"; // Adjust the path as necessary
import video8 from "./video8.mp4"; // Adjust the path as necessary
import video9 from "./video9.mp4"; // Adjust the path as necessary

export default {
  name: "PppPage",
  data() {
    return {
      currentIndex: 0,
      images: [
        image1,
        image2,
        image3,
        image4,
        video1,
        video2,
        video3,
        video4,
        video5,
        video7,
        video9,
        video8,
      ],
      showMessageForm: false,
      message: "",
    };
  },
  methods: {
    sendMessage() {
      // Implement sending message functionality here
      console.log("Message sent:", this.message);
      this.showMessageForm = false;
      this.message = "";
    },
    isImage(index) {
      return /\.(jpg|png|gif|jpeg)$/i.test(this.images[index]);
    },
  },
};
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #ffcccc, #ff99cc);
}

.menu-btn {
  color: #ff4081; /* Pink */
}

.section-title {
  font-family: "Arial", sans-serif;
  font-size: 1.4rem;
  color: #ff69b4; /* Hot pink */
  margin-bottom: 15px;
}

.memory-container {
  margin-bottom: 30px;
}

.memory-slider {
  background-color: #f1f8e9; /* Light green */
}
.memory-media {
  display: block;
  margin: auto;
  border: 2px solid #ff69b4; /* Hot pink */
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 700px; /* Adjusted maximum width */
}

.memory-media q-video {
  max-width: 400px; /* Adjusted maximum width for q-video */
}

.message-btn {
  background-color: #ff69b4; /* Hot pink */
  color: #fff; /* White */
  margin-top: 20px;
}

.message-card {
  width: 320px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.special-moments-list {
  margin-top: 20px;
}

.special-moments-list .q-item {
  padding: 10px 0;
}

.special-moments-list .q-item .q-item-section {
  font-size: 1rem; /* Adjusted font size */
}
</style>
