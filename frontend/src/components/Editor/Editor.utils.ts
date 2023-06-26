import * as Y from 'yjs'
import { YjsExtension, wysiwygPreset } from 'remirror/extensions'
import { WebsocketProvider } from 'y-websocket'
import { Shape } from 'remirror'

export const SOCKET_URL = 'ws://localhost:8000'
export const SOCKET_ROOM_NAME = 'yjs'
export const DEFAULT_DOCUMENT_ID = '1234'

const docId = new URLSearchParams(window.location.search).get('docId')

const ydoc = new Y.Doc()
export const wsProvider = new WebsocketProvider(
	SOCKET_URL,
	SOCKET_ROOM_NAME,
	ydoc,
	{
		connect: true,
		params: {
			docId: docId ?? DEFAULT_DOCUMENT_ID,
		},
	},
)
export const awareness = wsProvider.awareness

export const extensions = () => [
	...wysiwygPreset(),
	new YjsExtension({
		getProvider: wsProvider,
		cursorBuilder: yjsCursorBuilder,
	}),
]

export const yjsCursorBuilder = (user: Shape) => {
	const cursor = document.createElement('span')
	cursor.classList.add('ProseMirror-yjs-cursor')
	cursor.setAttribute('style', `border-color: ${user.color}`)

	const userDiv = document.createElement('div')
	userDiv.className = '!font-sans'
	userDiv.setAttribute('style', `background-color: ${user.color}`)
	userDiv.insertBefore(document.createTextNode(user.name), null)
	cursor.insertBefore(userDiv, null)
	return cursor
}

export const USER_COLORS = [
	'#5d275d',
	'#b13e53',
	'#ef7d57',
	'#257179',
	'#29366f',
	'#3b5dc9',
	'#41a6f6',
	'#73eff7',
	'#333c57',
]

export const USER_NAMES = [
	'FiftyWitch',
	'FlangeComplex',
	'ButterFilled',
	'LetterConsonant',
	'RingHoodlum',
	'CoachCrab',
	'BoarsWildcat',
	'ImpeccableSalmon',
	'DistraughtChalk',
	'DottedVersus',
	'SaladRegister',
	'RepairSpider',
	'HornedRemaining',
	'LizardSpray',
	'GatewaySeparate',
	'RiceLighten',
	'BaseballSandpiper',
	'ClassicBlue',
	'DrunkBuilder',
	'AloneVengeful',
	'PorchCrowded',
	'MayorRiding',
]
