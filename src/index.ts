import * as HP from 'hemera-plugin';

import { Sender } from './Sender';
import {
    CMD_SEND_DEVICE, CMD_SEND_GROUP, CMD_SEND_TOPIC, CMD_SUBSCRIBE, CMD_UNSUBSCRIBE,
    TOPIC_FCM
} from "./constants";

export * from './constants';

export interface IHemeraFCMOptions {
    credentials: any;
}

export const options = { name: 'hemera-fcm' };
export const plugin = HP((hemera, options: IHemeraFCMOptions, next: Function) => {
    const sender = new Sender(options.credentials);

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_DEVICE,
    }, (request: any, cb) => {
        console.log(request)
        sender.send(CMD_SEND_DEVICE, request.id, request.payload)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
        }
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_TOPIC,
    }, (request: any, cb) =>
        sender.send(CMD_SEND_TOPIC, request.id, request.payload)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_GROUP,
    }, (request: any, cb) =>
        sender.send(CMD_SEND_GROUP, request.id, request.payload)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SUBSCRIBE,
    }, (request: any, cb) =>
        sender.subscribe(request.payload.client, request.payload.topic)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_UNSUBSCRIBE,
    }, (request: any, cb) =>
        sender.unsubscribe(request.payload.client, request.payload.topic)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
    );

    next();
}, '>=2');
