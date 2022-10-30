<template>
    <div>
        <div class="main-container">
            <h1>Editar Aluno:</h1>
            <EditForm />
        </div>
    </div>
</template>
  
<script>
import EditForm from '../components/EditForm'
export default {
    name: 'Edit',
    components: {
        EditForm
    }
}
</script>