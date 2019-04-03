import axios from "axios";

export default {
  // savePost: function(postObject){
  //   return axios.post('api/posts/', postObject);
  // },
getPosts: function(){
  console.log('getting posts client side')
  return axios.get('/api/posts/');
  },

getBrewingPosts: function(){
  console.log("getting brewing posts client side")
  return axios.get("api/posts/brewing/")
},

saveBrewingPosts: function(postObject){
  console.log("saving brewing posts client side")
  return axios.post("api/posts/brewing/", postObject)
},

getCodingPosts: function(){
  console.log("getting coding posts client side")
  return axios.get("api/posts/coding/")
},

saveCodingPosts: function(postObject){
  console.log("saving brewing posts client side")
  return axios.post("api/posts/coding/", postObject)
},

getSkiingPosts: function(){
  console.log("getting skiing posts client side")
  return axios.get("api/posts/skiing/")
},

saveSkiingPosts: function(postObject){
  console.log("saving brewing posts client side")
  return axios.post("api/posts/skiing/", postObject)
},

  // ======================User API==========================================
  getAllUsers: function(){
    return axios.get('/api/users/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },  
  saveUser: function(postObject){
    return axios.post('/api/users/', postObject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  getUser: function(id){
    return axios.get('/api/users/' + id)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  },  
  UpdateUser: function(id, putObject){
    return axios.put('/api/users/' + id, putObject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  DeletUser: function(id){
    return axios.put('/api/users/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
    // ======================Activities API==========================================
    getAllActivities: function(){
      return axios.get('/api/activities/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },  
    saveActivity: function(postObject){
      return axios.post('/api/activities/', postObject)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getActivity: function(id){
      return axios.get('/api/activities/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },  
    UpdateActivity: function(id, putObject){
      return axios.put('/api/activities/' + id, putObject)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    DeletActivity: function(id){
      return axios.put('/api/activities/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  // ======================Comments API==========================================
  getAllComments: function(){
    return axios.get('/api/comments/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },  
  saveComment: function(postObject){
    return axios.post('/api/comments/', postObject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  getComment: function(id){
    return axios.get('/api/comments/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },  
  UpdateComment: function(id, putObject){
    return axios.put('/api/comments/' + id, putObject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  DeletComment: function(id){
    return axios.put('/api/comments/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },   
    
};