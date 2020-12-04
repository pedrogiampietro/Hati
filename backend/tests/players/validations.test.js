const { createCharacterValidator } = require('../../src/validators/player')

describe('Player - Validations', () => {
    
    it('player creation validation name required', () => {
        const { error } = createCharacterValidator({})

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('any.required')
    })
    
    it('player creation validation name invalid chars', () => {
        const { error } = createCharacterValidator({
            name: '@player',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.pattern.base')
    })
    
    it('player creation validation name length > 30', () => {
        const { error } = createCharacterValidator({
            name: 'loremipsumdolorsitametconsecteturadipiscingelit',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.max')
    })

    it('player creation validation name length < 6', () => {
        const { error } = createCharacterValidator({
            name: '1',
        })

        const nameErrors = error.details.filter(e => e.context.key === 'name');
        expect(nameErrors).toHaveLength(1)
        expect(nameErrors[0].type).toBe('string.min')
    })

    it('player creation validation successful', () => {
        const { error } = createCharacterValidator({
            name: 'player name',
        })

        expect(error).toBe(undefined)
    })

})