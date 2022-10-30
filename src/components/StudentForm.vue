<template>
    <Message :msg="msg" v-show="msg" />
    <div>
        <form id="student-form" method="POST" @submit="createStudent">
            <div class="input-container">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" v-model="nome" required placeholder="Digite o nome">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" required id="email" name="email" v-model="email" placeholder="Digite o email">
            </div>
            <div class="input-container">
                <label for="ra">RA:</label>
                <input type="text" id="ra" name="ra" v-model="ra" maxlength='10' required
                    placeholder="Digite o registro acadêmico">
            </div>
            <div class="input-container">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" v-model="cpf" maxlength="11" required placeholder="Digite o CPF">
            </div>
            <div class="input-container">
                <input class="submit-btn" type="submit" value="Salvar">
                <input class="submit-btn" type="submit" value="Cancelar">
            </div>
        </form>
    </div>
</template>
  
<script>
import Message from './Message';
import api from '../services/student';
export default {
    name: "StudentForm",
    data() {
        return {
            nome: null,
            email: null,
            ra: null,
            cpf: null,
            msg:null
        }
    },
    methods: {
        async createStudent(evt) {
            evt.preventDefault();
            try {
                const response = await api.create({ name: this.nome, email: this.email, ra: this.ra, cpf: this.cpf });
                console.log(response)
                this.msg = "Aluno incluido com sucesso!"
                setTimeout(() => this.msg = "", 3000)
                this.nome = ""
                this.email = ""
                this.ra = ""
                this.cpf = ""
            } catch (err) {
                this.msg = "Problemas ao incluir aluno!"
            }
        }
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