import * as HP from 'hemera-plugin';

import { Sender } from './Sender';
import {INotification, ISubscribeRequest} from "./interfaces/IActionSendTopic";
import {CMD_SEND_GROUP, CMD_SEND_ID, CMD_SEND_TOPIC, CMD_SUBSCRIBE, CMD_UNSUBSCRIBE, TOPIC_FCM} from "./constants";

export * from './constants';

export interface IHemeraFCMOptions {
    key: string;
}

export const HemeraFCM = HP(async (hemera, options: IHemeraFCMOptions) => {
    const sender = new Sender(options.key);

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_ID,
    }, (request: INotification, cb) =>
        sender.send(CMD_SEND_ID, request)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_TOPIC,
    }, (request: INotification, cb) =>
        sender.send(CMD_SEND_TOPIC, request)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SEND_GROUP,
    }, (request: INotification, cb) =>
        sender.send(CMD_SEND_GROUP, request)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_SUBSCRIBE,
    }, (request: ISubscribeRequest, cb) =>
        sender.subscribe(request.client, request.topic)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    );

    hemera.add({
        topic: TOPIC_FCM,
        cmd: CMD_UNSUBSCRIBE,
    }, (request: ISubscribeRequest, cb) =>
        sender.unsubscribe(request.client, request.topic)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    );
});
