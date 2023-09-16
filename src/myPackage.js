// ts-check : 타입스크립트야, 이 js 파일도 봐줘.
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}

//JSDoc : js를 ts로 바꾸고 싶지는 않으나, ts가 제공하는 보호 장치는 사용하고 싶을 때. 코멘트를 활용해 ts에게 타입을 알려주면 이를 토대로 체크해준다.
