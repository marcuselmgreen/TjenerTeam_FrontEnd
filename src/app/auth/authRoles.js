/**
 * Authorization Roles
 */
const authRoles = {
    admin       : ['admin', 'corporation', 'staff'],
    corporation : ['corporation'],
    staff       : ['staff'],
    onlyGuest: []
};

export default authRoles;
