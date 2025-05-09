type UserInformation = {
    email: string;
    password: string;
}

const validateUser = (values: UserInformation) => {
    const errors = {
        email: '',
        password: '',
    };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다.';
    }
    if (!(values.password.length >= 8 && values.password.length < 20)) {
        errors.password = '비밀번호는 8에서 20자 사이로 입력해주세요.';
    }
    return errors;
};

const validateLogin = (values: UserInformation) => {
    return validateUser(values);
};

const validateSignUp = (values: UserInformation & { passwordConfirm: string }) => {
    const errors = validateUser(values);
    const signUpErrors = {...errors, passwordConfirm: ''};

    if (values.password !== values.passwordConfirm) {
        signUpErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }
    return signUpErrors;
};

function validateAddPost(values: { title: string }) {
    const errors = {
        title: '',
        description: ''
    }

    if (values.title.trim() === '') {
        errors.title = '제목은 1~30자 이내로 입력 해주세요.';
    }

    return errors;
}

export {validateLogin, validateSignUp, validateAddPost};
