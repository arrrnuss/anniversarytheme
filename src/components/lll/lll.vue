<template>
  <div class="wrapper" @click="openLetter">
    <div class="lid" :class="{ open: isEnvelopeOpen }"></div>
    <div class="envelope"></div>
    <q-dialog v-model="isDialogOpen">
      <q-card>
        <q-card-section v-if="isLetterVisible" class="letter">
          <p>สุขสันต์วันครบรอบ</p>
          <p>ขอโทษสำหรับทุกเรื่องที่เคยทำตัวไม่ดี</p>
          <p>แล้วก็ขอบคุณมากนะที่เข้ามาเป็นสิ่งดี ๆ ในชีวิตเค้า</p>
          <p>หลังจากนี้ก็อยากให้เราได้อยู่กันไปอีกเรื่อย ๆ นะ</p>
          <p>รักนะครับ</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "LllPage",

  data() {
    return {
      isEnvelopeOpen: false,
      isDialogOpen: false,
    };
  },
  computed: {
    isLetterVisible() {
      return this.isEnvelopeOpen && this.isDialogOpen;
    },
  },
  methods: {
    openLetter() {
      this.isEnvelopeOpen = !this.isEnvelopeOpen; // Toggle the envelope state
      if (this.isEnvelopeOpen) {
        // If the envelope is opened, wait for a brief moment before opening the dialog
        setTimeout(() => {
          this.isDialogOpen = true;
        }, 500);
      } else {
        // If the envelope is closed, close the dialog immediately
        this.isDialogOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 400px;
  height: 300px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
  border-radius: 10px; /* Border radius is simplified as it's applied to all corners */
}

.envelope {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 150px solid transparent;
  border-right: 200px solid hsl(240, 100%, 65%);
  border-bottom: 150px solid hsl(240, 100%, 65%);
  border-left: 200px solid hsl(240, 100%, 70%);
  transition: 0.5s;
}
.lid {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top;
  border-top: 150px solid violet;
  transform: rotateX(0deg);
  border-right: 200px solid transparent;
  border-bottom: 150px solid transparent;
  border-left: 200px solid transparent;
  transition: 0.5s;
}
.lid.open {
  transform: rotateX(180deg);
  z-index: -1;
  transition: 0.7s linear;
}
.letter {
  padding: 20px;
  font-family: "Comic Sans MS", cursive; /* Cute font family */
  animation: bounce 0.7s ease;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
