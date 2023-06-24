import * as Y from 'yjs'
import { YjsExtension, wysiwygPreset } from 'remirror/extensions'
import { WebsocketProvider } from 'y-websocket'

export const SOCKET_URL = 'ws://localhost:8000'
export const SOCKET_ROOM_NAME = 'yjs'
export const DEFAULT_DOCUMENT_ID = '1234'

const docId = new URLSearchParams(window.location.search).get('docId')

const ydoc = new Y.Doc()
const provider = new WebsocketProvider(SOCKET_URL, SOCKET_ROOM_NAME, ydoc, {
	connect: true,
	params: {
		docId: docId ?? DEFAULT_DOCUMENT_ID,
	},
})

console.log(provider.awareness)

export const extensions = () => [
	...wysiwygPreset(),
	new YjsExtension({
		getProvider: provider,
	}),
]
