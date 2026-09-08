// @ts-check
/**
 * Exercism JavaScript Track: Annalyn's Infiltration
 */

/**
 * Fast attack is available when the knight is sleeping.
 * @param {boolean} knightIsAwake
 * @return {boolean}
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * Spy is possible if at least one person is awake.
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @return {boolean}
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * Signal prisoner if prisoner is awake and archer is asleep.
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @return {boolean}
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * Free prisoner based on pet dog present or stealth approach.
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 * @return {boolean}
 */
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }
  return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
}
