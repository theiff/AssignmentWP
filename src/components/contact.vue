<template>
  <div>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 >
            <v-card class="elevation-12">
              <v-toolbar dark color="grey darken-3">
                <v-toolbar-title >Contact</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                    <v-form v-model="valid">
                        <v-text-field
                        label="Contact ID"
                        v-model="User.contactId"
                        :rules="nameRules"
                        required
                        ></v-text-field>
                        <v-text-field
                        label="Firstname"
                        v-model="User.firstName"
                        :rules="nameRules"
                        :counter="5"
                        required
                        ></v-text-field>
                        <v-text-field
                        label="Lastname"
                        v-model="User.lastName"
                        :rules="nameRules"
                        :counter="5"
                        required
                        ></v-text-field>
                        <v-text-field
                        label="Mobile No."
                        v-model="User.MobileNo"
                        :rules="nameRules"
                        required
                        ></v-text-field>
                        <v-text-field
                        label="Email"
                        v-model="User.Email"
                        :rules="nameRules"
                        ></v-text-field>
                        
                        <v-text-field
                        label="Facebook"
                        v-model="User.Facebook"
                        :rules="emailRules"
                        ></v-text-field>

                        <v-text-field
                        label="Image URL"
                        v-model="User.ImageUrl"
                        :rules="emailRules"
                        ></v-text-field>
                    </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey lighten-1" style="margin-left: 325px" v-on:click="addToAPI"> Save<v-icon dark right>save</v-icon></v-btn>

                <v-btn color="red lighten-1" style="margin-right: 325px" v-on:click='Close()' >close<v-icon dark right >close</v-icon>
                    </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      User:{
        contactId: '',
        firstName: '',
        lastName: '',
        MobileNo:'',
        Email:'',
        Facebook:'',
        ImageUrl:''
      }
    }
  },
  methods: {
    addToAPI () {
      alert('Contact Added')
      let newUser = {
        contactId: this.User.contactId,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        MobileNo:this.User.MobileNo,
        Email:this.User.Email,
        Facebook:this.User.Facebook,
        ImageUrl:this.User.ImageUrl


      }
        axios.post('http://localhost:5678/users', newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })   
        this.$router.push('/') 
        },
        Close () {
            this.$router.push('/')



        }



  }
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
.contactAdd {

    text-align: center;
}
.ContactIdAdd {

    border: 1px solid gray;
    border-radius: 10px;

}
</style>
