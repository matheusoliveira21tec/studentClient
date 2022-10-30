<template>
    <Message :msg="msg" v-show="msg" />
    <div>
        <form id="student-form">
            <div class="input-container">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" v-model="this.student.name" required
                    placeholder="Digite o nome">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" required id="email" name="email" v-model="this.student.email"
                    placeholder="Digite o email">
            </div>
            <div class="input-container">
                <label for="ra">RA:</label>
                <input type="text" id="ra" name="ra" v-model="this.student.ra" maxlength='10' disabled
                    placeholder="Digite o registro acadêmico">
            </div>
            <div class="input-container">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" v-model="this.student.cpf" maxlength="11" disabled
                    placeholder="Digite o CPF">
            </div>
            <div class="input-container">
                <button class="submit-btn" @click="this.updateStudent(student)">Salvar</button>
                <button class="submit-btn" @click="this.$router.push('/class')">Cancelar</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import Message from './Message';
import api from '../services/student';
export default {
    name: "EditForm",
    data() {
        return {
            msg: null,
            student: []
        }
    },
    methods: {
        async loadStudent() {
            const id = this.$route.params.id
            const response = await api.get(id);
            this.student = response.data;
        },
        async updateStudent(student) {
            try {
                const response = await api.update(student);
                this.msg = "Aluno atualizado com sucesso!"
                setTimeout(3000)
            } catch (err) {
                this.msg = "Problemas ao atualizar aluno!"
            }
        }
    },
    mounted() {
        this.loadStudent()
    },

    components: {
        Message
    }
}
</script>
  
<style scoped>
#student-form {
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    ;
    padding: 5px 10px;
    border-left: 4px solid #b100a9;
}

input {
    padding: 5px 10px;
    width: 300px;
}

.submit-btn {
    background-color: #222;
    color: #b100a9;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.submit-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>