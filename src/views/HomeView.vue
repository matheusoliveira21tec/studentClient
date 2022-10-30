<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Adicione um aluno:</h1>
      <StudentForm />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import StudentForm from '../components/StudentForm'
export default {
  name: 'Home',
  components: {
    Banner,
    StudentForm
  }
}
</script>
