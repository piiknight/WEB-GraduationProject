export const RoleManager = {
  STUDENT: "STUDENT",
  TEACHER: "TEACHER",
  ADMIN: "ADMIN",

  isAdmin: function(authority) {
    return authority === this.ADMIN;
  },

  isTeacherOrAdmin: function(roleId, roles) {
    let result = false;
    roles.forEach(role => {
      if (
        role.id === roleId &&
        (role.authority === this.TEACHER || role.authority === this.ADMIN)
      ) {
        result = true;
      }
    });

    return result;
  },

  isStudent: function(roleId, roles) {
    let result = false;
    roles.forEach(role => {
      if (role.id === roleId && role.authority === this.STUDENT) {
        result = true;
      }
    });

    return result;
  }
};
