import {INotification} from "./interfaces/IActionSendTopic";
import { initializeApp, app, FirebaseError } from 'firebase-admin';

export class Sender {
    static SEND_TOPIC = 'SEND_TOPIC';
    static SEND_GROUP = 'SEND_GROUP';
    static SEND_RECEIVER = 'SEND_RECEIVER';

    key: string;
    admin: app.App;

    constructor(key) {
        this.key = key;
        this.admin = initializeApp(key);
    }

    send(type, notification: INotification): Promise<any> {
        switch(type) {
            case Sender.SEND_TOPIC:
                return this.admin.messaging().sendToTopic(notification.id, notification);
            case Sender.SEND_RECEIVER:
                return this.admin.messaging().sendToDevice(notification.id, notification);
            case Sender.SEND_GROUP:
                return this.admin.messaging().sendToDeviceGroup(notification.id, notification);
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