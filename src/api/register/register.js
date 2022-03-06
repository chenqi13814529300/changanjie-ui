import service from '@/utils/service'

// 
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



// 消费者注册
const checkCustomerUsername = (username) => {
    return service.get('/register/checkCustomerUsername', {
        params: {
            username: username
        }
    })
}
const customerRegister = (customerInfo) => {
    return service.post('/register/customerRegister', customerInfo)
}

// 志愿者注册

const checkVolunteerUsername = (username) => {
    return service.get('/register/checkVolunteerUsername', {
        params: {
            username: username
        }
    })
}
const volunteerRegister = (volunteerInfo) => {
    return service.post('/register/volunteerRegister', volunteerInfo)
}
// 商户注册


const merchantRegister = (merchantInfo) => {
    return service.post('/register/merchantRegister', merchantInfo)
}

// 技术提供者注册
const technicistRegister = (technicistInfo) => {
    return service.post('/register/technicistRegister', technicistInfo)
}

export default {
    checkStudentUsername,
    studentRegister,
    // 消费者
    checkCustomerUsername,
    customerRegister,
    // 志愿者
    checkVolunteerUsername,
    volunteerRegister,
    // 商户
    merchantRegister,
    // 技术提供者
    technicistRegister

}