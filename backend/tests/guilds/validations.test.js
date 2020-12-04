const { createGuildValidator } = require('../../src/validators/guild')

describe('Guilds - Validations', () => {
    
    it('guild creation validation name required', () => {
        const { error } = createGuildValidator({})

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('any.required')
    })
    
    it('guild creation validation name invalid chars', () => {
        const { error } = createGuildValidator({
            name: '@guild',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.pattern.base')
    })
    
    it('guild creation validation name length > 30', () => {
        const { error } = createGuildValidator({
            name: 'loremipsumdolorsitametconsecteturadipiscingelit',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.max')
    })

    it('guild creation validation name length < 6', () => {
        const { error } = createGuildValidator({
            name: '1',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.min')
    })

    it('guild creation validation successful', () => {
        const { error } = createGuildValidator({
            name: 'guild name',
        })

        expect(error).toBe(undefined)
    })

})