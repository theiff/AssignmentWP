<template>
    <div >
    <v-layout class="searchBar"> 
            <div xs-2 class="search" style="width:100px"><v-icon style="margin-top:23px">search</v-icon></div>
            
             <v-text-field xs-8 prepend-icon="person" name="login" label="Search" type="text" style="margin: auto" v-model="search"></v-text-field>
                         
            <v-btn v-on:click='change()' color="orange lighten-2" xs-2 text-xs-center style="margin: auto; margin-right: 10px">Add<v-icon dark right>add</v-icon>
                    </v-btn>            
                    </v-layout> 
     
     
     <v-container >
<v-layout row wrap  >
    <v-flex xs12 sm6 md3 class="px-2" v-for="x in filterdUsers" v-bind:key="x.id" style="margin-bottom: 5px"  >
      <v-card>
        <v-card-media :src="x.ImageUrl" height="200px">
        </v-card-media>
        
          <layout class="userList">
            <v-list dense style="padding: 0">
                 
                 <div>
                     <v-list text-xs-center class="fullname" >{{x.firstName}}     {{x.lastName}}</v-list>
                 </div>

                 <div text-xs-center>
                    
                    <v-list  class="Mobile" ><v-list-title style="margin: 8px;" >Mobile: </v-list-title>{{x.MobileNo}}</v-list>
                 </div>

                 <div>

                     <v-list text-xs-center class="Email" align-center> <v-list-title style="margin: 8px;" >Email: </v-list-title>{{x.Email}}</v-list>
                 </div>

                 <div>
                    
                     <v-list text-xs-center class="FB" ><v-list-title style="margin: 8px;" >Facebook: </v-list-title> {{x.Facebook}}</v-list>
                 </div>
            
            </v-list>
          </layout>
        
        
        

        <v-card-actions>
            <v-flex xs12 >
              <router-link :to="{ path: 'updateuser/' + x._id}">
          <v-btn color="blue" xs-2 fab small dark text-xs-center  style="margin: auto"><v-icon style="color:white">create</v-icon>
                    </v-btn> 
              </router-link>
          <v-btn color="red" xs-2 fab small dark-1 text-xs-center style="margin: auto" v-on:click='delUser(x._id)' ><v-icon style="color:white;  ">delete</v-icon>
                    </v-btn> 
            </v-flex>
        </v-card-actions>
      
      </v-card>
    </v-flex>
</v-layout>
  </v-container>
   
   
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      User:[


      ],
      search: '',
      uid:''
      

    }

  },
  methods: {
    change(){
      this.$router.push('/contact')
    },delUser (userId) {
      var url = 'http://localhost:5678/users/' + userId
      axios.delete(url)
        .then((response) => {
          console.log('Delete UserId: ' + userId)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    DELETE (id) {
      $('#my-modal').modal('show')
      this.uid = id
    }


  },
  mounted() {
    axios.get('http://localhost:5678/users')
    .then((response) => {
      console.log(response)
      this.User = response.data
    })
    .catch((error) => {
      console.log(error)
    })    
  } ,
  computed: {
    filterdUsers: function () {
      return this.User.filter((user) => {
        return user.firstName.match(this.search)
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
.searchBar{
    border: 1px solid #EEEEEE;
    margin: 0 50px;
    margin-top: 90px;
    border-radius: 10px;
}
.userList {

    margin: auto; 

    
    
}

.card__title {

    padding: 0px;
}
.card__actions {
    padding: 0 4px 8px 4px;
}
.search {
  background-color: #E0E0E0;
  
  
}
</style>
