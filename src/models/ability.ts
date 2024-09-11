import { AbilityKeyword } from '../enums/ability-keyword';
import { AbilityUsage } from '../enums/ability-usage';
import { Characteristic } from '../enums/characteristic';

export interface AbilityType {
	usage: AbilityUsage;
	free: boolean;
	trigger: string;
	time: string;
}

export enum AbilityDistanceType {
	Self = 'Self',
	Reach = 'Reach',
	Ranged = 'Ranged',
	Aura = 'Aura',
	Burst = 'Burst',
	Cube = 'Cube',
	Line = 'Line',
	Wall = 'Wall',
	Special = 'Special'
}

export interface AbilityDistance {
	type: AbilityDistanceType;
	value: number;
	value2: number;
	within: number;
	special: string;
}

export interface PowerRoll {
		characteristic: Characteristic[];
		tier1: string;
		tier2: string;
		tier3: string;
}

export interface Ability {
	id: string;
	name: string;
	description: string;

	type: AbilityType;
	keywords: AbilityKeyword[];
	distance: AbilityDistance[];
	target: string; // Creature, Object, Enemy, Ally, Self, All
	cost: number;
	preEffect: string;
	powerRoll: PowerRoll | null,
	effect: string;
	spend: { value?: number, effect: string }[];
}
