<template>
    <div>
        <div id="nav">
            <router-link id="logo-url" to="/">
                <img id="logo" :src="logo" :alt="alt">
            </router-link>
            <router-link to="/">Home</router-link>
            <router-link to="/class">Turma</router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>
  
<style scoped>
#nav {
    background-color: rgb(124, 114, 114);
    border-bottom: 4px solid rgb(124, 114, 114);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#nav #logo-url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 87px;
    height: 64px;
}

#nav a {
    color: #000000;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover {
    color: #FFF;
}
</style>