<template>
  <div>
  <v-app id="inspire">
   
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="light-blue darken-4">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="User Account" type="text" v-model="username" ></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                
                <v-btn color="grey lighten-3" style="margin:  auto; margin-bottom: 10px;" v-on:click='check()'  > Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    
  </v-app>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    check(){
       axios.get('http://localhost:5678/members')
      .then((response) => {
        console.log(response)
        if(this.username == response.data.username && this.password == response.data.password)
          {
            this.$router.push('/')
          }
        else{
          this.username = ''
          this.password = ''
          alert("Wrong username or password!")
        }
      })
      .catch((error) => {
        console.log(error)
    })    
    }


  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
