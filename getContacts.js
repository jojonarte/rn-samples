const CONTACTS = {};

const DEFAULT_SIZE = 1000;

const firstNames = [
	'Emma',
	'Noah',
	'Olivia',
	'Liam',
	'Ava',
	'William',
	'Sophia',
	'Mason',
	'Isabella',
	'James',
	'Mia',
	'Benjamin',
	'Charlotte',
	'Jacob',
	'Abigail',
	'Michael',
	'Emily',
	'Elijah',
	'Harper',
	'Ethan',
	'Amelia',
	'Alexander',
	'Evelyn',
	'Oliver',
	'Elizabeth',
	'Daniel',
	'Sofia',
	'Lucas',
	'Madison',
	'Matthew',
	'Avery',
	'Aiden',
	'Ella',
	'Jackson',
	'Scarlett',
	'Logan',
	'Grace',
	'David',
	'Chloe',
	'Joseph',
	'Victoria',
	'Samuel',
	'Riley',
	'Henry',
	'Aria',
	'Owen',
	'Lily',
	'Sebastian',
	'Aubrey',
	'Gabriel',
	'Zoey',
	'Carter',
	'Penelope',
	'Jayden',
	'Lillian',
	'John',
	'Addison',
	'Luke',
	'Layla',
	'Anthony',
	'Natalie',
	'Isaac',
	'Camila',
	'Dylan',
	'Hannah',
	'Wyatt',
	'Brooklyn',
	'Andrew',
	'Zoe',
	'Joshua',
	'Nora',
	'Christopher',
	'Leah',
	'Grayson',
	'Savannah',
	'Jack',
	'Audrey',
	'Julian',
	'Claire',
	'Ryan',
	'Eleanor',
	'Jaxon',
	'Skylar',
	'Levi',
	'Ellie',
	'Nathan',
	'Samantha',
	'Caleb',
	'Stella',
	'Hunter',
	'Paisley',
	'Christian',
	'Violet',
	'Isaiah',
	'Mila',
	'Thomas',
	'Allison',
	'Aaron',
	'Alexa',
	'Lincoln'
];

const lastNames = [
	'Smith',
	'Jones',
	'Brown',
	'Johnson',
	'Williams',
	'Miller',
	'Taylor',
	'Wilson',
	'Davis',
	'White',
	'Clark',
	'Hall',
	'Thomas',
	'Thompson',
	'Moore',
	'Hill',
	'Walker',
	'Anderson',
	'Wright',
	'Martin',
	'Wood',
	'Allen',
	'Robinson',
	'Lewis',
	'Scott',
	'Young',
	'Jackson',
	'Adams',
	'Tryniski',
	'Green',
	'Evans',
	'King',
	'Baker',
	'John',
	'Harris',
	'Roberts',
	'Campbell',
	'James',
	'Stewart',
	'Lee',
	'County',
	'Turner',
	'Parker',
	'Cook',
	'Mc',
	'Edwards',
	'Morris',
	'Mitchell',
	'Bell',
	'Ward',
	'Watson',
	'Morgan',
	'Davies',
	'Cooper',
	'Phillips',
	'Rogers',
	'Gray',
	'Hughes',
	'Harrison',
	'Carter',
	'Murphy'
];

/**
 * Generates number between min and max
 * @param {number} max
 * @param {number} min
 */
const random = (max, min = 0) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * generates random people names
 */
const generateName = () =>
	`${firstNames[random(firstNames.length - 1)]} ${
		lastNames[random(lastNames.length - 1)]
	}`;

/**
 * generates random phone numbers
 */
const generatePhoneNumber = () =>
	`${random(999, 100)}-${random(999, 100)}-${random(9999, 1000)}`;

/**
 * creates contact object
 */
const createContact = () => ({
	name: generateName(),
	phone: generatePhoneNumber()
});

/**
 * compares two contacts' name
 * @param {Object} contact1
 * @param {Object} contact2
 */
export const compareNames = (contact1, contact2) =>
	contact1.name > contact2.name;

// add keys to based on index
const addKeys = (val, key) => ({ key, ...val });

// create an array of length DEFAULT_SIZE and alphabetize by name
export default (size = DEFAULT_SIZE) =>
	Array.from({ length: size }, createContact).map(addKeys);
