/* eslint-disable no-console */
import 'babel-polyfill'

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filtered = inventors.filter(({ year }) => {
    if (year >= 1500 && year <= 1600) {
        return true
    }
    return false
})
console.log('filtered', filtered)

// Array.prototype.map()

// 2. Give us an array of the inventors' first and last names
const mapped = inventors.map(({ first, last }) => ({ first, last }))
console.log('mapped', mapped)

// Array.prototype.sort()

// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
console.table('sorted', sorted)

// Array.prototype.reduce()

// 4. How many years did all the inventors live?
const reduced = inventors.reduce((accumulator, { year }) => accumulator + year, 0)
console.log('accumulative age', reduced)

// 5. Sort the inventors by years lived

const sortedByYearsLived = inventors.sort((a, b) => {
    const ageA = a.passed - a.lived
    const ageB = b.passed - b.lived
    if (ageA > ageB) {
        return 1
    }
    if (ageA < ageB) {
        return -1
    }
    return 0
})
console.table('Sorted By Years Lived', sortedByYearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const boulevards = document.querySelector('.mw-category')
// const links = [...boulevards.querySelectorAll('a')]
// const des = links.map(link => link.textContent).filter(name => name.includes('de'))

// 7. sort Exercise
// Sort the people alphabetically by last name
const splitPeople = people
    .sort((a, b) => {
        const [aLast] = a.split(', ')
        const [bLast] = b.split(', ')
        if (aLast > bLast) {
            return 1
        }
        return -1
    })
    .map(person => {
        const [last, first] = person.split(', ')
        return `${first} ${last}`
    })
console.log('Sorted by surname', splitPeople)

// 8. Reduce Exercise

// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
]
const sumedReduce = data.reduce((vehiclesTotal, vehicle) => {
    if (!vehiclesTotal[vehicle]) {
        vehiclesTotal[vehicle] = 0
    }
    vehiclesTotal[vehicle] += 1
    return vehiclesTotal
}, {})

console.log('Summed Reduce', sumedReduce)
