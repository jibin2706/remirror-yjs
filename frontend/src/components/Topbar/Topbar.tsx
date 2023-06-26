import { useEffect, useState } from 'react'

import { awareness } from '../Editor'

import type {
	AwarenessState,
	AwarenessStateValue,
	AwarenessStateValueWithId,
} from '../../types/Editor.types'
import { getUser } from '../../utils/functions/user'

function Topbar() {
	const [users, setUsers] = useState<AwarenessStateValueWithId[]>([])

	useEffect(() => {
		const user = getUser()
		const state: AwarenessStateValue['user'] = {
			name: user.name,
			color: user.color,
		}
		awareness.setLocalStateField('user', state)
	}, [])

	useEffect(() => {
		handleAwarenessChange()
		awareness.on('change', handleAwarenessChange)
		return () => awareness.off('change', handleAwarenessChange)
	}, [])

	const handleAwarenessChange = () => {
		const values: AwarenessStateValueWithId[] = []
		const state = awareness.getStates() as AwarenessState
		state.forEach((value, key) => {
			values.push({ id: key, ...value })
		})
		setUsers(values)
	}

	return (
		<header className="flex items-center | mb-8">
			<p>Number of connected users: {users.length}</p>

			<section className="flex gap-2 | ml-auto">
				{users.map((item) => (
					<button
						key={item.user.name}
						title={item.user.name}
						className="flex items-center justify-center | border-2 rounded-full | w-10 h-10"
						style={{ borderColor: item.user.color }}
					>
						{item.user.name[0]}
					</button>
				))}
			</section>
		</header>
	)
}

export default Topbar
