<template>
  <main class="app">
    <h2>Grade de la Marine</h2>

    <section class="quiz">
      <div class="quiz-info">
        <span class="question"><RankCard v-if="currentQuestion.name" :rank-model="currentQuestion" :quiz-mode="true" /></span>
        <span class="score">Score: {{ score }} / {{ currentQuestionNumber }}</span>
      </div>

      <div class="options">
        <label v-for="(answer, index) in currentAnswers" :key="index" :class="`option ${currentSelection === answer ?
                                                                                          answer === currentQuestion.name ? 'correct' : 'wrong'
                                                                                        : ''}
                                                                                        ${currentSelection !== null ? 'disabled' : ''}`">
          <input type="radio" :name="answer" :value="answer" v-model="currentSelection" :disabled="currentSelection !== null" @change="setAnswer(answer)">
          <span>{{ answer }}</span>
        </label>
      </div>

      <button @click="getNextQuestion()" :disabled="currentSelection === null"> {{ currentSelection === null ? 'Choisissez une réponse' : 'Grade suivant' }}</button>
    </section>
  </main>
</template>

<script setup lang="ts">
import RankCard from '@/components/RankCard.vue';
import { useRankService } from "@/composables/ranks";
import {onMounted, reactive, ref} from "vue";
import {type Rank} from "@/models/Rank";

const rankService = useRankService();
const ranks = rankService.list();

const currentQuestionNumber = ref(0);
const score = ref(0);

const currentQuestion = reactive<Rank>( {} as Rank);
const currentAnswers = ref<Array<string>>([]);
const currentSelection = ref<null | string>(null);


function getRandomRank() {
  return ranks[Math.floor(Math.random() * ranks.length)];
}
function getNextQuestion() {
  const rankQuestion = getRandomRank();
  currentQuestion.name = rankQuestion.name;
  currentQuestion.imageName = rankQuestion.imageName;
  updateAnswers();
}
function updateAnswers() {
  let answers = [currentQuestion.name];
  while (answers.length <4) {
    const answer = getRandomRank();
    if (!answers.includes(answer.name)) answers.push(answer.name);
  }
  answers = shuffle(answers);
  currentAnswers.value = answers;
  currentSelection.value = null;
}
function setAnswer(answer: string) {
  currentSelection.value = answer;
  if (currentQuestion.name === answer) score.value++;
  currentQuestionNumber.value++;
}

function shuffle(array: Array<any>) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

onMounted(() => {
  getNextQuestion();
});

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Light', sans-serif;
}

body {
  color: #ffffff;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: #8f8f8f;
  font-size: 1.25rem;
}

.quiz-info .score {
  color: #ffffff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background: #271c36;
  color: #8f8f8f;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover {
  background: #2d213f;
}

.option.correct {
  background: #2cce7d;
}

.option.wrong {
  background: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
}

p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>
