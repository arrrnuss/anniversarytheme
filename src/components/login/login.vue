<template>
    <div>
        <div v-if="showAnniversary">
      <img src="./heart_background.jpg" alt="Heart Background" class="heart-background">
      <div class="anniversary-message" style="font-family: 'Comic Sans MS', cursive;">
        <h1>Happy 3month Anniversary</h1>
        <!-- <p>Thank you for being my rock, my strength, and my greatest joy. Here's to many more beautiful years together.</p> -->
        <q-btn @click="proceedToLogin" color="pink">Enter to Our Memories</q-btn>
      </div>
    </div>
      <!-- Place your images here -->
      <transition name="sticker-fade">
  <div v-if="showImage" class="image-container">
    <img v-if="currentImage === 1" src="./1.png" alt="Image 1" @load="showNextImage()" class="responsive-image">
    <img v-if="currentImage === 2" src="./2.png" alt="Image 2" @load="showNextImage()" class="responsive-image">
    <img v-if="currentImage === 3" src="./3.png" alt="Image 2" @load="showNextImage()" class="responsive-image">

  </div>
</transition>
  
      <!-- QLayout starts here -->
      <div v-if="!showImage && !showAnniversary">  
        <img src="./heart_background.jpg" alt="Heart Background" class="heart-background">
      
    <q-layout view="lHh Lpr lFf">
 

        <q-page-container>
            <q-page class="login-page" style="font-family: 'Comic Sans MS', cursive;">
                <q-card class="login-card">
                    <q-card-section>
                        <div class="text-h5">🎉 Welcome to Memmory! 🎉</div>
                    </q-card-section>

                    <q-card-section>
                        <div class="pin-input">
                            <q-input v-model="pin" type="password" placeholder="Anniversary date" readonly dense outlined />
                        </div>
                    </q-card-section>

                    <q-card-section class="keypad">
    <q-btn v-for="num in keypad" :key="num" @click="updatePin(num)" color="blue-8" dense flat>
        <!-- Emoji icons instead of plain numbers -->
        <template v-if="num === 1">1️</template>
        <template v-else-if="num === 2">2️</template>
        <template v-else-if="num === 3">3️</template>
        <template v-else-if="num === 4">4️</template>
        <template v-else-if="num === 5">5️</template>
        <template v-else-if="num === 6">6️</template>
        <template v-else-if="num === 7">7️</template>
        <template v-else-if="num === 8">8️</template>
        <template v-else-if="num === 9">9️</template>
        <template v-else>0️</template>
    </q-btn>
    <q-btn @click="deleteLastDigit" color="blue-8" dense flat>⬅️</q-btn> <!-- Delete button -->
</q-card-section>

<q-card-actions align="center">
    <q-btn @click="login" color="pink">🔒 Unlock 🔒</q-btn>
</q-card-actions>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'LoginPage',
    setup() {
      const pin = ref('')
      const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // Keypad numbers
      const router = useRouter()
      const showImage = ref(true)
      const currentImage = ref(1) // Define currentImage here
      const showAnniversary = ref(false) // Show Anniversary Celebration

  
      const showNextImage = () => {
  setTimeout(() => {
    if (currentImage.value === 1) {
      currentImage.value = 2;
    } else if (currentImage.value === 2) {
      currentImage.value = 3;
    } else {
      showImage.value = false;
      showAnniversary.value = true; // Show Anniversary Celebration
    }
  }, 2000);
};
  
      const login = () => {
        // Check if pin is correct (this is just an example)
        if (pin.value === '201166') {
          // Navigate to the authenticated part of your website
          router.push('/ppp')
        } else {
          alert('Incorrect PIN')
        }
      }
  
      const updatePin = (num) => {
        pin.value += num.toString() // Append clicked number to the pin
      }

      const deleteLastDigit = () => {
    if (pin.value.length > 0) {
        pin.value = pin.value.slice(0, -1); // Remove the last digit
    }
}

      const proceedToLogin = () => {
         // Add transition effect before navigating to the login page
      setTimeout(() => {
        showAnniversary.value = false
          }, 500) //
      
    }
  
      return {
        pin,
        keypad,
        login,
        updatePin,
        showImage,
        showNextImage,
        currentImage, // Make sure to include currentImage in the return statement
        showAnniversary,
        proceedToLogin,
        deleteLastDigit,

      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-card {
    width: 300px;
    padding: 20px;
  }
  
  .pin-input {
    margin-bottom: 20px;
  }
  
  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  
  .q-btn.blue-8 {
    background-color: purple; /* Change button background color to purple */
  }

  .q-btn.blue-8:hover {
    background-color: darkpurple; /* Change button hover color to a darker shade of purple */
  }

  .anniversary-container {
  position: relative;
}
.heart-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.anniversary-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
  
  .sticker-enter-active, .sticker-leave-active {
    transition: transform 0.5s ease;
  }
  
  .sticker-enter, .sticker-leave-to {
    transform: translateY(-100%);
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  /* Additional styling for cute stickers */
  .sticker img {
    width: 100px; /* Adjust size as needed */
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.image-container {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center; /* Optional: Center the images horizontally */
}

.responsive-image {
  max-width: 100%;
  height: auto;
}
/* Add fade animation */
.sticker-fade-enter-active, .sticker-fade-leave-active {
  transition: opacity 0.5s ease; /* Adjust duration and easing function as needed */
}
.sticker-fade-enter, .sticker-fade-leave-to {
  opacity: 0;
}
  </style>
  