const KEYS = {
    users: 'users',
    userId: 'userId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Admin' },
    { id: '2', title: 'Doctor' },
    { id: '3', title: 'Patient' },
    { id: '4', title: 'Receptionist' },
])

export function insertUser(data) {
    let users = getAllUsers();
    data['id'] = generateUserId()
    users.push(data)
    localStorage.setItem(KEYS.users, JSON.stringify(users))
}

export function updateUser(data) {
    let users = getAllUsers();
    let recordIndex = users.findIndex(x => x.id === data.id)
    users[recordIndex]= {...data}
    localStorage.setItem(KEYS.users, JSON.stringify(users))
}

export function deleteUser(id) {
    let users = getAllUsers();
    users = users.filter(x => x.id !== id)
    localStorage.setItem(KEYS.users, JSON.stringify(users));
}


export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    var id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}

export function getAllUsers() {
    if (localStorage.getItem(KEYS.users) == null)
        localStorage.setItem(KEYS.users, JSON.stringify([]))
    let users = JSON.parse(localStorage.getItem(KEYS.users));
    /* Map departmentID to department title */
    let departments = getDepartmentCollection();
    return users.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}