import { Remirror, useRemirror } from '@remirror/react'

import { Topbar } from '../Topbar'
import { extensions } from './Editor.utils'

import 'remirror/styles/all.css'

function Editor() {
	const { manager } = useRemirror({
		extensions,
	})

	return (
		<section>
			<Topbar />
			<Remirror
				classNames={[
					'prose dark:prose-invert | border rounded | max-w-full | p-4 | focus:outline-none',
				]}
				manager={manager}
			/>
		</section>
	)
}

export default Editor
