import service from '@/utils/service'
const checkStudentUsername = (username) => {
    return service.get('/register/checkStudentUsername', {
        params: {
            username: username

        }
    })
}
const studentRegister = (studentInfo) => {
    return service.post('/register/studentRegister', studentInfo)
}
export default {
    checkStudentUsername,
    studentRegister
}