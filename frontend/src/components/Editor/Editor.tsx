import { Remirror, useRemirror } from '@remirror/react'

import { extensions } from './Editor.utils'

import 'remirror/styles/all.css'
import styles from './Editor.module.css'

function Editor() {
	const { manager, state } = useRemirror({
		extensions,
		content: '<h1>hello world</h1>',
		stringHandler: 'html',
	})

	return (
		<section className={styles.container}>
			<Remirror manager={manager} initialContent={state} />
		</section>
	)
}

export default Editor
