'use strict';

describe('fizzbuzzwhizz', () => {

  it('give a number', () => {
   let result =1;
    expect(game(1)).toEqual(result);
    })
    it('give a number', () => {
        let result ="fizz";
        expect(game(35)).toEqual(result);
    })
    it('give a number', () => {
        let result ="buzz";
        expect(game(5)).toEqual(result);
    })
    it('give a number', () => {
        let result ="whizz";
        expect(game(7)).toEqual(result);
    })
});
