<template>

  <!-- ====== Contact Section End -->

  <section id="services" class="padding-x mb-20">



    <div class="flex w-full flex-col">
      <h1 id="what-i-do" v-html="whatIDo" class="heading-1 font-extrabold uppercase"></h1>

      <div
        id="services-text"
        class="grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"
      >


        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold col-span-4 md:col-start-5"
        >
          Studied how electromagnetic waves work, currently flipping Bits to flip more Bits.
          Currently working as a Software Engineer have a Masters and Bachelors in Electrical
          Engineering and Information Technology. Like working with people smarter and more driven
          than me. Always ready to learn something new and build something amazing. I am language
          agnostic. I believe in using the right tool for the job not "just my tool for the job".
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%] ">
      <div class="mt-12 flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="sticky border-t border--500/50 opacity-90 gradientBackground"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animateSplitText } from '@/animations'
import { textSplitterIntoChar } from '@/functions'
import { onBeforeMount, onMounted, ref } from 'vue'
import { ServicesCard } from '@/components/common'

const whatIDo = ref('My services /')

const servicesCardProps = [
  {
    title: 'Software/Automation Engineer',
    body: 'Development and support of process automation solutions (data prep, inspection, metrology, lithography, etch) for photomask manufacturing processes in semiconductor production Integration/testing of developed applications on laser or electron beam writers. System architecture/requirements engineering/design reviews for existing process optimization. Fullstack development with CI/CD using Gitlab CI and Docker Swarm. Integration with ETL/data warehouse',
    headings: ['Typescript, Python and Java', 'Docker, Gitlab CI and Protrainer', 'Oracle PL/SQL, MySLQ, MongoDB and GraphQL'],
    shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
  },
  {
    title: 'University',
    body: 'I have a Masters and Bachelors in Electrical Engineering and Information Technology. I have worked on projects in the field of Machine Learning, Computer Vision, and Signal Processing. I have also worked on projects in the field of Embedded Systems and Robotics. I have experience in programming microcontrollers, desiging analog and digital circuits and RF circuits .',
    headings: ['Signal processing', 'Analog and Digital circuits', 'RF circuits'],
    shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
  },
  {
    title: 'Fullstack Web Development',
    body: 'I develop modern websites with animations and motion. I have built scalable web applications Django, Node.js, Vue and MongoDB. I have built multiple GraphQL and REST APIs.',
    headings: ['Vue, Node, Typescript', 'Three, CSS Animations', 'GraphQL, REST'],
    shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
  },
]

onBeforeMount(() => {
  whatIDo.value = textSplitterIntoChar('ABOUT', true)
})

onMounted(() => {
  animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0)
})

const getStyle = (index: number) => {
  if (index === 0) {
    return 'top-[calc(20vh_+_0em)] mb-[17.25em]'
  }

  if (index === 1) {
    return 'top-[calc(20vh_+_5.75em)] mb-[11.5em]'
  }

  if (index === 2) {
    return 'top-[calc(20vh_+_11.5em)] mb-[5.75em]'
  }
}
</script>
