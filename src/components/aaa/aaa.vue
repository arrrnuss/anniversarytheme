<template>
  <div class="heart-transition">
    <transition name="fade">
      <div v-if="showBackground" class="background"></div>
    </transition>

    <transition name="message">
      <div v-if="showMessage1" class="message">ขอบคุณที่เข้ามาในชีวิต</div>
    </transition>

    <transition name="message">
      <div v-if="showMessage2" class="message">ดีใจที่ได้เป็นแฟนกันนะ</div>
    </transition>

    <transition name="message">
      <div v-if="showMessage3" class="message">
        ขอให้เราได้อยู่ด้วยกันไปอีกนาน ๆ เลย
      </div>
    </transition>

    <transition name="heart">
      <div v-if="showHeart" class="heart"></div>
    </transition>

    <transition name="overlay">
      <div v-if="showOverlay" class="overlay"></div>
    </transition>

    <transition name="zoom">
      <div v-if="showZoom" class="zoom"></div>
    </transition>

    <!-- New transition for falling star -->
    <transition-group name="fall">
      <div
        v-for="(star, index) in fallingStars"
        :key="index"
        :style="{ left: star.left + 'px', animationDelay: star.delay + 's' }"
        class="falling-star"
      ></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "AaaPage",
  data() {
    return {
      showBackground: true,
      showHeart: true,
      showMessage1: true,
      showMessage2: false,
      showMessage3: false,
      showOverlay: false,
      showZoom: false,
      fallingStars: [], // Array to store falling stars
    };
  },
  mounted() {
    // Toggle the elements after some time (you can adjust the timing)
    setTimeout(() => {
      this.generateFallingStars(30); // Generate 5 falling stars

      this.showBackground = false;
      this.showHeart = false;
      setTimeout(() => {
        this.showMessage1 = false;
        this.showMessage2 = true;
        setTimeout(() => {
          this.showMessage2 = false;
          this.showMessage3 = true;
          setTimeout(() => {
            this.showOverlay = true;
            setTimeout(() => {
              this.showZoom = true;
              setTimeout(() => {
                // Start falling star animation
                this.showFallingStar = true;
                setTimeout(() => {
                  // Navigate to /login page
                  this.$router.push("/login");
                }, 1000); // Adjust timing for zoom transition
              }, 3000); // Adjust timing for overlay transition
            }, 3000); // Adjust timing for showMessage2 transition
          }, 3000); // Adjust timing for showMessage1 transition
        }, 3000); // Adjust timing for initial transitions
      }, 3000); // Adjust timing for initial transitions
    }, 3000); // Adjust timing for initial transitions
  },

  methods: {
    generateFallingStars(count) {
      for (let i = 0; i < count; i++) {
        // Generate random left position and delay for each falling star
        const leftPosition = Math.random() * window.innerWidth;
        const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
        this.fallingStars.push({ left: leftPosition, delay: delay });
      }
    },
  },
};
</script>

<style>
/* Add background image and additional styling */
.heart-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  overflow: hidden; /* Hide overflow */
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./heart-image.jpg"); /* Add your background image */
  background-size: cover;
  opacity: 1;
}

.heart {
  position: absolute;
  top: calc(50% + 50px); /* Adjusted to center vertically under the messages */
  left: 47.5%; /* Adjusted to move the heart slightly to the left */
  transform: translateX(-50%);
  width: 100px; /* Adjust size of heart */
  height: 100px; /* Adjust size of heart */
  background-image: url("./heart1.png"); /* Insert your heart image path */
  background-size: cover;
  animation: heartbeat 1s ease-in-out infinite;
  opacity: 1;
  z-index: 1; /* Ensure heart is above other elements */
}

.message {
  font-size: 24px; /* Adjust font size */
  color: #ff4f81; /* Adjust color */
  font-family: "Comic Sans MS", cursive; /* Adjust font family */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Add text shadow */
  margin-bottom: 20px; /* Adjust spacing between messages */
  z-index: 999; /* Ensure the message is on top of everything */
  opacity: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
  opacity: 0;
}

.zoom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 200px; /* Adjust size of zoom */
  height: 200px; /* Adjust size of zoom */
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
  border-radius: 50%;
  opacity: 0;
}

/* New style for falling star */
.falling-star {
  position: absolute;
  top: -100px; /* Start position above the screen */
  left: calc(Math.random() * 100%); /* Randomize start position horizontally */
  width: 50px; /* Adjust size of falling star */
  height: 50px; /* Adjust size of falling star */
  background-image: url("./heart1.png"); /* Insert your falling star image path */
  background-size: cover;
  animation: fall 2s linear forwards; /* Define falling animation */
}

.fall-enter,
.fall-leave-to {
  top: -100px;
  opacity: 0;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fall {
  0% {
    top: -100px; /* Start position above the screen */
    opacity: 0; /* Start with no opacity */
  }
  100% {
    top: calc(100% + 50px); /* End position at the bottom of the screen */
    opacity: 1; /* End with full opacity */
  }
}

/* Add transitions for the falling animation */
.fall-enter-active,
.fall-leave-active {
  transition: top 2s, opacity 2s;
}

.fall-enter,
.fall-leave-to {
  top: -100px;
  opacity: 0;
}
</style>
