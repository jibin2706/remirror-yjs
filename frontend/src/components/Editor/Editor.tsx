import { Remirror, useRemirror } from '@remirror/react'

import { extensions } from './Editor.utils'

import 'remirror/styles/all.css'
import styles from './Editor.module.css'

function Editor() {
	const { manager } = useRemirror({
		extensions,
	})

	return (
		<section className={styles.container}>
			<Remirror manager={manager} />
		</section>
	)
}

export default Editor
