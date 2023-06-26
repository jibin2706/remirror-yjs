import { USER_COLORS, USER_NAMES } from '../../components/Editor'
import { getRandomItemFromArray } from './array'

export function getUser(): { name: string; color: string } {
	const LS_KEY = 'user-details'

	const userDetails = localStorage.getItem(LS_KEY)
	if (userDetails) return JSON.parse(userDetails)

	const newUser = {
		name: getRandomItemFromArray(USER_NAMES),
		color: getRandomItemFromArray(USER_COLORS),
	}
	localStorage.setItem(LS_KEY, JSON.stringify(newUser))
	return newUser
}
