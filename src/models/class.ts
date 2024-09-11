import { Ability } from './ability';
import { Characteristic } from '../enums/characteristic';
import { Feature } from './feature';

export interface SubClass {
	id: string;
	name: string;
	description: string;

	featuresByLevel: { level: number, features: Feature[] }[];

	selected: boolean;
}

export interface HeroClass {
	id: string;
	name: string;
	description: string;

	heroicResource: string;
	subclassName: string;
	subclassCount: number;
	primaryCharacteristics: Characteristic[];
	startingStamina: number;
	staminaPerLevel: number;
	recoveries: number;

	featuresByLevel: { level: number, features: Feature[] }[];
	abilities: Ability[];
	subclasses: SubClass[];

	level: number;
	characteristics: { characteristic: Characteristic, value: number }[];
}
