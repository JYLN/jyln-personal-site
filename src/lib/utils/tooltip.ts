import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export function tooltip(node: HTMLUnknownElement, options: object) {
	const tooltip = tippy(node, options);

	return {
		destroy() {
			tooltip.destroy();
		}
	};
}
