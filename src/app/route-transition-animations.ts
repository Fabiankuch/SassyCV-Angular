import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

// Great Tutorial after i did this! -> https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30

export const routeTransitionAnimations = trigger('triggerName', [

	transition('One => Two, One => Three, One => Four, Two => Three, Two => Four, Three => Four', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.8s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),

	transition('Four => Three, Four => Two, Four => One, Three => Two, Three => One, Two => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.8s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.8s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);
