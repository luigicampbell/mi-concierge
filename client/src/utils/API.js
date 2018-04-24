import axios from "axios";

export default {
  // Create user
  createUser: function(newUserData) {
    return axios.post("/api/user", newUserData);
  },
  // Find user by user_id
  findUserById: function(user_id) {
    return axios.get("/api/user/user_id/" + user_id);
  },
  // Find user by email_primary
  findUserByEmail: function(user_email) {
    return axios.get("/api/user/email/" + user_email);
  },
  // Delete user by user_id
  deleteUserById: function(user_id) {
    return axios.delete("/api/user/user_id/" + user_id);
  },
  // Update user by user_id
  updateUserById: function(req, user_id) {
    return axios.update("/api/user/user_id" + user_id, req.body)
  }

};
