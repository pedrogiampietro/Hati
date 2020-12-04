const { accountSignInValidator, accountChangePasswordValidator, createCharacterValidator, accountSignUpValidator } = require('../../src/validators/account')

describe('Accounts - Validations', () => {
    
    it('login validation username required', () => {
        const { error } = accountSignInValidator({})

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('any.required')
    })
    
    it('login validation password required', () => {
        const { error } = accountSignInValidator({ name: 'character'})

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('any.required')
    })
    
    it('login validation username invalid chars', () => {
        const { error } = accountSignInValidator({
            name: '@character!',
            password: 'password'
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.alphanum')
    })
    
    it('login validation password invalid chars', () => {
        const { error } = accountSignInValidator({
            name: 'character',
            password: '@password!'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.alphanum')
    })
    
    it('login validation username length > 30', () => {
        const { error } = accountSignInValidator({
            name: 'loremipsumdolorsitametconsecteturadipiscingelit',
            password: 'password'
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.max')
    })

    it('login validation username length < 6', () => {
        const { error } = accountSignInValidator({
            name: '1',
            password: 'password'
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.min')
    })

    it('login validation password length > 30', () => {
        const { error } = accountSignInValidator({
            name: 'character',
            password: 'loremipsumdolorsitametconsecteturadipiscingelit'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.max')
    })

    it('login validation password length < 3', () => {
        const { error } = accountSignInValidator({
            name: 'character',
            password: '1'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.min')
    })

    it('login validation successful', () => {
        const { error } = accountSignInValidator({
            name: 'character',
            password: 'password'
        })

        expect(error).toBe(undefined)
    })

    it('change password doesnt match', () => {
        const { error } = accountChangePasswordValidator({
            password: 'password',
            password_confirmation: 'drowssap'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password_confirmation');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('any.only')
    })

    it('change password match', () => {
        const { error } = accountChangePasswordValidator({
            password: 'password',
            password_confirmation: 'password'
        })

        expect(error).toBe(undefined)
    })

    it('player creation validation name required', () => {
        const { error } = createCharacterValidator({})

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('any.required')
    })
    
    it('player creation validation name invalid chars', () => {
        const { error } = createCharacterValidator({
            name: 'lorem\'ipsum',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.alphanum')
    })
    
    it('player creation validation name length > 21', () => {
        const { error } = createCharacterValidator({
            name: 'loremipsumdolorsitametco',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.max')
    })

    it('player creation validation name length < 5', () => {
        const { error } = createCharacterValidator({
            name: 'dodo',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.min')
    })

    it('player creation validation successful', () => {
        const { error } = createCharacterValidator({
            name: 'Sample',
        })

        expect(error).toBe(undefined)
    })

    it('account creation validation name invalid chars', () => {
        const { error } = accountSignUpValidator({
            name: 'account name'
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.alphanum')
    })

    it('account creation validation name length < 6', () => {
        const { error } = accountSignUpValidator({
            name: '1'
        })
        
        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.min')
    })

    it('account creation validation name length > 30', () => {
        const { error } = accountSignUpValidator({
            name: 'loremipsumdolorsitametconsecteturadipiscingelit'
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.max')
    })

    it('account creation validation password invalid chars', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: '@password!'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.alphanum')
    })

    it('account creation validation password length < 3', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: '1'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.min')
    })

    it('account creation validation password length > 30', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: 'loremipsumdolorsitametconsecteturadipiscingelit'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('string.max')
    })

    it('account creation validation password doesnt match', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: 'password',
            password_confirmation: 'drowssap'
        })

        const passwordErrors = error.details.filter(e => e.context.key === 'password_confirmation');
        expect(passwordErrors).toHaveLength(1)
        expect(passwordErrors[0].type).toBe('any.only')
    })

    it('account creation validation email invalid', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: 'password',
            password_confirmation: 'password',
            email: 'x'
        })

        const emailErrors = error.details.filter(e => e.context.key === 'email');
        expect(emailErrors).toHaveLength(1)
        expect(emailErrors[0].type).toBe('string.email')
    })

    it('account creation validation successful', () => {
        const { error } = accountSignUpValidator({
            name: 'accountname',
            password: 'password',
            password_confirmation: 'password',
            email: 'test@haviaac.com'
        })

        expect(error).toBe(undefined)
    })
    
})