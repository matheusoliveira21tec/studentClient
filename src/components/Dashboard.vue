<template>
    <div id="search">
        <div class="input-container">
            <input type="text" id="query" name="query" v-model="query" placeholder="Digite o nome do aluno..."
                v-on:keydown="handleKeyDown">

        </div>
    </div>
    <div id="student-table" v-if="students">
        <div>
            <div id="student-table-heading">
                <div class="order-id">#:</div>
                <div>Nome:</div>
                <div>Email:</div>
                <div>RA:</div>
                <div>CPF:</div>
            </div>
        </div>
        <div id="student-table-rows">
            <div class="student-table-row" v-for="student in students" :key="student.id">
                <div class="order-number">{{ student.id }}</div>
                <div>{{ student.name }}</div>
                <div>{{ student.email }}</div>
                <div>{{ student.ra }}</div>
                <div>{{ student.cpf }}</div>

                <div>
                    <button class="edit-btn" @click="this.$router.push(`/edit/${student.id}`)">Editar</button>
                    <button class="delete-btn" @click="deleteStudent(student.id)"> Excluir</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>Não há alunos no momento!</h2>
    </div>
</template>
<script>
import api from '../services/student';
export default {
    name: "Dashboard",
    data() {
        return {
            students: null,
            query: null
        }
    },
    methods: {
        async loadStudents() {
            const response = await api.index();
            this.students = response.data;
        },
        async deleteStudent(id) {
            if (window.confirm('Tem certeza que deseja excluir esse aluno')) {
                await api.delete(id);
                this.loadStudents();
            }
        },
        async handleKeyDown(e) {
            if (e.key == 'Enter') {
                this.searchNotes()
            }
        },
        async searchNotes() {
            const response = await api.search(this.query);
            console.log(response.data)
            this.students = response.data;
        }
    },
    mounted() {
        this.loadStudents()
    }
}

</script>
  
<style scoped>
#student-table {
    max-width: 1200px;
    margin: 0 auto;
}

#student-table-heading,
#student-table-rows,
.student-table-row {
    display: flex;
    flex-wrap: wrap;
}

#student-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}

.student-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
}

#student-table-heading div,
.student-table-row div {
    width: 19%;
}

#student-table-heading .order-id,
.student-table-row .order-number {
    width: 5%;
}

.delete-btn {
    background-color: #222;
    color: #fc0303;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.edit-btn {
    background-color: #222;
    color: #29cd00;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
}
input {
    padding: 5px 10px;
    width: 300px;
}

.delete-btn:hover {
    background-color: transparent;
    color: #222;
}

.edit-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>