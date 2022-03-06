import service from '@/utils/service'

// 用户名重复判断
const checkUsername = (username) => {
    return service.get('/register/checkUsername', {
        params: {
            username: username

        }
    })
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
    checkUsername,
    // 消费者
    customerRegister,
    // 志愿者
    checkVolunteerUsername,
    volunteerRegister,
    // 商户
    merchantRegister,
    // 技术提供者
    technicistRegister

}