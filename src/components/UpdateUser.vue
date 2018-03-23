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

                <v-btn color="red lighten-1" style="margin-right: 325px" v-on:click='updateToAPI'>Update
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
  name: 'UpdateUser',
  data () {
    return {
      //msg: 'Update User',
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
    updateToAPI () {
      console.log(this.$route.params.userId)
      let newUser = {
        contactId: this.User.contactId,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        MobileNo:this.User.MobileNo,
        Email:this.User.Email,
        Facebook:this.User.Facebook,
        ImageUrl:this.User.ImageUrl
      }
      console.log(newUser)
      axios.post('http://localhost:5678/users/' + this.$route.params.userId, newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
      this.$router.push('/')
    }
    
  },
  mounted () {
      //alert(this.$route.params.userId)
    axios.get('http://localhost:5678/users/' + this.$route.params.userId)
      .then((response) => {
        console.log(response.data)
        this.User = response.data
        //alert("hello")
      })
      .catch((error) => {
        console.log(error)
      })
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
