import Vue from 'vue';
import { CaptionManager } from './CaptionManager';

class EventBusManager extends Vue {}



export const EventBus = new EventBusManager();
export const captionManager = new CaptionManager();

