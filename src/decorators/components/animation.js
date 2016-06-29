import utils from 'src/libs/utils';
import {inject} from 'src/decorators/utils/inject';

/**
 * @decorator: @animation
 * @type: function
 *
 * declares a new angular animation
 *
 * @param name (optional)  replaces the class name
 *
 * @returns {Function}
 */
export default function NgAnimation(name = '') {
	return (target) => {
		name = name || target.name;

		var component = function(...injections) {
			let instance = new target(...injections);
			utils.applyTransformations(target, instance, injections);
            return utils.getFinalComponent(target, instance);
		}

		if(!(target.$inject instanceof Array) || target.$inject.length === 0) {
			var parameters = utils.extractParameters(target);
			if(parameters.length > 0)
				inject(parameters)(component);
		}

		utils.addDeclareMethod(target);
		utils.defineComponent(target, name, 'animation', component);
	}
}