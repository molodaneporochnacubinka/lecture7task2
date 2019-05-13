/**
 * <Общее описание>
 *
 * @param {string} name имя персонажа
 * @param {string} type тип персонажа
 *
 * @throws {Error} name должно быть строкой, min - 2 символа, max - 10
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('имя персонажа не корректно');
  }
}

const bowman = new Character('лучник', 'Bowman');

console.log(bowman);
