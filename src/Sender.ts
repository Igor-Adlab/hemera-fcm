import { initializeApp, app, FirebaseError, credential, AppOptions } from 'firebase-admin';
import {CMD_SEND_DEVICE, CMD_SEND_GROUP, CMD_SEND_TOPIC} from "./constants";

export class Sender {
    static SEND_TOPIC = 'SEND_TOPIC';
    static SEND_GROUP = 'SEND_GROUP';
    static SEND_RECEIVER = 'SEND_RECEIVER';

    credentials: any;
    admin: app.App;

    constructor(options) {
        this.credentials = options;
        this.admin = initializeApp({
            credential: credential.cert(options),
        });
    }

    send(type, id, notification): Promise<any> {
        switch(type) {
            case CMD_SEND_TOPIC:
                return this.admin.messaging().sendToTopic(id, notification);
            case CMD_SEND_DEVICE:
                return this.admin.messaging().sendToDevice(id, notification);
            case CMD_SEND_GROUP:
                return this.admin.messaging().sendToDeviceGroup(id, notification);
            default:
                return Promise.reject(`Handler for type '${type}' not implemented.`)
        }
    }

    subscribe(client: string[], topic: string) {
        return this.admin.messaging().subscribeToTopic(client, topic)
    }

    unsubscribe(client: string[], topic: string) {
        return this.admin.messaging().subscribeToTopic(client, topic)
    }
}