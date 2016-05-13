System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Hero', function () {
                it('has name', function () {
                    var hero = { id: 1, name: 'Super Cat', power: 'superness', alterEgo: 'kitty' };
                    expect(hero.name).toEqual('Super Cat');
                });
                it('has id', function () {
                    var hero = { id: 1, name: 'Super Cat', power: 'awesomeness', alterEgo: 'kitty' };
                    expect(hero.id).toEqual(1);
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map