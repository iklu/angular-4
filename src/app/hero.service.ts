/**
 * The naming convention for service files is the service name in lowercase followed by .service. For a multi-word service name, 
 * use lower dash-case. 
 * For example, the filename for SpecialSuperHeroService is special-super-hero.service.ts.
 */

import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

/**
 * The @Injectable() decorator tells TypeScript to emit metadata about the service. 
 * The metadata specifies that Angular may need to inject other dependencies into this service
 */
@Injectable()
export class HeroService {

    /**
     * return array
     */
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    /**
     * 
     */
    getHeroesSlowly(): Promise<Hero[]> {

        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}

