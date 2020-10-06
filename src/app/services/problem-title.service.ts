import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProblemTitleService {

    constructor() { }

    getProblemTitleById(problemId: number): string {
        switch (problemId) {
            case 1:
                return 'Multiples of 3 and 5';
            case 2:
                return 'Even Fibonacci numbers';
            case 3:
                return 'Largest prime factor';
            case 4:
                return 'Largest palindrome product';
            case 5:
                return 'Smallest multiple';
            case 6:
                return 'Sum square difference';
            case 7:
                return '10001st prime';
            case 8:
                return 'Largest product in a series';
            case 9:
                return 'Special Pythagorean triplet';
            case 10:
                return 'Summation of primes';
            case 11:
                return 'Largest product in a grid';
            default:
                return 'Not yet implemented'
        }
    }
}