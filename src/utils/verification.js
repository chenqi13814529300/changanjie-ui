export function checkEmail() {
  let checkEmail = (rule, value, callback) => {
    let verify = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    if (value === '') {
      return callback(new Error('邮箱不能为空'))
    } else if (!verify.test(value)) {
      return callback(new Error('邮箱格式错误'))
    } else {
      callback()
    }
  }
  return checkEmail
}

// 核对手机号码格式
export function checkTeleNumber() {
  let checkTeleNumber = (rule, value, callback) => {
    let verify =
      /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

    if (value === '') {
      return callback(new Error('手机号不能为空'))
    } else if (!verify.test(value)) {
      return callback(new Error('手机号格式错误'))
    } else {
      callback()
    }
  }
  return checkTeleNumber
}

// 核对身份证格式
export function checkPersonId() {
  let checkPersonId = (rule, value, callback) => {
    let verify =
      /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    if (value === '') {
      return callback(new Error('身份证不能为空'))
    } else if (!verify.test(value)) {
      return callback(new Error('身份证格式错误'))
    } else {
      callback()
    }
  }
  return checkPersonId
}

export function checkBankCardNumber() {
  let checkBankCardNumber = (rule, value, callback) => {
    let validateBankCard = /^([1-9]{1})(\d{14}|\d{18})$/
    if (value === '') {
      return callback(new Error('银行卡号不能为空'))
    } else if (!validateBankCard.test(value)) {
      return callback(new Error('银行卡号格式错误'))
    } else {
      callback()
    }
  }
  return checkBankCardNumber
}



export function checkAge(){
  var checkAge = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'));
      } else {
        if (value < 16) {
          callback(new Error('必须年满16岁'));
        } else {
          callback();
        }
      }
    }, 1000);
  };
  return checkAge
}



