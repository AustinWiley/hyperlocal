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
  }

};