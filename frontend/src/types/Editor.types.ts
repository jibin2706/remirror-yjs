export type AwarenessState = Map<number, AwarenessStateValue>

export type AwarenessStateValue = {
	user: {
		name: string
		color: string
	}
}

export type AwarenessStateValueWithId = {
	id: number
} & AwarenessStateValue
