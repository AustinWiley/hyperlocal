import axios from "axios";
const BASEURL = "https://www.googleapis.com/posts/v1/volumes?q=";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

export default {
  search: function(query) {
    console.log('Searching');
    console.log(BASEURL + query.trim().replace(/ /g,"%20"));
    return axios.get(BASEURL + query.trim().replace(/ /g,"%20"));
  },
  savePost: function(postObject){
    return axios.post('api/posts/', postObject);
  },
  getPosts: function(){
    console.log('getting posts client side')
    return axios.get('/api/posts/');
  },
  deletePost: function(id){
    return axios.delete('/api/posts/' + id)
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
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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